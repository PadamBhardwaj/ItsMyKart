const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId
    },
    remarks: String,
    products: [{
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],

});
module.exports = mongoose.model("Order", orderSchema);
