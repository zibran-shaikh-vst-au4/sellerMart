const express = require('express');
const router = express.Router();
const Loan = require('../models/loanSchema')

router.post('/', async (req, res)=>{
    try{
        const {question, answer} = req.body;
        const loan = new Loan({
            question, answer
        });
         await loan.save();
        res.status(200).json({
            success: true,
            msg:"description has been added",
            loan
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
        const loan = await Loan.find()
        res.status(200).json({
            success: true,
            msg: "loan fetched",
            loan
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "loan cannot be fetched",

        })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const { question, answer } = req.body
        let datatobeupdated = {question, answer, updatedDate: new Date() }
        const loan = await Loan.findByIdAndUpdate(req.params.id, datatobeupdated)
        res.status(200).json({
            success: true,
            msg: "loan is updated succesfully",
            loan
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: "Unable to update the loan",

        })
        console.log("err", e)
    }
})

router.delete('/:id', async (req, res) => {
    let loan
    try {
        loan = await Loan.findById(req.params.id)
        await loan.remove()
        res.status(200).json({
            success: true,
            msg: "loan is deleted succesfully",
             loan
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
        const loan = await Loan.findById(req.params.id)
        res.status(200).json({
            success: true,
            msg: "loan fetched",
            loan
        })

    } catch{
        res.status(400).json({
            success: false,
            msg: "loan cannot be fetched",

        })

    }
})


module.exports = router