import React from "react";

const ToDoList1 = (props) => {

    return(
        <>
            <div className="todo_style">
                <button className="deleteBtn" onClick={() => {
                    props.onSelect(props.id)
                }}>X</button>
                <li> {props.text} </li>   
            </div>
        </>
    );
};

export default ToDoList1;