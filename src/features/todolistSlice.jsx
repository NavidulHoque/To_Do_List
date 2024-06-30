/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const todolistSlice = createSlice({
    name: "ToDoList",
    initialState: {
        ToDoList: JSON.parse(localStorage.getItem("todoList")) || [],
    },
    reducers: {
        addToDoItem: (state, action) => {

            state.ToDoList = [...state.ToDoList, action.payload]

            localStorage.setItem("todoList", JSON.stringify(state.ToDoList))

        },
        completeToDoItem: (state, action) => {

            state.ToDoList[action.payload].isComplete = !state.ToDoList[action.payload].isComplete

            localStorage.setItem("todoList", JSON.stringify(state.ToDoList))
            
        },
        deleteToDoItem: (state, action) => {

            state.ToDoList = state.ToDoList.filter((x, i) => i !== action.payload)

            localStorage.setItem("todoList", JSON.stringify(state.ToDoList))

        },
        editToDoItem: (state, action) => {

            state.ToDoList = state.ToDoList.filter((x, i) => i !== action.payload)

            localStorage.setItem("todoList", JSON.stringify(state.ToDoList))

        },
    }
})

export const { addToDoItem, completeToDoItem, deleteToDoItem, editToDoItem } = todolistSlice.actions
export default todolistSlice.reducer