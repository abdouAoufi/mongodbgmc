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

export const getAllProducts = (req, res, next) => {
    Product.find({})
        .exec()
        .then((result) => {
            res.json({ products: result });
        })
        .catch((err) => {
            res.json({ message: err.message });
        });
};