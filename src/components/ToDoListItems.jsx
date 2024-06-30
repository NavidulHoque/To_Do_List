import { useDispatch, useSelector } from "react-redux"
import ToDoListItem from "./ToDoListItem"
import { useRef, useState } from "react"
import { addToDoItem } from "../features/todolistSlice"

const ToDoListItems = () => {

    const [recentToDoItem, setRecentToDoItem] = useState(JSON.parse(localStorage.getItem("todoItem")) || "")
    const [showFinished, setShowFinished] = useState(true)
    const dispatch = useDispatch()
    const ToDoList = useSelector(state => state.ToDoList.ToDoList)
    const inputRef = useRef(null)

    function handleAdd() {

        if (recentToDoItem) {

            dispatch(addToDoItem({ desc: recentToDoItem, isComplete: false }))
           
            setRecentToDoItem("")

            localStorage.setItem("todoItem", JSON.stringify(""))
        }

    }

    return (
        <div className='container w-[90vw] md:w-[75vw] lg:w-[52vw] bg-violet-100 dark:bg-[rgb(45,45,45)] dark:text-white transition-all duration-200 mx-auto rounded-lg p-[20px] mt-[20px] flex flex-col gap-y-7'>

            <h1 className='font-bold text-[30px] text-center'>iTask - Manage your todos in one place</h1>

            <div className='flex flex-col gap-y-4'>

                <h2 className='font-bold text-[24px]'>Add a Todo</h2>

                <div className='flex gap-x-3'>

                    <input ref={inputRef} type="text" className='w-[90%] rounded-3xl py-[5px] px-[10px] outline-none focus:border-black focus:border-2 text-black' onChange={(e) => {

                        setRecentToDoItem(e.target.value)

                        localStorage.setItem("todoItem", JSON.stringify(e.target.value))

                    }} value={recentToDoItem} autoFocus />

                    <button onClick={handleAdd} className="bg-violet-500 hover:bg-violet-600 rounded-3xl text-white py-[8px] px-[15px]">Add</button>

                </div>

            </div>

            <div className='flex gap-x-3 items-center'>

                <input type="checkbox" onChange={() => setShowFinished(!showFinished)} checked={showFinished} id="showFinished" name="showFinished" />
                <label htmlFor="showFinished">Show Finished</label>

            </div>

            <h2 className='font-bold text-[24px]'>Your Todos</h2>

            <div className='flex flex-col gap-y-4'>

                {ToDoList.map((item, index) => {
                    return <ToDoListItem key={index} index={index} item={item} showFinished={showFinished} setRecentToDoItem={setRecentToDoItem} inputRef={inputRef} />
                })}

            </div>



        </div>
    )
}

export default ToDoListItems
