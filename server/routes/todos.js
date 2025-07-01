const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// CREATE
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// READ
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
