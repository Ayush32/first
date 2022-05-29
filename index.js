const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send("This is home Page")
});

app.listen(port,(req,res) => {
    console.log("server is running on port : ${port}");
})