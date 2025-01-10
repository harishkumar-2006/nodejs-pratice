const express = require("express");
const cors = require("cors");

const app = express();
const options = {
    orgin:(orgin,callback) => {
        callback(null,true)
    }
}   
app.use(cors(options));
app.use(express.json());

const data = ["Hello World",123,{"key":"value"}];
app.get('/',(req,res)=>{
    res.send(data)
})
const studentData = [
    {
    name:"Harish",
    age: 18,
    rollNumber : 233101
    },
];
app.post('/',(req,res) => {
    studentData.push(req.body);
    console.log(req.body)
    res.send("Done")
})


app.get('/student',(req,res)=>{
    res.send(studentData);
})
app.listen(3333,()=>{
    console.log("Stared")
})