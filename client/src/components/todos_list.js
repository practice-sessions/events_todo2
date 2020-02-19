import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Todos_List extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  render() {
    return (
      <div>
        <p>This is my Todos List Component !!</p>
      </div>
    );
  }
}

export default Todos_List;
