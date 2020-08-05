const express = require('express');
const router = express.Router();
const Potential = require('../models/potentialSchema')

router.post('/', async (req, res)=>{
    try{
        const {title, description} = req.body;
        const potential = new Potential({
           title, description
        });
         await potential.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            potential
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
        const potential = await Potential.find()
        res.status(200).json({
            success: true,
            msg: "potential fetched",
            potential
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "potential cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { title, description } = req.body
        let datatobeupdated = {title, description, updatedDate: new Date() }
        const potential = await Potential.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "potential is updated succesfully",
            potential
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the potential",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let potential
    try {
        potential = await Potential.findById(req.params.id)
        await potential.remove()
        res.status(200).json({
            success: true,
            msg: "potential is deleted succesfully",
             potential
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
        const potential = await Potential.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "potential fetched",
            potential
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "potential cannot be fetched",

        })

    }
})


module.exports = router