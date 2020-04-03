const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.get("/sort", async (req, res) => {
    
if (req.query.date == 1) {
    console.log("date asc!");
    const todos = await Todo.find({ status: "undone" }).sort({ date: "1" });

    res.render("index", { todos, sorted: true });
}

if (req.query.date == -1) {
    console.log("date desc!");
    const todos = await Todo.find({ status: "undone" }).sort({ date: "-1" });
    const sorted = true;

    res.render("index", { todos, sorted: true });
}

});

module.exports = router;