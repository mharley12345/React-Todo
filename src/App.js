import React,{Component} from 'react';
import TodoList from './components/TodoComponents/TodoList'
class App extends Component {
   constructor(){
     super();
     this.state = 
       { todos: [
           {
             task:"",
             id:Date.now(),
             completed: false,
           },
           {
             task:"Learn React",
             id : 123456789,
             completed: false
           }
          ],
          todo:""
        }  
        console.log(this.state)
      }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "App">
        
        <h2 className="header">Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        
      </div>
    );
    }
}

export default App;
