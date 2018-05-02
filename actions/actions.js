export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0; //default the value is set to 0, and when value increments/changes action triggers the store
export function addTodo(text) { //this function is action creator and sets is for every item
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

