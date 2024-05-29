const express = require("express");
const app = express();

const port = 3000;

// function calculateSum(n){
//     let ans = 0;
//     for(let i=1;i<=n; i++){
//         ans = ans+i;
//     }
//     return ans;
// }

// app.get("/", function(req,res){
    
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send("hi your ans is " +ans);
// })

// app.listen(port,function{
//     console.log(`Example app listening on port ${port}`)
// })

var users = [{
    name :"gaurav",
    kidneys:[{
        healthy:false
    }]
}];


//query parameters
app.get("/", function(req,res){
    
    const me  = users[0].kidneys;
    const no = me.length;
    let nohealthy= 0;
    for(let i = 0;i<me.length;i++){
        if(me[i].healthy){
            nohealthy += 1;
        }
    }
    const nounhealthy = no -nohealthy;
    res.json({
        no,
        nohealthy,
        nounhealthy
    })
})
app.use(express.json());
// body 
app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    };
    res.json({});
})

app.delete("/",function(req,res){
    const newKidneys=[]
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    };
    users[0].kidneys=newKidneys;
    res.json({msg:"Done!"});
})



app.listen(port);
