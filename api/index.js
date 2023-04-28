import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from "./routes/Auth.js";
import HotelRoute from "./routes/Hotel.js";
import UsersRoute from "./routes/Users.js";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb.");
  } catch (err) {
    throw err;
  }
};

//middlewares

app.use("/api/auth", AuthRoute);
app.use("/api/users", UsersRoute);
app.use("/api/hotels", HotelRoute);

app.listen(8800, () => {
  console.log("connected to the backend!");
  connect();
});
