const express = require('express');
const router = express.Router();
const Product = require("../Models/Product");
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const imageMimeType = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
const upload = multer({
    // desc: uploadpath,
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        cb(null, imageMimeType.includes(file.mimetype))
    }

});


router.post("/", upload.single('coverImage'), async (req, res) => {
    try {
        const { body } = req;
        const result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
            console.log("cloudinary", err, res)

        })
        console.log("result", result.secure_url)
        let product = await Product.create({
            product_name: body.product_name,
            price: body.price, stock: body.stock,
            qty: body.qty, total: body.total,
            publish: body.publish,
           coverImage: result.secure_url
        });


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
        const products = await Product.update({ product_name: body.product_name, stock: body.stock, price: body.price, publish: body.publish }, { where: { id: params.id } })
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