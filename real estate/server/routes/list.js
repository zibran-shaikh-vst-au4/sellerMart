const express = require('express');
const router = express.Router();
const List = require('../models/listSchema')

router.post('/', async (req, res)=>{
    try{
        const {title,description} = req.body;
        const list = new List({
            title , description
        });
         await list.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            list
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
        const list = await List.find()
        res.status(200).json({
            success: true,
            msg: "list fetched",
            list
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "list cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { title, description } = req.body
        let datatobeupdated = {title,  description, updatedDate: new Date() }
        const list = await List.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "list is updated succesfully",
            list
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the list",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let list
    try {
        list = await List.findById(req.params.id)
        await list.remove()
        res.status(200).json({
            success: true,
            msg: "list is deleted succesfully",
             list
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
        const list = await List.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "list fetched",
            list
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "list cannot be fetched",

        })

    }
})


module.exports = router