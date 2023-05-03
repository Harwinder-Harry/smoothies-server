const express = require("express");
const app = express();
const connectDB = require('./config-db/db');

connectDB();

const port = 5000;

app.get("", (req,res) => {
    res.send('Hello server page');
});

app.listen(port, () => 
{
    console.log(`Hello port number ${port}`);
});