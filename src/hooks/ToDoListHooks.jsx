import { useContext } from 'react'
import { ToDoListContext } from '../context/ToDoListContext'

const ToDoListHooks = () => {
  return useContext(ToDoListContext)
}

export default ToDoListHooks
