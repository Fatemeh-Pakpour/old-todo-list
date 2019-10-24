import React, { Component } from "react";

import DatePicker from 'react-datepicker';


import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewTask extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const title = event.target.title.value.trim();
    
   
    if (!title.length) {
      alert("Please Enter Your Task to the List");
    } else {
      this.props.addNewTask(title);
      event.target.reset();
    }
  };
 
  render() {
    const{changeDate , date} = this.props
    return (
      <form className = "task-form" onSubmit={this.handleSubmit}>
        {/* <input type="text" value={this.state.value} onChange ={this.handleValueChange} /> */}
        <input type="text" name="title" />
        <DatePicker
          className = "date-picker"
          selected={date}
          onChange={() => {changeDate(date)}}
          name="date"
          dateFormat="MM/DD/YYYY"
        />  
        <input type="submit" value="Add " />  
      </form>
    );
  }
}

export default NewTask;
