import ToDoListItem from "./ToDoListItem"
import ToDoListHooks from "../hooks/ToDoListHooks"

const ToDoListItems = () => {

    const { todoList, setTodoList, recentTodoItem, setRecentTodoItem, showFinished, setshowFinished } = ToDoListHooks()

    function handleRecentTodoItem(e) {

        setRecentTodoItem(e.target.value)

        localStorage.setItem("todoItem", JSON.stringify(e.target.value))

    }

    //adding the current todo in the todo list array
    function handleAdd() {

        if (recentTodoItem) {
            setTodoList((prev) => [...prev, { desc: recentTodoItem, isComplete: false }])
            setRecentTodoItem("")

            localStorage.setItem("todoList", JSON.stringify([...todoList, { desc: recentTodoItem, isComplete: false }]))
            localStorage.setItem("todoItem", JSON.stringify(""))
        }

    }

    return (
        <div className='container w-[90vw] md:w-[75vw] lg:w-[52vw] bg-violet-100 mx-auto rounded-lg p-[20px] mt-[20px] flex flex-col gap-y-7'>

            <h1 className='font-bold text-[30px] text-center'>iTask - Manage your todos in one place</h1>

            <div className='addtodo flex flex-col gap-y-4'>

                <h2 className='font-bold text-[24px]'>Add a Todo</h2>

                <div className='flex gap-x-3'>

                    <input type="text" className='w-[90%] rounded-3xl py-[5px] px-[10px] outline-none focus:border-black focus:border-2' onChange={handleRecentTodoItem} value={recentTodoItem} autoFocus />

                    <button onClick={handleAdd} className="bg-violet-500 hover:bg-violet-600 rounded-3xl text-white py-[8px] px-[15px]">Add</button>

                </div>

            </div>

            <div className='flex gap-x-3 items-center'>

                <input type="checkbox" onChange={() => setshowFinished(!showFinished)} checked={showFinished} id="showFinished" name="showFinished" />
                <label htmlFor="showFinished">Show Finished</label>

            </div>

            <h2 className='font-bold text-[24px]'>Your Todos</h2>

            <div className='todos flex flex-col gap-y-4'>

                {todoList.map((item, index) => {
                    return <ToDoListItem key={index} index={index} item={item} />
                })}

            </div>



        </div>
    )
}

export default ToDoListItems
