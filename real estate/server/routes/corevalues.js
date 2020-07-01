const express = require('express');
const router = express.Router();
const Corevalues = require('../models/corevaluesSchema')

router.post('/', async (req, res)=>{
    try{
        const {description} = req.body;
        const corevalues = new Corevalues({
            description
        });
         await corevalues.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            corevalues
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
        const corevalues = await Corevalues.find()
        res.status(200).json({
            success: true,
            msg: "corevalue fetched",
            corevalues
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "corevalue cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { description } = req.body
        let datatobeupdated = { description, updatedDate: new Date() }
        const corevalue = await Corevalues.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "corevalue is updated succesfully",
            corevalue
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the corevalue",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let corevalue
    try {
        corevalue = await Corevalues.findById(req.params.id)
        await corevalue.remove()
        res.status(200).json({
            success: true,
            msg: "corevalue is deleted succesfully",
             corevalue
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to delete corevalue",

        })
        console.log("err", e)
    }
})


module.exports = router