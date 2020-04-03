const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.render("index", { todos, sorted: false });
});

router.post("/", async (req, res) => {

    const body = req.body.body.trimStart().trimEnd();
    console.log("body: ", body);

    if (body.length > 0) {
        const splittedtags = req.body.tags.split(",");
        const tags = splittedtags.map(tag => tag.trimStart().trimEnd());
        console.log(tags);

        const todo = new Todo({
            body,
            tags
        });
        await todo.save();
        console.log(todo);

    } else {
        console.log("nothing in req.body.body.");
    }
    res.redirect("/");
});

module.exports = router;