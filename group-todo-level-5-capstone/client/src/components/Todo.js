import React, { useState } from "react"
import AddTodoForm from "./AddTodoForm.js"

function Todo(props){
    //console.log(props)
    const { task, description, date, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="todo">
            { !editToggle ?
            <div>
                <h1>Task: { task }</h1>
                <h1>Description: { description }</h1>
                <h1>Date: { date }</h1>
             
                
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteTodo(_id)}>
                    Delete
                </button>
                {/* <button
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button> */}
            </div>           
            :
            <div>
                <AddTodoForm
                    task={task}
                    description={description}
                    date={date}
                    //todo={todo}
                    
                    // _id={_id}
                    btnText="Submit Edit"
                    submit={props.editTodo}
                />
                <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                 </button>
            </div>
                }
            
        </div>
    )
}

export default Todo