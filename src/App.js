import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/todoItem';
import todosData from './components/todosData';
import './App.css';
import Header from './components/header';
import MemeGenerator from './components/memeGenerator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }
  
  handleChange = (id) => {
    this.setState(prev => {
      const todos = prev.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return { todos }
    })
  }

  render() { 
    const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
    return (
      <div className='todo-list'>
        {todoItem}
      </div>
    )
  }
}

 
export default App;



// function App() {
//   return (
//     <div>
//       <Header />
//       <MemeGenerator />
//     </div>
//   );
// }

// export default App;