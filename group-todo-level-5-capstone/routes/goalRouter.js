const express = require('express')
const goalRouter = express.Router()
const GoalInventory = require('../models/goalInventory.js')

//get all Mongoose Method to be used on Mongoose Models
goalRouter.get("/", (req, res, next) => {
    GoalInventory.find((err, goals) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(goals)
    })
})

//post one
goalRouter.post("/", (req, res, next) => {
    const newGoal = new GoalInventory(req.body)
    newGoal.save((err, savedGoal) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGoal)
    })
})

//delete one
goalRouter.delete("/:goalId", (req, res, next) =>{
  GoalInventory.findOneAndDelete({_id: req.params.goalId}, (err, deletedGoal) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Successfully deletes goal ${deletedGoal.title} from the database`)

  })  
})

//Update one
goalRouter.put("/:goalId", (req, res) => {
   GoalInventory.findOneAndUpdate(
       {_id: req.params.goalId},//find this one update
       req.body, //update the object with this data
       {new: true}, //send back the updated version please
       (err, updatedGoal) => {
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatedGoal)
       }
   )
})

module.exports = goalRouter