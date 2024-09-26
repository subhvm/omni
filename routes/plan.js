const express = require("express");
const Plan = require("../model/planSchema,");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const plan = await Plan.find();
    res.status(200).send(plan);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, cost, description } = req.body;
    const plan = await Plan.create({
      name,
      cost,
      description,
    });
    res.status(200).send(plan);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
