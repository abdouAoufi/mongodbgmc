import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
} from "../controller/product.js";

const productRouter = Router();

productRouter.post("/product", createProduct);
productRouter.get("/product", getAllProducts);
productRouter.put("/product", updateProduct);
productRouter.delete("/product", deleteProduct);

export default productRouter;