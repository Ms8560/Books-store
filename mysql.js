var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
  
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

  // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

// con.query("SELECT * FROM customers",function(err,result,fields){
//   if(err) throw err;
//   console.log(result);
// });





// con.query("SELECT name,address,Designation FROM Employee",function(err,result,fields){
//   if(err)throw err;
//  console.log("succesful");


// });

//  con.query("CREATE TABLE Employee (name VARCHAR(255), address VARCHAR(255),Phone_no INT,Designation VARCHAR(20)")
//  if(err)throw err;
//  console.log("NEW table created");

//   

//  con.query("SELECT name,address,Designation FROM Employee",function(err,result,fields){
//   if(err)throw err;
//   console.log("succesful");

// var sql="CREATE TABLE Employee (name VARCHAR(255), address VARCHAR(255),Phone_no INT,Designation VARCHAR(20))"
// con.query(sql,function(err,result){
//   if(err)throw err;
//   console.log("NEW table created");

// })
  

// var sql = "INSERT INTO Employee (name,Phone_no ,Address,Designation) VALUES ?";
//   var values = [
//     ['Mohan', '230000','palam','supervisor'],
//     ['Jon', '24132132','Munirka','Manager'],
//     ['Naruto', '3554545','dwarka','frontend-developer'],
//     ['lucky', '4045454','okhla','Senior-Manager'],
//     ['kuldeep', '4411121','Ashok Vihar','CEO'],
//     ['Hitesh', '3612121','Faridabad','backend-developer'],
//     ['Nitesh ', '29546464','Saket','Excutive']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//    });


// con.query("SELECT name,Address,Designation FROM Employee",function(err,result,fields){
//      if(err)throw err;
//      console.log(result);
//     });



// con.query ("SELECT * FROM Employee WHERE designation ='Manager' ", function(err,result){
//   if(err) throw err;
//   console.log(result);
// })
    
// con.query("SELECT * FROM Employee WHERE name LIKE 'Naruto%'", function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//  var address ='dwarka';
//  var Designation='Manager';

//  var sql ='SELECT * FROM Employee WHERE address = ? OR Designation = ?';
//  con.query(sql,[address,Designation] ,function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });


// var arr='SELECT * FROM Employee WHERE  Address="palam" OR NOT Designation="Manager"';
// con.query(arr ,function (err, result) {
//     if (err) throw err;
//      console.log(result);
//    });


// var sql="CREATE TABLE products(name VARCHAR(200),Phone_no VARCHAR(255))"
// con.query(sql,function(err,res,fields){
//   if (err) throw err;
//   console.log("data inserted");
// });

// var sql="INSERT INTO products(name,Phone_no) VALUES ?";

// var values=[
//   [  'Mohan', '88888888888'],
//   [  'Jon',  '99999999999'],
//   [  'Naruto',  '55555555555']
// ]
// con.query(sql,[values],function(err,res,fields){

// if (err) throw err;
// console.log("data inserted")

// })

// var sql="SELECT Employee.name AS user , products.Phone_no AS p_no FROM Employee JOIN products ON Employee.name =products.name";
// con.query(sql,function(err,res,fields){

//    if (err) throw err;
//    console.log(res)
  
//    })

// var sql="CREATE TABLE employee_2 (e_name VARCHAR(255), e_id VARCHAR(255) ,e_n0 VARCHAR(255))"

// con.query(sql,function(err,res,fields){
//   if (err) throw err;
//   console.log(created);
// })

// var sql="INSERT INTO employee_2(e_name,e_id,e_n0) VALUES ?";

// var values=[
//   ['Mohan', '230000','999999999999'],
//       ['Jon', '24132132','8888888888888'],
//       ['Naruto', '3554545','777777777777'],
//       ['lucky', '4045454','6666666666666'],
//       ['kuldeep', '4411121','555555555555555']
// ]
// con.query(sql,[values],function(err,res,){
//     if (err) throw err;
//     console.log("inserted" + res.affectedRows);
//   })

// var sql = "INSERT INTO Employment (Employment_ID, Employment_Profile, Employment_Country, Employment_Joining) VALUES ?";
//     var values = [
//       [1, 'manager', 'India', '2020-08-23' ],
//       [2, 'excutive', 'India', '2022-08-24' ],
//       [3, 'backend developer', 'India', '2021-08-25' ],
//       [20, 'frontend developer', 'India', '2014-08-27' ],
//       [21, 'UIUX designer', 'India', '2022-08-28' ],
//       [44, 'CEO', 'India', '2013-08-29' ],
//       [8, 'Senior manager', 'India', '2014-08-30' ]
      
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//      });

//     var sql = "CREATE TABLE Employment  ( Employment_ID INT, Employment_Profile VARCHAR(255), Employment_Country VARCHAR(255), Employment_Joining Datetime)";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//  });

var sql="select * from employee join Employment on  Employee.Employee_ID=Employment.Employment_ID"
con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
});