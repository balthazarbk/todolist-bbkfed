const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema({
        body: { type: String, required: true },
        tags: [ { type: String, required: false } ],
        date: { type: Date, default: Date.now },
        status: { type: String, enum: [ "undone", "done", "archived", "deleted" ], default: "undone" },
        edit: { type: Boolean, default: false }
});

const Todo = mongoose.model("Todo", schemaTodo);

module.exports = Todo;