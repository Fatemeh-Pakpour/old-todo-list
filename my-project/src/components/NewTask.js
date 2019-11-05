import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Consumer } from "./Context";

// Datepicker
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NewTask extends Component {
  state = {
    changedDate: new Date()
  };

  handleChange = date => {
    this.setState({ changedDate: date });
  };
  render() {
    return (
      <Consumer>
        {context => {
          const handleSubmit = event => {
            event.preventDefault();
            const title = event.target.title.value.trim();
            if (!title.length) {
              alert("Please Enter Your Task to the List");
            } else {
              context.actions.addNewTask(title, this.state.changedDate);
              event.target.reset();
            }
          };

          return (
            <form className="task-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Enter the new task"
              />
              <DatePicker
                className="date-picker"
                selected={this.state.changedDate}
                onChange={date => {
                  console.log(date);
                  this.handleChange(date);
                }}
                name="date"
                dateFormat="yyyy-MM-dd"
                placeholder= "YYYY-MM-DD"
                minDate = {new Date()}
              />
              <input className = "add-btn" type="submit" value="Add " />
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default NewTask;
