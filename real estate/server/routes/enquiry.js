const express = require('express');
const router = express.Router();
const Enquiry = require('../models/enquirySchema');

router.post('/', async (req, res)=>{
    try{
        const {name, email, subject, message} = req.body;
        const enquiry = new Enquiry({
            name, email, subject, message
        });
         await enquiry.save();
        res.status(200).json({
            success: true,
            msg:"enquiry created",
            enquiry
        })

    }catch{
        res.status(401).json({
            success: false,
            msg:"unable to create enquiry",
            
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const enquiry = await Enquiry.find()
        res.status(200).json({
            success: true,
            msg: "Enquiry fetched",
            enquiry
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "Enquiry cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const {name, email, subject, message } = req.body
        let datatobeupdated = { name, email, subject, message, updatedDate: new Date() }
        const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "Enquiry is updated succesfully",
            enquiry
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the Enquiry",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let enquiry
    try {
        enquiry = await Enquiry.findById(req.params.id)
        await enquiry.remove()
        res.status(200).json({
            success: true,
            msg: "Enquiry is deleted succesfully",
             enquiry
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete Enquiry",

        })
        console.log("err", e)
    }
})


module.exports = router