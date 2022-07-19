const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId
    },
    productName: {
        type: String,
        required: true
    },
    rating: String,
    price: Number,

})
module.exports = mongoose.model("Product", productSchema);