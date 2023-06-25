import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {
   
    return(
    <>
    <div className="todo_style">
        <span  onClick={()=>{
                props.onSelect(props.id);
            }}><DeleteIcon className="deleteIcon"/>
        </span>
           
        <li> {props.text} </li>
    </div>
    
    </>
    );
};

export default TodoList;