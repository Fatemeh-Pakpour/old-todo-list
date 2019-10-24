import React, { Component } from "react";
import Header from "./Header";
import Task from "./Task";
import NewTask from "./NewTask";
import * as moment from 'moment';


class App extends Component {
  state = {
    tasks: []
    
    };
  handleAddNewTask = (title ,date) => {
    const taskItem = {
      title,
      date: moment(date).format('DD-MM-YYYY'),
      id: new Date()
    }

   
    this.setState({tasks: [...this.state.tasks, taskItem]}, () => {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    })
  };
  
 
  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({
      tasks: tasks
    })
  }
  handleRemoveTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }), () => {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    });
  };
  handleEditTask = (id, newTaskTitle) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1, { ...newArray[index], title: newTaskTitle });
    this.setState({
      tasks: newArray
    }, () => {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    });
  };
  handleDateChange =(date) =>{
    this.setState({
      date: date
    })
  }
  render() {
    console.log('date:',this.state.tasks.date);
    return (
      <div className="todo-ist">
        <Header title="To do list"  />
        {/* totalTask={this.state.tasks.length} */}
        <div className="tasks-container">
          {this.state.tasks.map(task => (
            <Task
              taskTitle={task.title}
              date ={task.date}
              id={task.id}
              key={task.id}
              removeTask={this.handleRemoveTask}
              editTask={this.handleEditTask}
              
            />
          ))}
        </div>

        <NewTask 
        addNewTask={this.handleAddNewTask}
        changeDate = {this.handleDateChange}
         />
      </div>
    );
  }
}

export default App;
