import React, { Component } from "react";

import DatePicker from 'react-datepicker';
// import Form from "react-bootstrap/Form";


import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewTask extends Component {
  state ={
    changedDate:new Date("2015-06-17 14:24:36")
  }
  handleSubmit = event => {
    event.preventDefault();

    const title = event.target.title.value.trim();
   
    
    
   
    if (!title.length) {
      alert("Please Enter Your Task to the List");
    } else {
      this.props.addNewTask(title,this.state.changedDate);
      event.target.reset();
    }
  };
 handleChange = (date)=>{
  this.setState({changedDate :date})
 }
  render() {
    console.log(this.state);
    const{date} = this.props
   
    return (
      <form className = "task-form" onSubmit={this.handleSubmit}>
        {/* <input type="text" value={this.state.value} onChange ={this.handleValueChange} /> */}
        <input 
        type="text" 
        name="title" 
        placeholder ="Enter the new task"
        />
        <DatePicker
          className = "date-picker"
          selected={date}
          onChange={(date) => {
            console.log(date)
            this.handleChange(date) 
            }}
          name="date"
          dateFormat="YYYY-MM-DD"
          placeholderText= "Select the Date"
        />  
        <input type="submit" value="Add " />  
      </form>
    );
  }
}

export default NewTask;
