import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const MODEL_NAME = "Product";

const producSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        default: "No Produce Name",
    },
    price: {
        type: Schema.Types.Number,
        required: true,
        default: 0,
    },
    desc: {
        type: Schema.Types.String,
        required: false,
        default: "No description",
    },
    img: {
        type: Schema.Types.String,
        required: true,
        default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthealmanian.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fproduct_image_thumbnail_placeholder.png&f=1&nofb=1",
    },
});

export default model(MODEL_NAME, producSchema);