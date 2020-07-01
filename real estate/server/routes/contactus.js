const express = require('express');
const router = express.Router();
const Contact = require('../models/contactschema');

router.post('/', async (req, res)=>{
    try{
        const {address, contact, email} = req.body;
        const contactus = new Contact({
            address, contact, email
        });
         await contactus.save();
        res.status(200).json({
            success: true,
            msg:"contacts created",
            contactus
        })

    }catch{
        res.status(401).json({
            success: false,
            msg:"unable to create contacts",
            
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const contactus = await Contact.find()
        res.status(200).json({
            success: true,
            msg: "contact fetched",
            contactus
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "contact cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const {address, contact, email } = req.body
        let datatobeupdated = { address, contact, email, updatedDate: new Date() }
        const contactus = await Contact.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "contact is updated succesfully",
            contactus
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the contact",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let contactus
    try {
        contactus = await Contact.findById(req.params.id)
        await contactus.remove()
        res.status(200).json({
            success: true,
            msg: "contact is deleted succesfully",
             contactus
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete contact",

        })
        console.log("err", e)
    }
})


module.exports = router