const express = require("express");
const cors = require("cors");
const Users = require("./users");
const connectDB = require('./config-db/db');

const app = express();
connectDB();

app.use(cors());
const port = 5000;

app.get("/usres", async (req, res) => {
    try {
      const users = await Users.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.get("", (req,res) => {
    res.send('Hello server page');
});

app.get("/usres", async (req, res) => {
  try {
    const users = await Users.find( {email:''});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(port, () => 
{
    console.log(`Hello port number ${port}`);
});