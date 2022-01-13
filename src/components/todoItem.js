import React, { Component } from 'react';
import '../App.css';

class TodoItem extends React.Component {
  render() {

    const style = {
      fontStyle: 'italic',
      color: 'gray',
      textDecoration: 'line-through'
    }

    return (
      <div className='todo-item'>
        <input type='checkbox' checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)}/>
        <p style={this.props.item.completed ? style : null}>{this.props.item.text}</p>
      </div>    
    );
  }
}
 
export default TodoItem;