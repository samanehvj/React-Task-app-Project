import React from 'react';
import {Fatrash, FaTrash} from 'react-icons/fa';

const Task = ({task,onDelete,onToggle}) => {
    return (
        <div 
        className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
         <h3> 
         {task.text}
        <FaTrash 
         onClick={()=>onDelete(task.id)} 
         style={{color:'red',size:20}}/>
         </h3>
         <p>{task.day}</p>

        </div>
    )
}

export default Task
