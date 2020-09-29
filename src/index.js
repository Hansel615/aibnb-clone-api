const authRoutes = require("./routes/auth");
const passportJWT = require("./middlewares/passportJWT")();
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const express = require("express") ;
const app = express() ;
const mongoose = require("./database.js") ;
const path = require("path") ;
const port = process.env.PORT || 5678 ;
const morgan = require('morgan');
const fs = require('fs');
const placeRoutes = require("./routes/place");
const cityRoutes = require('./routes/city')

var accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});

// pour atlas connection mongoose sur database.js
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/airbnb-clone-api", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(function(){
//     console.log('connected to MongoDB successfully') ;
// });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passportJWT.intialize());
app.use(morgan('combined', {stream: accessLogStream})) ;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/static'))
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/auth", authRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/cities", cityRoutes)
app.set('view engine', "pug");
app.set('views', "./src/views");

app.listen(port, () => console.log(`[server is running on ${port}]`));

app.get('/api', function (req, res) {
    res.send('hello, world!')
  });
  // app.get("*",(req,res) => {
  //   res.render('404')
  // })