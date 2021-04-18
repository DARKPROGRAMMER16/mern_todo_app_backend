// requiring express module
const express = require('express');

// initializing router
const router = new express.Router();

// requiring schema setup
const Todos = require("../models/todos")

// creating routes

// add todo
router.post("/todos", async(req,res) => {
    try {
        
        const addingtodos = new Todos(req.body);
        const addeddata = await addingtodos.save();
        res.status(201).send(addeddata);
        
    } catch (err) {
        res.status(400).send(err);
    }
})

// gettinf all todos
router.get("/todos", async(req,res) => {
    try {

        const gettodos = await Todos.find({}).sort({"snp":1});
        res.send(gettodos);
        // res.json(gettodos);
        
    } catch (err) {
        res.status(400).send(err);
    }
})

// getting specific todo
router.get("/todos/:sno", async(req,res) => {
    try {

        const sno = req.params.sno;
        const gettodo = await Todos.findOne({"sno":sno});
        res.send(gettodo);
        // res.json(gettodo.rows)
        
    } catch (err) {
        res.status(400).send(err);
    }
})

// updating todo
router.patch("/todos/:sno", async(req,res) => {
    try {

        const sno = req.params.sno;
        const updatetodo = await Todos.findOneAndUpdate({"sno":sno},req.body,{new:true});
        res.send(updatetodo);
        
    } catch (err) {
        res.status(500).send(err)
    }
})

// deleting todo
router.delete("/todos/:sno", async(req,res) => {
    try {

        const sno = req.params.sno;
        const deletetodo = await Todos.findOneAndDelete({"sno":sno});
        res.send(deletetodo);        
        
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;