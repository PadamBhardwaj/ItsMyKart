const Customer = require("../Models/customerModel")
const Order = require("../Models/orderModel")
exports.createCustomer = async (req, res, next) => {
    // const data = req.body;
    console.log(req.body)
    const customer = await Customer.create(req.body);
    res.status(200).json({
        success: true,
        customer
    })

}
exports.getCustomer = async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(400).json({
            success: false,
            message: "No cutomer found"
        })
    }
    res.status(200).json({
        success: true,
        customer
    })
};


exports.updateCustomer = async (req, res, next) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(400).json({
            success: false,
            message: "No cutomer found"
        })
    }
    customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        customer
    })
};
exports.deleteCustomer = async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        res.status(400).json({
            success: false,
            message: "No cutomer found"
        })
    }
    await customer.remove()
    res.status(200).json({
        success: true,
        message: "customer deleted"
    })
};
exports.addOrder = async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));

    }
    const order = await Order.create(req.body);
    await Customer.findOneAndUpdate({ _id: customer._id }, { $push: { orders: { Order: order._id } } })
    res.status(200).json({
        success: true,
        order,
        message: "order added"
    })
};
