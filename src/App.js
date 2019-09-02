import React,{Component} from 'react';

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
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
    }
}

export default App;
