const express = require('express');
const router = express.Router();
const Faqs = require('../models/faqsSchema')

router.post('/', async (req, res)=>{
    try{
        const {question, answer} = req.body;
        const faqs = new Faqs({
            question, answer
        });
         await faqs.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            faqs
        })

    }catch{
        res.status(401).json({
            success: false,
            msg:"description cannot be added",
            
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const faqs = await Faqs.find()
        res.status(200).json({
            success: true,
            msg: "faqs fetched",
            faqs
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "faqs cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { question, answer } = req.body
        let datatobeupdated = {question, answer, updatedDate: new Date() }
        const faqs = await Faqs.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "faqs is updated succesfully",
            faqs
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the faqs",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let faqs
    try {
        faqs = await Faqs.findById(req.params.id)
        await faqs.remove()
        res.status(200).json({
            success: true,
            msg: "faqs is deleted succesfully",
             faqs
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete corevalue",

        })
        console.log("err", e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const faqs = await Faqs.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "faqs fetched",
            faqs
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "faqs cannot be fetched",

        })

    }
})


module.exports = router