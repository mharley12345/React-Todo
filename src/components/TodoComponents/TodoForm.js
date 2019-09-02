import React from 'react' 

const TodoForm = props => {
    return(
        <form>
        <input onChange={props.handleChange} placeholder="Add A ToDo ......."></input>
        <button onClick={props.addTodo}><span aria-labelledby="jsx-ally/accessible-emoji" role="img">&#9989;</span></button>
        <button onClick={props.deleteTodo}><span aria-labelledby="jsx-ally/accessible-emoji" role="img">&#10060;</span></button>

        </form>
    )
}
export default TodoForm