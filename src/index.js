const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
const path = require("path") ;
const port = process.env.PORT || 4000 ;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/airbnb-clone-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('connected to MongoDB') ;
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`[🚧 server is running on ${port}]`));