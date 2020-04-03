const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.get("/archive", async (req, res) => {
    const todos = await Todo.find({ status: "archived" });
    res.render("archive", { todos });
});

module.exports = router;