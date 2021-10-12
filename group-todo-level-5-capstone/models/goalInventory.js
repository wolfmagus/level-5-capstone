const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Item Blueprint
const goalInventorySchema = new Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
   
})

//Inventory Model
module.exports = mongoose.model("goalInventory", goalInventorySchema)