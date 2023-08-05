import React, { useState } from "react";
import ToDoList1 from "./ToDoList1";

function mainToDoList(){

//Get Input
const [inputList, setInputList] = useState("");

//Array Created
const [Items, setItems] = useState([]);


const itemEvent = (event) => {
    setInputList(event.target.value);
};

//Set All items into array and clear inputlist
const listOfItems = () => {
    setItems((oldItems) => {
        return [...oldItems, inputList];
    });
    setInputList("");
};

//For deleteing items
const deleteItems = (id) => {
    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
            return index !== id;
        })
    })
};

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>To Do List</h1>
                    <br/>
                    <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList}></input>
                    <button onClick={listOfItems}>Add</button>
                    <br/>
                    <ol>   
                        {Items.map((itemavl, index) => {
                            return(
                                <>
                                    <div className="todo_style">
                                        <ToDoList1 
                                            key={index} 
                                            id={index} 
                                            text={itemavl}
                                            onSelect={deleteItems}    
                                        />
                                    </div>
                                </>
                            ); 
                        } )} 
                    </ol>
                </div>
            </div>
        </>
    );
};

export default mainToDoList;