const express = require('express');
const router = express.Router();
const Banner = require('../models/homeBanner');
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

router.post('/', upload.single(
     'banner' ), async (req, res) => {
    try {
        const { image } = req.body;
        let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
            console.log("res", err, res)

        })
        console.log("result", result)
        const banner = new Banner({
            image: result.secure_url
        });
        await banner.save();
        res.status(200).json({
            success: true,
            msg: "banner created",
            banner
        })

    } catch{
        res.status(401).json({
            success: false,
            msg: "unable to create banner",

        })
    }
})
router.get('/', async (req, res) => {
    try {
        const banner = await Banner.find()
        res.status(200).json({
            success: true,
            msg: "banner fetched",
            banner
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "banner cannot be fetched",

        })

    }
})

router.get('/:id', async (req, res) => {
    try {
        const banner = await Banner.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "banner fetched",
            banner
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "banner cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const {image } = req.body
        let datatobeupdated = { image, updatedDate: new Date() }
        const banner = await Banner.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "banner is updated succesfully",
            banner
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the banner",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let banner
    try {
        banner = await Banner.findById(req.params.id)
        await banner.remove()
        res.status(200).json({
            success: true,
            msg: "Banner is deleted succesfully",
             banner
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete banner",

        })
        console.log("err", e)
    }
})

module.exports = router