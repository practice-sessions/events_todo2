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
      todo_completed: false
    };
  }
  render() {
    return (
      <div>
        <h3 align='center'>Edit Todo</h3>
        <form>
          <div className='form-group'>
            <label>Description:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.todo_description}
            />
          </div>

          <div className='form-group'>
            <label>Responsible:</label>
            <iput
              type='text'
              className='form-control'
              value={this.state.todo_responsible}
            />
          </div>

          <div className='form-group'>
            <label>Start Date</label>
            <input
              type='date'
              className='form-control'
              value={this.state.todo_startdate}
            />
          </div>

          <div className='form-group'>
            <label>Intended Completion Date: </label>
            <input
              type='date'
              className='form-control'
              value={this.state.todo_completedate}
            />
          </div>

          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityLow'
                value='Low'
                checked={this.state.todo_priority === 'Low'}
              />
              <label className='form-check-label'>Low</label>
            </div>

            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityMedium'
                value='Medium'
                checked={this.state.todo_priority === 'Medium'}
              />
              <label className='form-check-label'>Medium</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                name='priorityOptions'
                id='priorityHigh'
                value='High'
                checked={this.state.todo_priority === 'High'}
              />
              <label className='form-check-label'>High</label>
            </div>
          </div>

          <div className='form-check'>
            <input
              className='form-check-input'
              id='completedCheckbox'
              type='checkbox'
              name='completedCheckbox'
              checked={this.state.todo_completed}
            />
            <label className='form-check-label' htmlFor='completedCheckbox'>
              Completed
            </label>
          </div>

          <br />
          <div className='form-group'>
            <input
              type='submit'
              value='Update Todo'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Edit_Todo;
