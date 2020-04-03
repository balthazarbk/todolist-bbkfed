const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.post("/edittodo/:id", async (req, res) => {

    console.log(req.params.id, "post to edittodo/:id");

    const todotoedit = await Todo.findByIdAndUpdate(req.params.id, { edit: true })
        .then(console.log(Todo.findById(req.params.id)))
        .catch(err => console.log(err));

    console.log(todotoedit);

    res.redirect("/");
});

router.post("/edittodo/confirmed/:id", async (req, res) => {

    console.log(req.params.id, "post to /edittodo/confirmed/:id");

    const todotoeditconfirmed = await Todo.findByIdAndUpdate(req.params.id, { body : req.body.body, edit: false })
        .then(console.log("done"))
        .catch(err => console.log(err));

    console.log(todotoeditconfirmed);

    res.redirect("/");
});

module.exports = router;