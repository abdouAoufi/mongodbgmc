import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    updateProduct,
} from "../controller/product.js";

const productRouter = Router();

productRouter.post("/product", createProduct);
productRouter.get("/product", getAllProducts);
productRouter.put("/product", updateProduct);

export default productRouter;