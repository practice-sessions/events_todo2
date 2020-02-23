import React, { Component } from 'react';
import axios from 'axios';

class Edit_Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_startdate: '',
      todo_completedate: '',
      todo_complete: false
    };
  }
  render() {
    return (
      <div>
        <p>This is my Edit Todo Component!!</p>
      </div>
    );
  }
}

export default Edit_Todo;
