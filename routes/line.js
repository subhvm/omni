<<<<<<< HEAD
const express = require('express');
const Line = require('../model/lineSchema')
const Plan = require('../model/planSchema')
=======
const express = require("express");
const Line = require("../model/lineSchema");
const Plan = require("../model/planSchema,");
const User = require("../model/userdb");
>>>>>>> 20e307bdaa176f47b965d43b1c267475c939afe3

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const line = await Line.findOne({ phoneNumber: req.params.id });
    if (!line) res.sendStatus(404);
    res.status(200).send(line);
  } catch (error) {
    console.log;
  }
});

router.post("/", async (req, res) => {
  try {
    const { planName, phoneNumber, phoneModel, accountNumber } = req.body;
    const plan = await Plan.findOne({ name: planName });

    const line = await Line.create({
      phoneNumber,
      plan,
      phoneModel,
      accountNumber,
    });
    res.status(200).send(line);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
