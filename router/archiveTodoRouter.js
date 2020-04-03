const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.post("/archivetodo/:id", async (req, res) => {

    console.log("id: ", req.params.id);

    const archivetodo = await Todo.findByIdAndUpdate(req.params.id, { status: "archived" })
        .then(console.log("done"))
        .catch(err => console.log(err));
    
    console.log(archivetodo);

    res.redirect("/");
});

module.exports = router;