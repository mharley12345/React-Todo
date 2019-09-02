import React,{Component} from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
class App extends Component {
   constructor(){
     super();
     this.state = 
       { todos: [
           {
             task:"Learn React",
             id:1567450830204,
             completed: false,
           },
           {
             task:"Write a Bad A$$ React App",
             id :1567450830205,
             completed: false
           },
           {
             task:"Get Rich",
             id:11112522358,
             completed:false
           },
          ],
          todo:""
        }  
        console.log(this.state)
      }
      handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
       
      }
      toggleComplete = id => {
        let todos = this.state.todos.slice();
        todos = todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        });
        this.setState({ todos });
      };
    
      addTodo = e => {
        e.preventDefault();
        console.log("Anything HERE!!!!!!!!")
        const newTodo = {task: this.state.todo , complete: false , id:Date.now()};
        this.setState ({
          
          todos: [...this.state.todos, newTodo],

          todo: ''
          
        })
        console.log(this.state.todo)
        console.log(this.state.todos)
      }
      deleteTodo = e =>{
        e.preventDefault();
      let todos =  this.state.todos.filter(todo=> !todo.completed );
        this.setState({todos});
      }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "App">
        
        <h2 className="header">My ToDo List</h2>
        <TodoList handleToggleComplete={this.toggleComplete} todos={this.state.todos} />
        <TodoForm handleToggleComplete={this.toggleComplete} value={this.state.todo} handleChange={this.handleChange} addTodo={this.addTodo} deleteTodo={this.deleteTodo}/>
        
      </div>
    );
    }
}

export default App;
