const express = require('express');
const router = express.Router();
const Tips = require('../models/tipsSchema')

router.post('/', async (req, res)=>{
    try{
        const {question, answer} = req.body;
        const tips = new Tips({
            question, answer
        });
         await tips.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            tips
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
        const tips = await Tips.find()
        res.status(200).json({
            success: true,
            msg: "tips fetched",
            tips
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "tips cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { question, answer } = req.body
        let datatobeupdated = {question, answer, updatedDate: new Date() }
        const tips = await Tips.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "tips is updated succesfully",
            tips
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the tips",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let tips
    try {
        tips = await Tips.findById(req.params.id)
        await tips.remove()
        res.status(200).json({
            success: true,
            msg: "tips is deleted succesfully",
             tips
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
        const tips = await Tips.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "tips fetched",
            tips
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "tips cannot be fetched",

        })

    }
})


module.exports = router