// import React, { useState } from "react";
// import { useTodos, useDone, useTodo, getTodos } from "../store";
// import ToDoRow from "./ToDoRow";
// import FilterRow from "./FilterRow";

// export default function ToDoList() {
//   useTodos()
//   const [isList, setisList] = useState(false);

//   function handleModeAffichage(){
//     if(isList){
//       return(
            
//           <div className="body">
//         <div className="body-lists">
        
//             {() => (getTodos().map((todo) => (
//               <ToDoRow key={todo.id} todo={todo} />
//             )))}
//           </div>
//       </div>
//         )
//     }else{
//       return(
//         <div className="body">
//         <div className="body-lists">
//           <div className="list">
//             <div className="h-title">A faire</div>
//             {() => (useTodo().map((todo) => (
//               <ToDoRow key={todo.id} todo={todo} />
//             )))}
//           </div>

//           <div className="list">
//             <div className="h-title">Terminé</div>
//           {() => (useDone().map((todo) => (
//               <ToDoRow key={todo.id} todo={todo} />
//             )))}
//           </div>
//         </div>
//       </div>
      
//       )
//     }
//   }
//   return (
//     <div className="component">
//     <div className="header">
//       <img src="src/assets/lists-todo.png" alt="Icon Ajout Todo"/>Vos Todos
//     </div>
//     <FilterRow />
//     <button onClick={() =>setisList(!isList)}>Mode d'affichage : {isList? "Liste":"Grille"}</button>
//     <div className="body">
//         <div className="body-lists">
//           <div className="list">
//             <div className="h-title">A faire</div>
//             {() => (useTodo().map((todo) => (
//               <ToDoRow key={todo.id} todo={todo} />
//             )))}
//           </div>

//           <div className="list">
//             <div className="h-title">Terminé</div>
//           {() => (useDone().map((todo) => (
//               <ToDoRow key={todo.id} todo={todo} />
//             )))}
//           </div>
//         </div>
//       </div>
//   {handleModeAffichage()}
//   </div>
//   )
// }


import React, { useState } from "react";
import { useTodos, useDone, useTodo } from "../store";
import ToDoRow from "./ToDoRow";
import FilterRow from "./FilterRow";

export default function ToDoList() {
  useTodos()
  const [isList, setisList] = useState(false);

  
  return (
    <div className="component">
      <div className="header">
        <img src="src/assets/lists-todo.png" alt="Icon Ajout Todo"/>Vos Todos
      </div>
      <FilterRow />
      <button onClick={() =>setisList(!isList)}>Mode d'affichage : {isList? "Liste":"Grille"}</button>
      <div className="body">
        <div className="body-lists">
          <div className="list">
            <div className="h-title">A faire</div>
            {useTodo().map((todo) => (
              <ToDoRow key={todo.id} todo={todo} />
            ))}
          </div>

          <div className="list">
            <div className="h-title">Terminé</div>
          {useDone().map((todo) => (
              <ToDoRow key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
  </div>
  )
}