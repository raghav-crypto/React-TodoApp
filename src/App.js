import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './component/pages/about';
import {Component} from 'react';
import Todos from './component/Todos';
import Header from './component/layout/header';
import AddTodo from './component/AddTodo';
import {v4 as uuid} from 'uuid';
import Axios from 'axios';
import './App.css'

class App extends Component {

  state = {
    todos: []
  }

  // componentDidMount(){
  //   Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(res => {
  //     this.setState({ todos: res.data })
  //   })
  // }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( (todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    // Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)] })
    //   )
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)] })
  }
  // Add Todo
  addtodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: uuid() ,
      title: title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]})

    // Axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title,
    //   completed: false
    // })
    // .then(res => {this.setState( {todos: [...this.state.todos, res.data]})})
    // .catch(error => console.log(error))
  }

  render() {
    // const date = Date.now()
    // console.log(this.state.todos, date)
    return (
      <Router>
        <div>
          
          <div className='container'>
            <Header />
            <Route exact  path='/' render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.addtodo} />
                <Todos
                delTodo = {this.delTodo}
                markComplete = {this.markComplete}
                todos={this.state.todos}
                />
              </React.Fragment>
            )} />
            <Route path='/about' component={About}></Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;