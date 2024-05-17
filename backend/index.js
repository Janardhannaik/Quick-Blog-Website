const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

//middlewares
dotenv.config();

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("port running succefully");
});
