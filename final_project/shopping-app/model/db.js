const mongoose =  require('mongoose');
const DB_URL = "mongodb://Ethan_chan:chenlei0908@ds161446.mlab.com:61446/leichen";
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL,{useMongoClient:true});

/**
  * connect sucessful
  */
  mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + DB_URL);  
});    
 
/**
 * connect error
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * connect break
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
});


module.exports = mongoose;