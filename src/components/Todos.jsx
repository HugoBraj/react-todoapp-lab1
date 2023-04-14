import React, { useState } from "react";
import AddTask from "./AddTodo";
import List from "./ToDoList";

export default function Todos(props) {
  
  return <>
  <h1>Todo Lelou</h1>
  <List todoList={props.todos} changeDone={props.changeDone} />
  <AddTask addTask={props.addTask} />
</>
;
}
