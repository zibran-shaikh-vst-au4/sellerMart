const express = require('express');
const router = express.Router();
const Cart = require("../Models/Cart");

router.get("/", async (req, res) => {
    try {
        let carts = await Cart.findAll();
        res.send(carts);
    } catch (err) {
        console.error(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const { body } = req;
        let cart = await Cart.create({ product_name: body.product_name, price: body.price, qty: body.qty, total: body.total });
        res.json({
            cart: cart, message: 'Item has been added'
        })
    } catch (err) {
        console.error(err);
    }

});

router.delete("/:id", async (req, res) => {
    try {
        const { params } = req;
        await Cart.destroy({ where: { id: params.id } });
        res.send("deleted successfully")
    } catch (err) {
        console.error(err);
    }
})
 module.exports = router;