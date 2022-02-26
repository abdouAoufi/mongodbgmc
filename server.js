import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(userRouter);
app.use(productRouter);

app.use(express.static("view")); // serve static files

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