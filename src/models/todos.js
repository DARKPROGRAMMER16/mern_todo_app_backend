const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    sno:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const Todos = new mongoose.model("Todo",todoSchema);

module.exports = Todos;