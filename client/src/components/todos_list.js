import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_description}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_responsible}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_priority}
    </td>
    <td className={props.todo.todo_completed ? 'completed' : ''}>
      {props.todo.todo_completeddate}
    </td>
    <td>
      <Link to={'/edit/' + props.todo._id}>Edit</Link>
    </td>
    <td>
      <Link to={'/delete/' + props.todo._id}>Delete</Link>
    </td>
  </tr>
);

class Todos_List extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:6000/api/todos')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>Complete Date</th>
              <th>Edit Todo</th>
              <th>Delete Todo</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Todos_List;
