

var mongos=require("./db/config")
var mongos=require("mongoose")
var bcrypt =require("bcrypt")

const Schema1= new mongos.Schema({

    fullname:{type:String,required:true},
    
    email:{type:String,required:true},

    contact:{type:Number,required:true},

    password:{type:String,required:true},

    repeatpassword:{type:String,required:true},
    
    // active:Boolean,
    date:{type:Date,default:Date.now}
    
    });
    
    //collection creation 
    // var declared with const must bne in caps beacuse it'll be used as a class
    
    // const Laylist = new mongo.model("Disctrack",listSchema);
    // // playlist is a name of collection name
    
    
    // // create document or insert
    // const createDocument=async()=>{
    
    //     try{
    //         const productlist2= new Laylist({
    //             name:'sita',
    //             email:'sita@gmail.com'
    //         })
    
    //         // method to save one data
    //         // productlist2.save()
           
    //         const productlist3= new Laylist({
    //             name:'gita',
    //             email:'gita@gmail.com'
    //         })
    
    //         const productlist4= new Laylist({
    //             name:'dita',
    //             email:'dita@gmail.com'
    //         })
    
    //         const productlist5= new Laylist({
    //             name:'eita',
    //             email:'eita@gmail.com'
    //         })
    
    //         const result= await Laylist.insertMany([productlist2,productlist3,productlist4,productlist5]);
    //         console.log(result);
    
    
    //     }
    //     catch(err){console.log(err)}
    
    // }
    // createDocument()

    

    Schema1.pre("save", function(next){
        if(!this.isModified("password")){
            return next ();
        }
        this.password= bcrypt.hashSync(this.password,10);
        next();
    })
    
    Schema1.methods.comparePassword = function(plaintext,callback){
        return callback(null,bcrypt.compareSync(plaintext, this.password))
    }

    const registerSchema= new mongos.model('register',Schema1);
    module.exports=registerSchema;