const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.get("/deletetodo", async (req, res) => {
        const todos = await Todo.find({ status: "deleted" });
        res.render("delete", { todos });
});

router.post("/deletetodo/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const deletedtodo = await Todo.findByIdAndUpdate(req.params.id, { status: "deleted" })
        .then(console.log("done"))
        .catch(err => console.log(err));
    
    console.log(deletedtodo);

    res.redirect("/");
});

router.post("/deletearchivedtodo/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const deletedarchivedtodo = await Todo.findByIdAndUpdate(req.params.id, { status: "deleted" })
        .then(console.log("done"))
        .catch(err => console.log(err));
    
    console.log(deletedarchivedtodo);

    res.redirect("/archive");
});

router.post("/restorearchivedtodo/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const restorearchivedtodo = await Todo.findByIdAndUpdate(req.params.id, { status: "undone" })
        .then(console.log("restored: ", req.params.id))
        .catch(err => console.log(err));

    res.redirect("/archive");
});

router.post("/deletetodopermanently/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const deletedtodopermanently = await Todo.findByIdAndRemove(req.params.id)
        .then(console.log("done"))
        .catch(err => console.log(err));
    
    console.log(deletedtodopermanently, " is permanently deleted.");

    res.redirect("/deletetodo");
});

module.exports = router;