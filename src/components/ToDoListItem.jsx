/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { completeToDoItem, deleteToDoItem, editToDoItem } from "../features/todolistSlice"

const ToDoListItem = ({ index, item, showFinished, setRecentToDoItem, inputRef }) => {

    const dispatch = useDispatch()
    const ToDoList = useSelector(state => state.ToDoList.ToDoList)

    function handleEdit(index) {

        dispatch(editToDoItem(index))
        setRecentToDoItem(ToDoList[index].desc)
        inputRef.current.focus()

        localStorage.setItem("todoItem", JSON.stringify(ToDoList[index].desc))

    }

    return (
        <div style={!showFinished && item.isComplete ? { display: "none" } : undefined} className="todo flex justify-between items-start gap-x-4">

            <div className="flex gap-x-2 items-start">

                <input className="mt-[6px]" type="checkbox" id={index.toString()} name={index.toString()} onChange={() => {

                    dispatch(completeToDoItem(index))

                }} checked={item.isComplete} />

                <label className={`${item.isComplete && 'line-through'}`} htmlFor={index.toString()}>{item.desc}</label>

            </div>

            <div className="flex gap-x-2">

                <button onClick={() => handleEdit(index)} className="bg-violet-500 hover:bg-violet-600 rounded-md text-white py-[6px] px-[10px]"><i className="fa-solid fa-pen-to-square"></i></button>

                <button onClick={() => dispatch(deleteToDoItem(index))} className="bg-violet-500 hover:bg-violet-600 rounded-md text-white py-[6px] px-[10px]"><i className="fa-solid fa-trash"></i></button>

            </div>

        </div>
    )
}

export default ToDoListItem
