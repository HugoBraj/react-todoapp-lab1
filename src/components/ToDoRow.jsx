import React, { useState } from "react";
import { actions } from "../store";

export default function ToDoRow(props) {

  const [isUnwrap,setIsUnwrap] = useState(false);
  const [editionMode, setEditionMode] = useState(false);
  const [value, setValue] = React.useState(props.todo.name)
  const [desc, setDesc] = React.useState(props.todo.desc)
  const [date, setDate] = React.useState(props.todo.echeance)
  const [prio, setPrio] = React.useState(props.todo.prio)
  function handleCheckBoxChange() {
    
    actions.toggleTodo(props.todo.id, event.target.checked)
  }

  function handleDeleteClick() {
    actions.removeTodo(props.todo.id)
  }

  function handleVoirPlus() {
    setIsUnwrap(!isUnwrap);
  }

  function handleModifierTask(){
    actions.modifieTodo(props.todo.id, { name: value, description: desc, date: date, priorite: prio});
    setEdition(false)
  }

  function changeHtml(){
    if (editionMode){
      return (
        <div className="todo-container"
      style={{textDecoration: props.todo.done ? 'line-through' : 'initial'}}>
        <div className="todo-header">
          Nom :
          <input onChange={({ target }) => setValue(target.value)} chafor="02-11"></input>
          <button onClick={handleVoirPlus} >Voir {isUnwrap ? 'moins' : 'plus'}</button>
        </div>
        
        <div className="todo-body" style={{display: isUnwrap ? 'initial' : 'none'}}>
          Description :
          <input onChange={({ target }) => setDesc(target.value)} className="description" ></input>
          Priorité :
          <select name="pets" id="pet-select" onChange={({ target }) => setPrio(target.value)} className="priorite">
              <option value="">Aucune</option>
              <option value="1">Critique</option>
              <option value="2">Importante</option>
              <option value="3">Simple</option>
              <option value="4">Mineure</option>
            </select>
          Pour le :
          <input  onChange={({ target }) => setDate(target.value)} className="date" ></input>
        </div>
        <div className="todo-footer" style={{display: isUnwrap ? 'initial' : 'none'}}>
          <button style={{ backgroundColor: 'red', paddingLeft: 10 }} onClick={() => setEditionMode(false)}>
          Annuler
           </button>
           <button style={{ backgroundColor: 'green', paddingLeft: 10 }} onClick={handleModifierTask}>
          Valider
           </button>
        </div>
        </div>
      )
    }
    else {
        return (
          <div className="todo-container"
      style={{textDecoration: props.todo.done ? 'line-through' : 'initial'}}>
        <div className="todo-header">
          <input  type="checkbox" onChange={handleCheckBoxChange} checked={props.todo.done}/>
          <label >{props.todo.name}</label>
          <button onClick={handleVoirPlus} >Voir {isUnwrap ? 'moins' : 'plus'}</button>
        </div>
        
        <div className="todo-body" style={{display: isUnwrap ? 'initial' : 'none'}}>
          Description :
          <div className="description">{props.todo.description}</div>
          Priorité :
          <div className="priorite">{props.todo.priorite}</div>
          Pour le :
          <div className="date">{props.todo.date}</div>
        </div>
        
        <div className="todo-footer" style={{display: isUnwrap ? 'initial' : 'none'}}>
          <button style={{ backgroundColor: 'green', paddingLeft: 10 }} onClick={() => setEditionMode(true)}>
          Modifier la tâche
           </button>
           <button style={{ backgroundColor: 'red', paddingLeft: 10 }} onClick={handleDeleteClick}>
          Supprimer la tâche
           </button>
        </div>
    </div>
          
        )
    }
  }
  
  return (changeHtml());
}





// import React, { useState } from "react";
// import { actions } from "../store";

// export default function ToDoRow(props) {

//   const [isUnwrap,setIsUnwrap] = useState(false);

//   function handleCheckBoxChange() {
    
//     actions.toggleTodo(props.todo.id, event.target.checked)
//   }

//   function handleDeleteClick() {
//     actions.removeTodo(props.todo.id)
//   }

//   function handleVoirPlus() {
//     setIsUnwrap(!isUnwrap);
//   }


//   return (
    // <div className="todo-container"
    //   style={{textDecoration: props.todo.done ? 'line-through' : 'initial'}}>
    //     <div className="todo-header">
    //       <input id="02-11" type="checkbox" name="r" value="2" onChange={handleCheckBoxChange} checked={props.todo.done}/>
    //       <label for="02-11">{props.todo.name}</label>
    //       <button onClick={handleVoirPlus} >Voir {isUnwrap ? 'moins' : 'plus'}</button>
    //     </div>
        
    //     <div className="todo-body" style={{display: isUnwrap ? 'initial' : 'none'}}>
    //       Description :
    //       <div className="description">{props.todo.description}</div>
    //       Priorité :
    //       <div className="priorite">{props.todo.priorite}</div>
    //       Pour le :
    //       <div className="date">{props.todo.date}</div>
    //     </div>
        
    //     <div className="todo-footer" style={{display: isUnwrap ? 'initial' : 'none'}}>
    //       <button style={{ backgroundColor: 'red', paddingLeft: 10 }} onClick={handleDeleteClick}>
    //       Modifier la tâche
    //        </button>
    //        <button style={{ backgroundColor: 'red', paddingLeft: 10 }} onClick={handleDeleteClick}>
    //       Supprimer la tâche
    //        </button>
           
    //     </div>
    // </div>
//   )
// }