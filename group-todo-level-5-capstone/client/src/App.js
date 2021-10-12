import React, { useState } from "react"//removed useEffect
import axios from "axios"
import Todo from "./components/Todo.js"
import AddTodoForm from "./components/AddTodoForm.js"
import AddGoalForm from "./components/AddGoalForm.js"
import { Switch, Route, Link } from "react-router-dom"
import Home from "./views/Home"
import TodoList from "./views/TodoList"
import GoalList from "./views/GoalList"
//import "./styles.css"

function App(){
    const [todos, setTodos] = useState([])
    const [goals, setGoals] = useState([])
    
    function getTodos(){
        axios.get("/todos")
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))

    }

    function addTodo(newTodo){
        axios.post("/todos", newTodo)
        .then(res => setTodos(prevTodos => [...prevTodos, res.data])    
        )

        .catch(err => console.log(err))
        console.log(newTodo)
    }
    function addGoal(newGoal){
        axios.post("/goals", newGoal)
        .then(res => setGoals(prevGoals => [...prevGoals, res.data])    
        )

        .catch(err => console.log(err))
        console.log(newGoal)
    }

    function deleteTodo(todoId){
        axios.delete(`/todos/${todoId}`)
            .then(res => {
                setTodos(prevTodos => prevTodos.filter(todo => todo._id !== todoId))
            })
            .catch(err => console.log(err))
    }
    function deleteGoal(goalId){
        axios.delete(`/goals/${goalId}`)
            .then(res => {
                setGoals(prevGoals => prevGoals.filter(goal => goal._id !== goalId))
            })
            .catch(err => console.log(err))
    }

    function editTodo(updates, todoId){
        axios.put(`/todos/${todoId}`, updates)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        
    }

    // useEffect(() => {
    //         getTodos()
    //     }, [])

    return(
        <div>
             <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/goals">Goals</Link>
            </nav>

            <Switch>
                
                <Route exact path="/">
                    <Home/>
                </Route>
                
                <Route path="/todos">
                    <TodoList/>
                </Route>
                
                <Route path="/goals">
                    <GoalList/>
                </Route>

            </Switch>
        </div>
            
            <div className="todo-container">
                <AddTodoForm 
                    submit={addTodo}
                    btnText="Add Todo"
                />
                <AddGoalForm
                    submit={addGoal}
                    btnText="Add Goal"
                />
                { 
                    todos.map( todo => 
                        <Todo 
                            {...todo} 
                            key={todo.title}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />
                    ) 
                }
                { 
                    goals.map( goal => 
                        <Todo 
                            {...goal} 
                            key={goal.title}
                            deleteGoal={deleteGoal}
                            
                        />
                    ) 
                }
            </div>
           
        </div>
    )
    
}

export default App