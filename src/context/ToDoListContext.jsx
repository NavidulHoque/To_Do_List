/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ToDoListContext = createContext([])

export const ToDoListProvider = ({ children }) => {

    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []) //here all the todo list will be stored
    const [recentTodoItem, setRecentTodoItem] = useState(JSON.parse(localStorage.getItem("todoItem")) || "") //will handle the recent todo being written by the user
    const [showFinished, setshowFinished] = useState(true)
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || 'light')


    return (
        <div className={theme}>
            <ToDoListContext.Provider value={{ todoList, setTodoList, recentTodoItem, setRecentTodoItem, showFinished, setshowFinished, theme, setTheme }}>

                {children}

            </ToDoListContext.Provider>
        </div>
    )
}
