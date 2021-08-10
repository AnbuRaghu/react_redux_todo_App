import * as types from './actionTypes'

export const completetodo=(todos)=>({
    type:types.COMPLETE_TODO,
    payload:todos
})
export const addTodo=(todos)=>({
    type:types.ADD_TODO,
    payload:todos
})
export const removeTodo=(todos)=>({
    type:types.REMOVE_TODO,
    payload:todos
})
export const updateTodo=(todos)=>({
    type:types.UPDATE_TODO,
    payload:todos
})