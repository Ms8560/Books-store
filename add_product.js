var mongoose=require("./db/config");
var mongoose=require("mongoose");

const Schema2=new mongoose.Schema({
    productname:{
        type:String
       
    },

    productprice:{
        type:Number
      
    },
    productimage:{
        type:String
        
    }
});

const add_product=new mongoose.model ('new_product', Schema2)
module.exports=add_product;