var express = require('express')
var mongos = require("./db/config")
var regis = require("./register")
var mongoose = require('mongoose')
var bodyParser = require("body-parser")
// var  add = require("./add_product")
var product = require("./product")
var multer = require('multer')
var cookie = require('cookie-parser')
var session = require('express-session')


 const path =require('path')
const cookieParser = require('cookie-parser')
 


var app = express();
var router = express.Router();
app.use(express.static('views'));
app.use(express.static(path.join(__dirname,'/upload')))
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(
  session({
    key:"user_sid",
    secret: "somerandomstuffs",
    resave:false,
    saveUninitialized:false,
    cookie:{
      expires:600000,
    },
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {

  res.render('index');
});


// login 

app.post('/login',async (req,res)=>{
  var email= req.body.email,
      password= req.body.password;

  try{
      var user= await regis.findOne({email:email})
      .exec();
      console.log(user)
      if(!user){
          res.redirect("/");
      }
      user.comparePassword(password,(error,match)=>{
          if(!match){
              res.redirect("/")
          }
      });

      req.session.user = user;
      res.redirect("/dashboard");
  }  
  catch(err){
      console.log(err)
    }  
})


app.get('/About', function (req, res) {
  res.render('About');
})

app.get('/Contact', function (req, res) {
  res.render('Contact');
})

app.get('/new', function (req, res) {
  res.render('new');
})

app.get('/bestsellers', async function (req, res) {
  // res.render('bestsellers');
  try {
    const product1 = await product.find({});

    res.render('bestsellers', { product1: product1 });
    console.log(product1);
  }
  catch (err) {
    console.log(err);
  }
});



app.get('/fiction', function (req, res) {
  res.render('fiction');                                                              
})

app.get('/register', function (req, res) {
  res.render('register');
})








// ===============================================  

router.post('/register', (req, res)=> {
  var register1 = {
    fullname: req.body.fullname,
    email: req.body.email,
    contact: req.body.contact,
    password: req.body.password,
    repeatpassword: req.body.repeatpassword
  };
  var regpost = new regis(register1);
  regpost.save()
    .then(() => res.json('register succesfully'))
    .catch(err => res.status(400).json('error:', err));
});

router.get('/view_registration', async (req, res) => {
  try {
    const viewregis = await regis.find({});
    res.render('dashboard/view_registration', { viewregis: viewregis });
    console.log(viewregis);
  }
  catch (err) {
    console.log(err);
  }
});

// delete

router.get("/delete/:id", async (req, res) => {
  try {
    const movies = await regis.findByIdAndRemove(req.params.id);
    res.redirect("/view_registration")
  }
  catch (err) {
    console.log(err)
  }
})

// edit

router.get("/edit/:id", async (req, res) => {
  try {
    const movies1 = await regis.findById(req.params.id);
    res.render("dashboard/edit_registration", { movies1: movies1 })

  }
  catch (err) {
    console.log(err)
  }
})



router.post("/edit/:id", async (req, res) => {
  const itemId = req.params.id;
  const updatedData = {
    fullname: req.body.fullname,
    email: req.body.email,
    contact: req.body.contact,
    password: req.body.password,
    repeatpassword: req.body.repeatpassword
  };
  try {
    const updatedItem = await regis.findByIdAndUpdate(itemId, updatedData, { new: true });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // res.json(updatedItem);
    res.render('/edit/' + itemId)
    res.redirect('/view_registration')


  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



app.get('/allbooks', function (req, res) {
  res.render('allbooks');
})

app.get('/index', function (req, res) {
  res.render('index');
})








app.get('/dashboard',(req,res)=>{
  if(req.session.user && req.cookies.user_sid){
      
  
  res.render('dashboard/index')
  }
  else{
      res.redirect("/adminlogin");
}
})



app.get('/addproduct', function (req, res) {
  res.render('dashboard/addproduct')
})

app.get('/adminlogin',(req,res)=>{
  res.render('dashboard/adminlogin')
})


app.get('/productdetail', function (req,res){
  res.render('productdetail')
})

router.get('/details/:id', async(req,res) =>{
  try{
  const usedta=await upd_course.findById(req.params.id);
  
  console.log(usedata)
  res.render('productdetail',{usedta:usedta});
  }
  catch(err){
      console.log(err)
   }
        } )


// file upload
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null ,'./upload');
    
  },

  filename: function (req, file, cb){
    cb(null,file.originalname);
    

  }
});

const fileFilter = (req,file,cb)=>{
  const allowedFileTypes =['image/jpeg','image/jpg','image/png','image/webp'];
  if(allowedFileTypes.includes(file.mimetype)){
    cb(null,true);
  }
  else{
    cb(null,false);
  }
}
 let upload = multer({storage,fileFilter});

//  

app.post('/addproduct',upload.single('ProductImage'), (req, res) => {
  var productdata = {
    ProductName: req.body.ProductName,
    ProductPrice: req.body.ProductPrice,
    ProductImage: req.body.ProductImage,
    ProductImage: req.file.filename
  };
  var regpost = new product(productdata);
  regpost.save()
    .then(() => res.json('register successfully'))
    .catch(err => res.status(400).json('error:' + err));
});

router.get('/product', async (req, res) => {
  try {
    const product1 = await product.find({});

    res.render('dashboard/view_addproduct', { product1: product1 });
    console.log(product1);
  }
  catch (err) {
    console.log(err);
  }
});

// delete api

router.get("/delete1/:id", async (req, res) => {
  try {
    const movies2 = await product.findByIdAndRemove(req.params.id);
    res.redirect("/view_addproduct")

  }
  catch (err) {
    console.log(err)
  }
})


//edit product
router.get("/edit1/:id", async (req, res) => {
  try {
    const productdata1 = await add_product.findById(req.params.id);
    //  console.log(productdata1)
    res.render("/view_addproduct", { productdata1: productdata1 });
  } catch (err) {
    console.log(err);
  }
});

// router.post("/edit/:id", async (req, res) => {
//   const itemId = req.params.id;
//   const updatedData = {
//     ProductName: req.body.ProductName,
//     ProductPrice: req.body.ProductPrice,
//     ProductImage: req.body.ProductImage
//   };
//   try {
//     const updatedItem = await product.findByIdAndUpdate(itemId, updatedData, { new: true });

//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     // res.json(updatedItem);
//     res.render('/edit/' + itemId)
//     res.redirect('/view_addproduct')


//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });










app.use('/', router)
app.listen(8080)