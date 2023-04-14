import React, { useState } from "react";
import { actions, setPrioriteTodo } from "../store";

export default function AddTodo() {
  const [value, setValue] = useState('')
  const [valueDesc, setValueDesc] = useState('')
  const [valuePrio, setValuePrio] = useState('')
  const [valueDate, setValueDate] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  
  function handleSubmit() {
    if(value==''){
      setIsEmpty(true)
    }
    else{
      let todoCreate = {name: value , priorite:Number(valuePrio), date: valueDate , description: valueDesc};
      actions.addTodo(todoCreate)
      console.log(todoCreate);
      setValue('')
      setValueDesc('')
      setValueDate('')
      setValuePrio('')
      setIsEmpty(false)
    }
    
  }
  

  return (
    <div className="component">
      <div className="header">
        <img src="src/assets/lists-todo.png" alt="Icon Ajout Todo"/>Créer un nouveau Todo
      </div>
      <div className="warning" style={{display: isEmpty ? "inline" : "none"}}>Veuillez renseignez au moin une valeur pour le nom du Todo</div>
      <div className="body form">
        <div className="form-sub">
          <div>
            <div className="label">Titre :</div>
            <input
              type="text"
              value={value}
              onChange={( {target} ) => setValue(target.value)}
              placeholder="Qu'avez-vous à faire ?"
            />
          </div>
          <div >
            <div className="label">Decription :</div>
              <textarea rows="7" cols="100"  type="text"
                value={valueDesc}
                onChange={( {target} ) => setValueDesc(target.value)}
                placeholder="Ecrivez quelques lignes sur la tâche à effectuer"
              />
            </div>
        </div>
        <div className="form-sub">
          <div>
            <div className="label">Priorité :</div>
            <select name="pets" id="pet-select" onChange={( {target} ) => setValuePrio(target.value)}>
              <option value="">Aucune</option>
              <option value="1">Critique</option>
              <option value="2">Importante</option>
              <option value="3">Simple</option>
              <option value="4">Mineure</option>
            </select>
          </div>
          <div>
          <div className="label">Jusqu'au :</div>
            <input type="date" onChange={( {target} ) => setValueDate(target.value)}/>
          </div>
          
        </div>
       
        
       
      </div>
      <div>
            <button className="button-function" onClick={handleSubmit}>Créer le Todo</button>
          </div>
    </div>
  )
}