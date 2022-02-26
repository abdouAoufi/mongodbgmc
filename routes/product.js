import { Router } from "express";
import { createProduct, getAllProducts } from "../controller/product.js";

const productRouter = Router();

productRouter.post("/product", createProduct);
productRouter.get("/product", getAllProducts);

export default productRouter;