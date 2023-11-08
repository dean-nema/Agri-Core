import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Create a CSS file for your component styles

class Copy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      taskDetails: {
        taskDate: "25/05/22",
        taskName: "Water crops",
        taskDescription: "Water the cabbages and the potatoes",
      },
      isDropdownOpen: false,
  isModalOpen: false, 
  isModalsOpen: false,
    };
  }
  handleInputChange = (e, inputName) => {
    const updatedTaskDetails = { ...this.state.taskDetails, [inputName]: e.target.value };
    this.setState({
      taskDetails: updatedTaskDetails,
    });
  };


  onChange = (date) => {
    this.setState({ date });
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  handleOptionClick = (option) => {
    // Handle the option click here
    alert(`Clicked: ${option}`);
    // You can replace the alert with your desired action
  };
  handleDateChange = (date) => {
    this.setState({
      selectedDate: date,
    });
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  openModals = () => {
    this.setState({ isModalsOpen: true });
  };
  
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  closeModals = () => {
    this.setState({ isModalsOpen: false });
  };
  
  render() {
    return (
      <div className='all'>
       
        <nav>
          <ul>
             <link rel="stylesheet" type="text/css" href="./Copy.css"></link>
            <p className="task-header">TASKS</p>
            <button className='adding-task-button' onClick={this.openModal}>ADD TASK <p className='positive'>+</p></button>
            {this.state.isModalsOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.closeModals}>&times;</span>
                {/* Add your modal content here */}
                <h2>Edit Task</h2>
                <span className='span'>
                  <p className='modal-name'>Task Name:  </p>
                <input className='input-tasks' type="text" value={this.state.taskDetails.taskName} onChange={(e) => this.handleInputChange(e, "taskName")}></input>
                </span>
                <span className='span'>
                  <p className='modal-description'>Task Description: </p>
                <input className='input-tasks' type="text" value={this.state.taskDetails.taskDescription} onChange={(e) => this.handleInputChange(e, "taskDescription")}></input>
                </span>
                <span className='span'>
                  <p className='modal-date'>Pick Date: </p>
                <DatePicker className='input-tasks'
          selected={this.state.selectedDate}
          onChange={this.handleDateChange}
          dateFormat="MM/dd/yyyy" // You can customize the date format
          placeholderText="Select a date"
        />
                </span>
                <button className='modal-add-tasks-button'>ADD</button>
                
                {/* Include form elements or any content you want in the modal */}
              </div>
            </div>
          )}
            {this.state.isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.closeModal}>&times;</span>
                {/* Add your modal content here */}
                <h2>Add a Task</h2>
                <span className='span'>
                  <p className='modal-name'>Task Name: </p>
                <input className='input-tasks' placeholder='Enter task name here'></input>
                </span>
                <span className='span'>
                  <p className='modal-description'>Task Description: </p>
                <input className='input-tasks' placeholder='Enter task name here'></input>
                </span>
                <span className='span'>
                  <p className='modal-date'>Pick Date: </p>
                <DatePicker className='input-tasks'
          selected={this.state.selectedDate}
          onChange={this.handleDateChange}
          dateFormat="MM/dd/yyyy" // You can customize the date format
          placeholderText="Select a date"
        />
                </span>
                <button className='modal-add-tasks-button'>ADD</button>
                
                {/* Include form elements or any content you want in the modal */}
              </div>
            </div>
          )}
          {/* End of Modal */}
            <div className="task-container">
              <div className="first-row">
                <div className="line1">
                  
                  <span>
                    <button className='first-task'>
                      <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={this.openModals}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  <span>
                    <button className='first-task2'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1"onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className='a2' onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  <span>
                    <button className='second-task2'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                </div>
                <div className="line2">
                  <span>
                    <button className='second-task'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a  className="a2"onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  <span>
                    <button className='second-task2'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  <span>
                    <button className='third-task2'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                </div>
                <div className="line3">
                  <span>
                    <button className='third-task'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  <span>
                    <button className='third-task2'>
                    <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  <span>
                    <button className='first-task'>
                      <div className="dropdown" onClick={this.toggleDropdown}>
                        <div className="three-dots">&#8942;</div>
                        {this.state.isDropdownOpen && (
                          <div className="dropdown-content">
                            <a className="a1" onClick={() => this.handleOptionClick("Edit")}>Edit</a>
                            <a className="a2" onClick={() => this.handleOptionClick("Delete")}>Delete</a>
                          </div>
                        )}
                      </div>
                      <p className='task-name'>Task: {this.state.taskDetails.taskName}</p>
                      <p className='task-details'>Details: {this.state.taskDetails.taskDescription}</p>
                      <p className='task-date'>Date: {this.state.taskDetails.taskDate}</p>
                    </button>
                  </span>
                  
                </div>
                <div className='calender-div'>
                  <Calendar onChange={this.onChange} value={this.state.date} className="calender" />
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Copy;