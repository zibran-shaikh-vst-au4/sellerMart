const express = require('express');
const router = express.Router();
const Product = require("../Models/Product");


router.post("/", async (req, res) => {
    try {
        const { body } = req;
        let product = await Product.create({ product_name: body.product_name, price: body.price, stock: body.stock, qty: body.qty, total: body.total });
        res.send(product);
    } catch (err) {
        console.error(err);
    }

});

router.get("/", async (req, res) => {
    try {
        let products = await Product.findAll();
        res.send(products);
    } catch (err) {
        console.error(err)
    }
})


router.put("/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const products = await Product.update({ product_name: body.product_name, stock: body.stock, price: body.price }, { where: { id: params.id } })
        res.send(products);
    } catch (err) {
        console.error(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { params } = req;
        await Product.destroy({ where: { id: params.id } });
        res.send("deleted successfully")
    } catch (err) {
        console.error(err);
    }
})


module.exports = router