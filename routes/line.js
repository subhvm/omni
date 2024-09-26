const express = require('express');
const Line = require('../model/lineSchema')
const Plan = require('../model/planSchema')

const router = express.Router();
router.get('/:id', async (req,res)=> {
try {
    const plan = await Line.findById(req.params.id);
    if(!plan) res.send(404)
    res.send(200).send(plan)
} catch (error) {
    console.log
}
})

router.post('/',async(req,res)=>{
    try {
        const{planId,phoneNumber, phoneModel } = req.body
        const plan = await Plan.findById(planId);
        const line = await Line.create({
            id:phoneNumber,
            phoneNumber, plan, phoneModel
        })
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;