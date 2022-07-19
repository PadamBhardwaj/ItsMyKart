const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017" + "/mainDB", { useNewUrlParser: true });

const router = require("./Routes/index")
app.use("/api", router);

app.listen(4000, function (Req, res) {
    console.log("server started at port 4000.")
})