const express = require("express");
const { getCustomer,
    updateCustomer,
    deleteCustomer,
    addOrder,
    createCustomer,
} = require("../Controllers/customerController")
const { getOrder,
    createOrder,
    deleteOrder,
    updateOrder } = require("../Controllers/orderController")
const { updateProduct,
    getProduct,
    createProduct,
    deleteProduct
} = require("../Controllers/productController")
const router = express.Router();
router.route("/customer/create").post(createCustomer);
router.route("/customer/delete/:id").delete(deleteCustomer);
router.route("/customer/update/:id").put(updateCustomer);
router.route("/customer/addorder/:id").post(addOrder);
router.route("/customer/:id").get(getCustomer);
router.route("/order/create").post(createOrder);
router.route("/order/delete/:id").delete(deleteOrder);
router.route("/order/update/:id").put(updateOrder);
router.route("/order/:id").get(getOrder);
router.route("/product/create").post(createProduct);
router.route("/product/delete/:id").delete(deleteProduct);
router.route("/product/update/:id").put(updateProduct);
router.route("/product/:id").get(getProduct);
module.exports = router;