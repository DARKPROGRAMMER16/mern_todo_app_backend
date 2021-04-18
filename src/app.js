// requiring modules
const express = require('express');
const cors = require('cors');

// requiring databses coonection file
require("./db/conn")

// requirning routing files
const router = require("./routes/todo_routes");

// initializing express server
const port  = process.env.PORT || 5000;
const app = express()

// middlewares
app.use(cors());
app.use(express.json());
app.use(router);

// serveing the server
app.listen(port, () => {
    console.log(`the server is listning at port : ${port}`);
})

