import React, { useState } from "react"

export default function AddTodoForm(props){
    const initInputs = { task: props.task ||  "", description: props.description || "", date: props.date || ""}
    const [inputs, setInputs] = useState(initInputs)
    
    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
        //console.log(inputs.living)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props._id)
        // post request
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="task" 
                value={inputs.task} 
                onChange={handleChange} 
                placeholder="Name of Task"/>
            
                <input 
                    type="text"
                    name="description" 
                    value={inputs.description} 
                    onChange={handleChange} 
                    placeholder="Descrition"/>
                
                <input 
                    type="text"
                    name="date" 
                    value={inputs.date} 
                    onChange={handleChange} 
                    placeholder="Date of Task"/>

                <button>{ props.btnText }</button>
        </form>
    )
}