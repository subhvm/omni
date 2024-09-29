const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/userdb");
const Line = require("../model/lineSchema");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ accountNumber: id });

  if (!user) res.sendStatus(404);
  res.status(200).send(user);
});

router.post("/", async (req, res) => {
  try {
    const { name, address, pin } = req.body;
    const user = await User.create({
      name,
      address,
      pin,
    });

    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:account", async (req, res) => {
  try {
    const accountNumber = req.params.account;
    const lines = await Line.find({ accountNumber });
    await User.updateOne({lines: []});
    res.send(lines);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
