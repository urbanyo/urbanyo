import { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';


import {todos} from './todos.json';
console.log(todos);

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render () {
   const todos = this.state.todos.map((todo,i)=> {
      return (
        <div className= "col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              
              <button type="button" class="btn btn-primary text-light border-0">
              {todo.priority} <span class="badge rounded-pill bg-light text-secondary">1</span>
              </button>

            </div>

            <div className="card-body">
              <p>{todo.description}</p>
              <p><b>{todo.responsible}</b></p>
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
              { todos }
            </div>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <p> logra tu hogar, logra tu sueño. </p>
          <a className="App-link"  /* href="https://reactjs.org" */ target="_blank" rel="noopener noreferrer" > conoce todo que tenemos para tí. Somos la mano amiga para construir tu sueño. </a>
      </div>
    );
  }
}


export default App;
