import React, { Component } from 'react';

class Create_Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_startdate: '',
      todo_completeddate: '',
      todo_completed: false
    };
  }

  render() {
    return (
      <div>
        <p>This is Create Todo Component!!</p>
      </div>
    );
  }
}

export default Create_Todo;
