const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//Middleware for every response
app.use(express.json())
app.use(morgan("dev"))


//Connection to the database
mongoose.connect("mongodb://localhost:27017/todosdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    },
    () => console.log("Connected to the database")
)

//routes
app.use("/todos", require("./routes/todoRouter.js"))
app.use("/goals", require("./routes/goalRouter.js"))

//
// app.use((err, req, res, next) => {
//     console.log(err)
//     //return res.send({errMsg: error.message})
// })

// Server Listen
app.listen(9000, () =>{
    console.log("The server is running on port 9000")
})