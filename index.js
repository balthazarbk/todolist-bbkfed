// create connection
const express = require("express"); 
const mongoose = require("mongoose"); //mongoose takes care of the connection to the database
if (process.env.NODE_ENV !== 'production') require('dotenv').config(); // require and configure dotenv


// call express() to start the server 
const app = express(); 

// ejs
app.set('view engine', 'ejs');
app.set("view options", { filename: true });

// mongoose options
mongoose.set('useFindAndModify', false);

// open the public directory
app.use(express.static(__dirname + "/public"));

// middleware för att tolka, to be able to take in form inputs
app.use(express.urlencoded({ extended: true }));

// all routers
const todosRouter = require("./router/todosRouter");
const deleteTodoRouter = require("./router/deleteTodoRouter");
const doneTodoRouter = require("./router/doneTodoRouter");
const archiveTodoRouter = require("./router/archiveTodoRouter");
const archivedTodosRouter = require("./router/archivedTodosRouter");
const deleteTodoPermanentlyRouter = require("./router/deleteTodoPermanentlyRouter");
const editTodoRouter = require("./router/editTodoRouter");
const todosSortRouter = require("./router/todosSortRouter");
const aboutRouter = require("./router/aboutRouter");

// all app use router 
app.use(todosRouter);
app.use(deleteTodoRouter);
app.use(doneTodoRouter);
app.use(archiveTodoRouter);
app.use(archivedTodosRouter);
app.use(deleteTodoPermanentlyRouter);
app.use(editTodoRouter);
app.use(todosSortRouter);
app.use(aboutRouter);

// lyssna efter en port eller vår dynamiska port som finns på vår localHost
const port = process.env.PORT || 8000; 

// options 
const options = {
     useUnifiedTopology: true, 
     useNewUrlParser: true 
};

// declare the URI (connection to database, parsed)
const uri = process.env.DB_URI;

mongoose
    .connect(uri, options)
    .then( ()=> {
        app.listen(port); 
        console.log(`Listening on port ${port}`); 
    });