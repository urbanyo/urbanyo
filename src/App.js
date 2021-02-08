import { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';

// data 
import {todos} from './todos.json';

//subcomponents
import Formtask from './components/Formtask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos,todo]
    })
  }

  removeTodo(index) {
    if (window.confirm ('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })
    }
  }

  render () {
   const todos = this.state.todos.map((todo,i)=> {
      return (
        <div className= "col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span  className="badge bg-pill bg-primary ml-2">
              {todo.priority} 
              </span>
            </div>

            <div className="card-body">
              <p>{todo.description}</p>
              <p><b>{todo.responsible}</b></p>
            </div>
            <div className= "card-footer">
              <button
                className="btn btn-danger text-light border-0"
                onClick={this.removeTodo.bind(this, i)}
              >
              Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark" >  
          <a href="" className="text-white">
            Task

          <span class="badge rounded-pill bg-warning text-dark">
            {this.state.todos.length}
          </span>
          
        </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <Formtask onAddTodo= {this.handleAddTodo}></Formtask>
            </div>

            <div className="col-md-8">
              <div className= "row">
                {todos}
              </div>
            </div>
          </div>
        </div>
       </div>

    );
  }
}


export default App;
