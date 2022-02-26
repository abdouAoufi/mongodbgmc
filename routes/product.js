import { Router } from "express";
import { createProduct } from "../controller/product.js";

const productRouter = Router();

productRouter.post("/add-product", createProduct);

export default productRouter;