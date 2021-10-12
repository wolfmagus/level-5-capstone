const express = require('express')
const todoRouter = express.Router()
const TodoInventory = require('../models/todoInventory.js')

//get all Mongoose Method to be used on Mongoose Models
todoRouter.get("/", (req, res, next) => {
    TodoInventory.find((err, todos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(todos)
    })
})

//post one
todoRouter.post("/", (req, res, next) => {
    const newTodo = new TodoInventory(req.body)
    newTodo.save((err, savedTodo) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTodo)
    })
})

//delete one
todoRouter.delete("/:todoId", (req, res, next) =>{
  TodoInventory.findOneAndDelete({_id: req.params.todoId}, (err, deletedTodo) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Successfully deletes todo ${deletedTodo.title} from the database`)

  })  
})

//Update one
todoRouter.put("/:todoId", (req, res) => {
   TodoInventory.findOneAndUpdate(
       {_id: req.params.todoId},//find this one update
       req.body, //update the object with this data
       {new: true}, //send back the updated version please
       (err, updatedTodo) => {
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatedTodo)
       }
   )
})

module.exports = todoRouter

//get one
// itemRouter.get("/:itemId", (req, res) => {
//     const itemId = req.params.itemId
//     const foundItem = items.find(item => item._id === itemId)
//     console.log("Found item is " + foundItem)
//     res.send(foundItem)
//     //console.log(req)
// }) 

//get by genre
// itemRouter.get("/search/genre", (req, res)=> {
//     const genre = req.query.genre
//     const filteredItems = items.filter(item => item.genre === genre)
//     res.send(filteredItems)

// })




// itemRouter.put("/:itemId", (req, res) => {
//     const itemId = req.params.itemId
//     const itemIndex = items.findIndex(item => item._id === itemId)
//     const  foundItem = items.find(item => item._id === itemId)
//     res.send(foundItem)
    
// })



//const uuid = require("uuid").v4

//fake data
// items =[
//     {name:"banana", type: "fruit", price: "100" , _id: "1" },
//     {name: "doll", type: "toy", price: "200" , _id: "2" },
//     {name: "shirt", type: "clothes", price: "300" , _id: "3" },
//     {name: "ball", type: "toy", price: "400" , _id: "4"},
    
//     ]