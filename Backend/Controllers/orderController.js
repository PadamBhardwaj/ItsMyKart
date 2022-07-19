const Order = require("../Models/orderModel")
exports.createOrder = async (req, res, next) => {
    const order = await Order.create(req.body);
    res.status(201).json({
        success: true,
        order
    })
};
exports.getOrder = async (req, res) => {
    const order = await Order.findById(req.params, id);
    if (!order) {
        res.status(400).json({
            success: false,
            message: "No order found"
        })
    }
    const productsarr = order.products;
    var totalamount = 0;
    productsarr.map(prod => {
        totalamount += prod.price;
    })
    res.status(200).json({
        success: true,
        amount: totalamount,
        order
    })
};
exports.updateOrder = async (req, res, next) => {
    let order = await Order.findById(req.params.id);
    if (!order) {
        res.status(400).json({
            success: false,
            message: "No Order found"
        })
    }
    order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        order
    })
};
exports.deleteOrder = async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        res.status(400).json({
            success: false,
            message: "No Order found"
        })
    }
    await order.remove()
    res.status(200).json({
        success: true,
        message: "order deleted"
    })
};