const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todos",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() =>{
    console.log("Connection establshed.")
}).catch((e) => {
    console.log("Connection cannot be established");
})