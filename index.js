
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});


app.get('/', (req, res) =>{
    res.send("Hello from Node API server");
});

mongoose.connect("mongodb+srv://admin:<AGXQDJra4qwHRnEt>@backenddb.vnqwr.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
})
.catch((error) =>{
    console.error("Connection failed!", error);
});