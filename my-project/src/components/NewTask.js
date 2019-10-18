import React, { Component } from "react";

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
    return (
      <form className = "task-form" onSubmit={this.handleSubmit}>
        {/* <input type="text" value={this.state.value} onChange ={this.handleValueChange} /> */}
        <input type="text" name="title" />
        <input type="submit" value="Add " />
      </form>
    );
  }
}

export default NewTask;
