import React, { useState } from "react"
import AddGoalForm from "./AddGoalForm.js"

function Goal(props){
    //console.log(props)
    const { task, description, date, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="goal">
            { !editToggle ?
            <div>
                <h1>Task: { task }</h1>
                <h1>Description: { description }</h1>
                <h1>Date: { date }</h1>
             
                
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteGoal(_id)}>
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
                <AddGoalForm
                    task={task}
                    description={description}
                    date={date}
                    //goal={goal}
                    
                    // _id={_id}
                    btnText="Submit Edit"
                    submit={props.editGoal}
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

export default Goal