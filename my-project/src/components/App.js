import React, { Component } from "react";
import Header from "./Header";
import NewTask from "./NewTask";
import * as moment from 'moment';
import Container from "react-bootstrap/Container";
import TaskList from "./TaskList";
import {Provider} from './Context';


class App extends Component {
  state = {
    tasks: []
    
    };
  handleAddNewTask = (title,date) => {
    const taskItem = {
      title,
      date: moment(date).format("YYYY-MM-DD"),
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
    console.log(date)
    this.setState({
      date: date
    })
  }
  render() {
    return (
      <Provider value = {{
        tasks : this.state.tasks,
        actions :{
          removeTask : this.handleRemoveTask,
          addNewTask :this.handleAddNewTask

        }
        }}> 
        <Container className ="todo-ist">
          <Header totalTask={this.state.tasks.length}/>
          <div className="tasks-container">
            <TaskList
              editTask={this.handleEditTask}
            />
            </div>
          <NewTask 
            changeDate = {this.handleDateChange}
          />
        </Container>
      </Provider>  
     
    );
  }
}

export default App;
