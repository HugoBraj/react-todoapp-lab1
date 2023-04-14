import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import Theme from "./components/Theme";


export default function App() {
  return (
    <>
    <main >
      <AddTodo />
      <ToDoList />
      <Theme />
    </main>
    </>
  )
}