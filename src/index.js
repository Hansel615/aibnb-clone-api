/*eslint-env es6*/
/*Generic Base Dependencies*/
const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
const path = require("path") ;
const port = process.env.PORT || 8000 ;
const morgan = require('morgan');
const fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log',{flags: 'a'});



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/airbnb-clone-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('connected to MongoDB') ;
});
app.use(morgan('combined', {stream: accessLogStream}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`[🚧 server is running on ${port}]`));
app.get('/api', function (req, res) {
    res.send('hello, world!')
  });
  