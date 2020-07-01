const express = require('express');
const router = express.Router();
const Form = require('../models/formdataSchema');
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

router.post('/', upload.fields([{
    name: 'image', maxCount: 1
}, {
    name: 'video', maxCount: 5
}]), async (req, res) => {
    try {
        const { image } = req.body;
        let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
            console.log("res", err, res)

        })
        console.log("result", result)
        const form = new Form({
            image: result.secure_url
        });
        await form.save();
        res.status(200).json({
            success: true,
            msg: "form created",
            form
        })

    } catch{
        res.status(401).json({
            success: false,
            msg: "unable to create form",

        })
    }
})
router.get('/', async (req, res) => {
    try {
        const form = await Form.find()
        res.status(200).json({
            success: true,
            msg: "form fetched",
            form
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "form cannot be fetched",

        })

    }
})
module.exports = router