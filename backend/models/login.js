var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongoURL ="mongodb+srv://zaghloul1:1581992mZ@meanproject.kquudvv.mongodb.net/?retryWrites=true&w=majority";

var conn = mongoose.createConnection(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, connect){
    if(err){
        console.log(err);
    }else{
        console.log("Connected to mongoDB");
    }
}); 


var loginSchema = new Schema({
    id: String,
    pwd: String,
});

module.exports = conn.model('login', loginSchema);