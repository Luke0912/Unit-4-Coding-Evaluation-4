const express = require("express");

const app = require("..");

const router = express.Router();

const Todo = require("../models/Todo.Model");

const authenticate = require("../middlewares/authenticate");

router.get("", authenticate, async (req, res) => {
  try {
    const todo = await Todo.find().lean().exec();
    return res.status(201).send(todo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).send(todo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params);
    const todo = await Todo.findOne({ _id: req.params.id });
    return res.status(201).send(todo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, { new: true });
    return res.status(201).send(todo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.body);
    return res.status(201).send(todo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
