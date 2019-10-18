import React , {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

class EditDelete extends Component {
    render(){
        const{removeTask, id, toggleForm} = this.props;
        return (
            <span>
                <button className = "remove-task style-icon" onClick = {()=>{removeTask(id)}}><FontAwesomeIcon icon= {faTrashAlt}/></button>
                <button className = "edit-task style-icon" onClick = {()=>{toggleForm()}}><FontAwesomeIcon icon= {faEdit} /></button>
            </span>
        )
    }
}

export default EditDelete;