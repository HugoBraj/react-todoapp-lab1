import { proxy, useSnapshot } from 'valtio'

// export interface Todo {
//   id: number
//   name: string
//   description: string
//   done?: boolean
//   priority: number
// }

export const filtersTri = ['Priorite', 'Urgence','Titre']

export const colorsDesert = ['#584B53','#9D5C63', '#D6E3F8','#b8d0f7','#FEF5EF','#E4BB97', '#5c9d6c']
export const colorsArctic = ['#4B5850','#5C9D96', '#F8EBD6','#F7DFB8','#EFF8FE','#97C0E4', '#9D5C8D']
// interface Store {
//   todos: Todo[]
//   filter: Filter
// }

export const store = proxy({
  todos: [],
  filter: "Titre",
  color: colorsDesert
})

let id = 0
export const actions = {
  addTodo(todo) {
    store.todos.push({
     ...todo,
      id: id++
    })
  },
  modifieTodo(id,todo){
    this.removeTodo(id);
    this.addTodo(todo);
  },
  toggleTodo(id, value) {
    const todo = store.todos.find((todo) => todo.id === id)
    if (todo && value) todo.done = value
    else if (todo) todo.done = !todo.done
  },
  removeTodo(id) {
    store.todos = store.todos.filter((todo) => todo.id !== id)
  },
  toggleFilter(filter) {
    store.filter = filter
  },
  getPrioriteTodo(id){
    const todo = store.todos.find((todo) => todo.id === id);
    let priority="";
    switch (todo.priorite) {
      case 1:
        priority="Critique"
        break;
      case 2:
        priority="Important"
      break;
      case 3:
        priority="Simple"
      break;
      case 4:
        priority="Mineure"
      break;
      default:
        priority="Aucune"
    }
    return priority;
  }
}

export function getTodos(){
  const snapShot = useSnapshot(store)
  return snapShot.todos
}

export function 
setPrioriteTodo(str){
  let numPriority=0;
  switch (str) {
    case "Critique":
      numPriority=1
    break;
    case "Important":
      numPriority=2
    break;
    case "Simple":
      numPriority=3
    break;
    case "Mineur":
      numPriority=4
    break;
    default:
      numPriority=0
  }
  return numPriority;
}

export function getColor(){
    return useSnapshot(store).color;
  }


 export function switchColor(){
    if(store.color===colorsArctic){
      store.color=colorsDesert;
    }else{
      store.color=colorsArctic;
    }
  }

export function useTodos() {
  const snapShot = useSnapshot(store)
  
  switch (snapShot.filter) {
    case 'Priorite':
      store.todos.sort((a, b) => (a.priorite > b.priorite) ? 1 : (a.priorite === b.priorite) ? ((a.id > b.id) ? 1 : -1) : -1 )
    break;
    case 'Urgence':
      store.todos.sort((a, b) => (a.date > b.date) ? 1 : (a.date === b.date) ? ((a.id > b.id) ? 1 : -1) : -1 )
    break;
    case 'Titre':
      store.todos.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.id > b.id) ? 1 : -1) : -1 )
    break;
    default:
      throw Error('Error: un supported filter');
  }
return snapShot.todos
}

export function useFilter() {
  return useSnapshot(store).filter
}

export function useDone() {
  const snapShot = useSnapshot(store)
  return snapShot.todos.filter((todo) => todo.done)
}

export function useTodo() {
  const snapShot = useSnapshot(store)
  return snapShot.todos.filter((todo) => !todo.done)
}