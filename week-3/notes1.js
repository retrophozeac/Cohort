// Middlewares, Authentication, Global catches, Zod
//user should send username and password in headers
//user should send query parameters.
// we want to use middleware for the authentication instead of doing if statements everytime.

const express = require("express");
const app = express();
function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username!= "gaurav" || password!="pass"){
        res.status(403).json({
            msg:"wrong inputs"
        });
    }
    else{
        next();
    }
};
function kidneyMiddleware(req,res,next){
    const kidneyID = req.query.kidneyID;
    if(kidneyID!= 1 && kidneyID!=2){
        res.status(403).json({
            msg:"wrong inputs"
        });
    }
    else{
        next();
    }
};
let numberofrequests = 0;
function calculateRequests (req,res,next){
    numberofrequests++;
    console.log(numberofrequests);
    next();
};
app.use(express.json);// middleware that get called everywhere
//app.use(fuction);call the middleware for all without passing specifically

app.get("/health-checkup", userMiddleware,kidneyMiddleware, function(req,res){
    res.send("You are Healthy");
});

//---------------------------------------------------------------------------------------------------------------------------
// input validation so that the random shit send by user is handled.
app.post("/health" , function(req,res){
    //kidneys=[1,2];
    const kidneys = req.body.kidneys;
    const kidneyLength= req.kidneys.kidneyLength;
    res.send("you have "+kidneyLength +" kidneys");
});
//global catches , another type of middleware to catch errors. takes 4 arguments. 
app.use(function(err,req,res,next){
    res.json({
        msg:"Sorry something is up with our server"
    })
})
//Authentication
//zod library to do input validation
//npm install zod
// const zod =require("zod");
const schema = zod.array(zod.number);
const response = schema.safeParse(kidneys); //success or not will be returned by the function and also sends the issues. 
const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.array(z.number())
})
//zod lets you validate input on a schema