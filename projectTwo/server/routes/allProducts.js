const express = require('express');
const router = express.Router();
const AllProduct = require("../Models/AllProduct");

router.get("/", async (req, res) => {
    try {
        let products = await AllProduct.findAll();
        res.send(products);
    } catch (err) {
        console.error(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const { body } = req;
        let product = await AllProduct.create({ product_name: body.product_name, price: body.price });
        res.send(product);
    } catch (err) {
        console.error(err);
    }

});

module.exports = router