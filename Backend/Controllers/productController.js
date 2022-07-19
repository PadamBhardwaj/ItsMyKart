const Product = require("../Models/productModel")
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
};
exports.getProduct = async (req, res) => {
    const product = await Product.findById(req.params, id);
    if (!product) {
        res.status(400).json({
            success: false,
            message: "No product found"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
};
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        res.status(400).json({
            success: false,
            message: "No product found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
};
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(400).json({
            success: false,
            message: "No product found"
        })
    }
    await product.remove()
    res.status(200).json({
        success: true,
        message: "product deleted"
    })
};