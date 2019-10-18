import React, { Component } from "react";
import Header from "./Header";
import Task from "./Task";
import NewTask from "./NewTask";


class App extends Component {
  state = {
    tasks: [
      {
        title: "hand in my homework",
        id: 1,
        
      },
      {
        title: "study group meeting",
        id: 2,
        
      },
      {
        title: "play table tennis",
        id: 3,
      }
    ]
  };

  // task id counter
  prevTaskId = 3;

  handleAddNewTask = title => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title,
          id: (this.prevTaskId += 1)
        }
      ]
    });
  };

  handleRemoveTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id)
    }));
  };
  handleEditTask = (id, newTaskTitle) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    const newArray = [...this.state.tasks];
    newArray.splice(index, 1, { ...newArray[index], title: newTaskTitle });
    this.setState({
      tasks: newArray
    });
  };
  render() {
    return (
      <div className="todo-ist">
        <Header title="To do list" totalTask={this.state.tasks.length} />
        <div className="tasks-container">
          {this.state.tasks.map(task => (
            <Task
              taskTitle={task.title}
              id={task.id}
              done={task.done}
              key={task.id}
              removeTask={this.handleRemoveTask}
              editTask={this.handleEditTask}
              
            />
          ))}
        </div>

        <NewTask addNewTask={this.handleAddNewTask} />
      </div>
    );
  }
}

export default App;
