import Product from "../model/product.js";

export const createProduct = (req, res, next) => {
    const productInfo = req.body;
    const product = new Product(productInfo);

    product
        .save()
        .then(() => {
            res.json({ message: "Product created " }); // like res.send
        })
        .catch((err) => {
            res.json({ message: err.message });
        });
};