const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.post("/donetodo/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const donetodo = await Todo.findByIdAndUpdate(req.params.id, { status: "done" })
        .then(console.log("done"))
        .catch(err => console.log(err));
    
    console.log(donetodo);

    res.redirect("/");
});

module.exports = router;