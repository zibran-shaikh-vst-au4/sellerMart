const express = require('express');
const router = express.Router();
const Benefit = require('../models/benefitSchema')

router.post('/', async (req, res)=>{
    try{
        const {title,description} = req.body;
        const benefit = new Benefit({
            title, description
        });
         await benefit.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            benefit
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
        const benefit = await Benefit.find()
        res.status(200).json({
            success: true,
            msg: "benefit fetched",
            benefit
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "benefit cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const {title, description } = req.body
        let datatobeupdated = { title, description, updatedDate: new Date() }
        const benefit = await Benefit.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "benefit is updated succesfully",
            benefit
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the benefit",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let benefit
    try {
        benefit = await Benefit.findById(req.params.id)
        await benefit.remove()
        res.status(200).json({
            success: true,
            msg: "benefit is deleted succesfully",
             benefit
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
        const benefit = await Benefit.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "benefit fetched",
            benefit
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "benefit cannot be fetched",

        })

    }
})


module.exports = router