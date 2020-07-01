const express = require('express');
const router = express.Router();
const Project = require('../models/projectSchema');
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
    name: 'map', maxCount: 1
}, {
    name: 'projectImage', maxCount: 10
},
{
    name: 'brochure', maxCount: 1
}]), async (req, res) => {

    try {
        const { title, address, contact, email, map,link,  projectImage, brochure } = req.body;

        let result = await cloudinary.uploader.upload(req.file.path, (err, res) => {
            console.log("res", err, res)

        })
        console.log("result", result)

        const project = new Project({
            title, address, contact, email, map: result.secure_url, link, 
            projectImage: result.secure_url, brochure: result.secure_url
        })
        await project.save();
        res.status(200).json({
            success: true,
            msg: "sucessfully created a project",
            project: project
        })
    } catch{
        res.status(400).json({
            success: false,
            msg: "Error in creating a project",

        })
    }
})

router.get('/', async (req, res) => {
    try {
        const project = await Project.find()
        res.status(200).json({
            success: true,
            msg: "All the project data is fetched",
            project: project
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "Unable to fetch the project data",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { title, address, contact, email, map, link,  projectImage, brochure } = req.body
        let datatobeupdated = { title, address, contact, email, map, link, projectImage, brochure, updatedDate: new Date() }
        const project = await Project.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "All the project data is updated succesfully",
            project: project
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the project data",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let project
    try {
        project = await Project.findById(req.params.id)
        await project.remove()
        res.status(200).json({
            success: true,
            msg: "All the project data is deleted succesfully",
            project: project
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete the project data",

        })
        console.log("err", e)
    }
})


module.exports = router