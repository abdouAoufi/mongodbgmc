import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const MODEL_NAME = "user";

const schema = new Schema({
    name: { type: Schema.Types.String, required: true, default: "no user name" },
    email: { type: Schema.Types.String, required: true },
    age: { type: Schema.Types.Number, required: false },
    password: { type: Schema.Types.String, required: true },
});

export default model(MODEL_NAME, schema);