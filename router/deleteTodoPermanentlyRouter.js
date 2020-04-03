const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.post("/deletetodopermanently/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const deletedtodopermanently = await Todo.findByIdAndRemove(req.params.id)
        .then(console.log("done"))
        .catch(err => console.log(err));
    
    console.log(deletedtodopermanently, " is permanently deleted.");

    res.redirect("/deletetodo");
});

router.post("/deletealltodopermanently", async (req, res) => {

    const deletedalltodopermanently = await Todo.remove({ status: "deleted" })
        .then(console.log("all todos deleted permanently"))
        .catch(err => console.log(err));

    res.redirect("/deletetodo");
});

module.exports = router;