import React from 'react'


const Todo = props => {


    return (
        <div className="task"
        style={props.todo.completed ? {textDecoration:'line-through', color:"red"} : null}
        onClick={() =>  props.handleToggleComplete(props.todo.id)}
        >
            {props.todo.task}
         
        </div>
    )
}
export default Todo