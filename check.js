// let str = [
//     {"key":"1234",
//     "name":"gaurav",
//     "age":"22"},
//     {
//         "key":"12345",
//         "name":"jayesh",
//         "age":"26"
//     }

// ]

// console.log("the name is "+str[1]["name"]+" and age is "+str[1]["age"])



//callbacks//

// function square(n) {
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function something(x,y,fn){
//     let x1 = fn(x);
//     let y1 = fn(y);
//     return x1+y1;
// }
// let ans = something(4,5,cube);
// console.log(ans);


// async functions//

// function onDone(){
//     console.log("hi");
// }

// setTimeout(onDone,1000);

// for(let i=0;i<100;i++){
//     console.log(i);
// }
// let date = new Date();
// console.log(date.getTime());
// let a = 0;
// setInterval(function () {console.log(a++)}, 1000);
// for(let i =0;i<10000;i++){
//     setTimeout(function (){console.log(i)},1000*i);
// }

const fs =require('fs');

// fs.readFile("C:\\Users\\gaura\\Desktop\\cohort\\assignments-master\\week-2\\02-nodejs\\files\\a.txt","utf-8", function(err,data){
//     console.log(data);
// })
// for(let a = 0; a<100000000000;a++){
//     a=a+1;
// }
// let data = "This is a file containing a collection of books.";
 
// fs.writeFile("books.txt", data, (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");
//     console.log("The written has the following contents:");
//     console.log(fs.readFile("books.txt", "utf8",function(err,data){
//             console.log(data);}));
//   }
// });

// fs.readFile("C:\\Users\\gaura\\Desktop\\cohort\\assignments-master\\week-2\\02-nodejs\\files\\a.txt","utf-8", function(err,data){
//     let date = data.replace(/\s+/g, ' ');
//     fs.writeFile("books.txt", date, (err) => {
//         if (err)
//           console.log(err);
//         else {
//           console.log("File written successfully\n");
//         }
//       })
    

// });



// function showTime(){
//     const currentDate = new Date();
//     if(currentDate.getHours < 12){
//         console.log(currentDate.getHours(),":",currentDate.getMinutes(),":",currentDate.getSeconds(),"AM");
//     }
//     else{
//         console.log(currentDate.getHours()%12,":",currentDate.getMinutes(),":",currentDate.getSeconds(),"PM");
//     }
// }
// setInterval(showTime, 1000);
const zod = require("zod");
const schema = zod.string().email();
const schema1 = zod.string().min(6);

const response = schema.safeParse("gauravmasand447@gmail.com");
console.log(response);
const response1 = schema.safeParse("gauravmasand447mail.com");
console.log(response1);
const response2 = schema1.safeParse("gaurav");
console.log(response2);
const response3 = schema1.safeParse("gaura");
console.log(response3);


const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

var token = jwt.sign({username:"masand",
password:"asdfg"},jwtPassword);
console.log(token);
const decoded = jwt.verify(token,jwtPassword);
// const decoded1 = jwt.verify(token,"123");

