const express = require("express");
const app = express();

const port = process.env.port || 5000;

const product_route = require("./routes/product");

// const connectDB = require("./db/connect");

// Here we are creating middleware

app.use("/products/api", product_route);

app.get("/", (req, res) => {
  res.send("Hey I am Live Now!");
});

const start = async () => {
  try {
   
      app.listen(port, () => {
        
      console.log(`Listening at Port  ${port} `);
    });
  } catch (error) {
    console.log("500 Internal server error");
  }
};

start();
