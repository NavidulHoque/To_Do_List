/* eslint-disable react/prop-types */
import ToDoListHooks from "../hooks/ToDoListHooks"

const ToDoListItem = ({ index, item }) => {
    const { todoList, setTodoList, setRecentTodoItem, showFinished } = ToDoListHooks()

    //toggling the specific todo
    function handleComplete(index) {

        const copy = [...todoList]
        copy[index].isComplete = !copy[index].isComplete
        setTodoList(copy)

        localStorage.setItem("todoList", JSON.stringify(copy))

    }

    //deleting the specific todo
    function handleDelete(index) {

        setTodoList((prev) => prev.filter((x, i) => i !== index))

        localStorage.setItem("todoList", JSON.stringify(todoList.filter((x, i) => i !== index)))

    }

    //deleting and editing the specific todo
    function handleEdit(index) {

        setTodoList((prev) => prev.filter((x, i) => i !== index))
        setRecentTodoItem(todoList[index].desc)

        localStorage.setItem("todoList", JSON.stringify(todoList.filter((x, i) => i !== index)))
        localStorage.setItem("todoItem", JSON.stringify(todoList[index].desc))

    }

    return (
        <div style={!showFinished && item.isComplete ? { display: "none" } : undefined} className="todo flex justify-between items-start gap-x-4">

            <div className="flex gap-x-2 items-start">

                <input className="mt-[6px]" type="checkbox" id={index.toString()} name={index.toString()} onChange={() => handleComplete(index)} checked={item.isComplete} />

                <label className={`${item.isComplete && 'line-through'}`} htmlFor={index.toString()}>{item.desc}</label>

            </div>

            <div className="flex gap-x-2">

                <button onClick={() => handleEdit(index)} className="bg-violet-500 hover:bg-violet-600 rounded-md text-white py-[6px] px-[10px]"><i className="fa-solid fa-pen-to-square"></i></button>

                <button onClick={() => handleDelete(index)} className="bg-violet-500 hover:bg-violet-600 rounded-md text-white py-[6px] px-[10px]"><i className="fa-solid fa-trash"></i></button>

            </div>

        </div>
    )
}

export default ToDoListItem
