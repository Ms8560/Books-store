

const { default: mongoose } = require('mongoose');
var mongo=require('mongoose');
var conn=mongo.connect("mongodb+srv://Mayank:Mayank1417@cluster0.g2oz1wy.mongodb.net/homework?retryWrites=true&w=majority",

{

 useNewUrlParser:true,
 useUnifiedTopology:true

}
)
.then(()=> console.log("connection successfully.."))
.catch((err)=> console.log(err));

module.exports=conn;