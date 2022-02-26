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

export const updateProduct = (req, res, next) => {
    const newInfo = req.body;
    const id = newInfo.id;
    Product.findByIdAndUpdate(id, newInfo)
        .exec()
        .then(() => {
            res.json({ message: "Product updated" });
        })
        .catch((err) => {
            res.json({ message: err.message });
        });
};

export const deleteProduct = (req, res, next) => {
    const info = req.body;
    Product.findByIdAndRemove(info.id)
        .exec()
        .then(() => {
            res.json({ message: "Product deleted successfully" });
        })
        .catch((err) => {
            res.json({ message: err.message });
        });
};