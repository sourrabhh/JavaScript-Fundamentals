const express = require("express");

const app = express();
const port = 3000;

function middlewareCounter(req, res, next){
    console.log(req.headers.counter);
    next();
}

app.use(middlewareCounter);

function sum(counter){
    var sum =0;

    for(var i =0; i < counter; i++){
        sum = sum+ i;
    }
    return sum;
}

function handleSum(req, res){
    // var counter = req.query.counter;
    var counter = req.headers.counter;
    var calculatedSum = sum(counter);

    var ans = "Calculated SUM IS :: " + calculatedSum;
    res.send(`Hello World !! SUM IS :: ${ans}`);
}

function handleRouteInfo(req, res){
    res.send("Second Route At info");
}


// app.get('/sum' , handleReq);
app.post('/sum' , handleSum);
app.post('/info' , handleRouteInfo);
function started(){
    console.log(`App Started on ${port}`);
}
app.listen(port , started);




// console.log(calculatedSum);