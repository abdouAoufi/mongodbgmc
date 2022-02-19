import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

const app = express();

app.use(userRouter);

app.use(express.static("view"));

// ! Connect to mongodb
mongoose
    .connect("mongodb://127.0.0.1:27017/newshop")
    .then(() => {
        console.log("Connected successfuly to database");
        //! Execute node server
        app.listen(1337, () => {
            console.log("Node server started");
        });
    })
    .catch(() => {
        console.log("Failed to connect to database");
    });