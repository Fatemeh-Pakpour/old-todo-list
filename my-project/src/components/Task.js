import React, { PureComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import EditDelete from "./EditDelete";


class Task extends PureComponent {
  state = { isEditing: false };

  // constructor() {
  //   super();
  //   this.toggleForm = this.toggleForm.bind(this);
  //   this.saveTask = this.saveTask.bind(this);
  // }
  saveTask = (event)=> {
    event.preventDefault();
    const { id, editTask } = this.props;
    const newTaskTitle = event.target.taskTitle.value;
    editTask(id, newTaskTitle);
    this.setState({
      isEditing: false
    });
  }

  toggleForm =() =>{
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  render() {
     
    const { taskTitle, id, removeTask } = this.props;
    console.log(this.props.title);

    return (
      <div className="task">
        <span className="task-title">
          {!this.state.isEditing ? (
            <span className ="task-parent">
            <input type="checkbox" className="styled" 
            />
            <label>{taskTitle}</label>
            </span>
          ) : (
            <form className ="edit-form" onSubmit={this.saveTask}>
              <input name="taskTitle" type="text" defaultValue={taskTitle} />
              <button><FontAwesomeIcon icon= {faCheckCircle}/></button>
            </form>
          )}
            <EditDelete
                removeTask={removeTask}
                id={id}
                isEditing={this.state.isEditing}
                toggleForm={this.toggleForm}
            />
        </span>
      </div>
    );
  }

  
}

export default Task;
