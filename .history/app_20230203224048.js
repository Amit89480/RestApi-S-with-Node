const express = require("express");
const app = express();
const mongoose=require("mongoose")

const port = process.env.port || 5000;

const product_route = require("./routes/product");

const connectDB = require("./db/connect");

// Here we are creating middleware

app.use("/api/products", product_route);

// app.get("/", (req, res) => {
//   res.send("Hey I am Live Now!");
// });

// Here we are creating our alternate database connection

const db=""

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Listening at Port  ${port} `);
    });
  } catch (error) {
    console.log("505 Internal Server Error");
  }
};

start();
