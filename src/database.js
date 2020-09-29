const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://atlastest:atlastest@cluster0.g8cah.mongodb.net/airbnb-api-eq4?retryWrites=true&w=majority',{  
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log('Success connexion to Atlas');
})
.catch((error) =>{
 console.log('connection failed to Atlas')
 console.error(error);
});

module.exports = mongoose;