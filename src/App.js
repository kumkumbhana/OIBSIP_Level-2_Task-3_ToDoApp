import React, { useState } from "react";
import TodoList from "./TodoList";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App = () => {

  const [inputList, setInputList] = useState("buy apple ");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value)
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
          <Button  onClick={listOfItems}> <AddIcon className="newBtn"/> </Button>
          
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map( (itemval, index) => {
              return <TodoList key={index} id={index} text={itemval} onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>


      
    </>
  );

}

export default App;