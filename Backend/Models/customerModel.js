const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: String,
    address: String,
    date: Date,
    contact: Number,
    email: {
        type: String,
        unique: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    orders: [{
        Order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    }],


});



module.exports = mongoose.model("Customer", customerSchema);