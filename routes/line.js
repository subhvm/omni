const express = require('express');
const Line = require('../model/lineSchema');
const Plan = require('../model/planSchema,'); 

const router = express.Router();


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let line = await Line.findOne({ phoneNumber: id });

    if (!line) {
      line = await Line.findOne({ accountNumber: id });
    }

    if (!line) {
      return res.sendStatus(404);
    }

    res.status(200).send(line);
  } catch (error) {
    console.error(error); 
    res.status(500).send({ error: 'An error occurred while fetching the line' });
  }
});


router.post("/", async (req, res) => {
  try {
    const { planName, phoneNumber, phoneModel, accountNumber } = req.body;

    const plan = await Plan.findOne({ name: planName });

    if (!plan) {
      return res.status(404).send({ error: 'Plan not found' });
    }

    const line = await Line.create({
      phoneNumber,
      plan,
      phoneModel,
      accountNumber,
    });

    res.status(200).send(line);
  } catch (error) {
    console.error(error); 
    res.status(500).send({ error: 'An error occurred while creating the line' });
  }
});

module.exports = router;