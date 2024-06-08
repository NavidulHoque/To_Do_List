/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar'
import TodoLists from './components/TodoLists'

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []) //here all the todo list will be stored
  const [recentTodoItem, setRecentTodoItem] = useState(JSON.parse(localStorage.getItem("todoItem")) || "") //will handle the recent todo being written by the user
  const [showFinished, setshowFinished] = useState(true)
  
  function handleRecentTodoItem(e) {
    setRecentTodoItem(e.target.value)
    localStorage.setItem("todoItem", JSON.stringify(e.target.value))
  }

  //adding the current todo in the todo list array
  function handleAdd() {

    const copy = [...todoList]  
    copy.push({desc: recentTodoItem, isComplete: false})
    setTodoList(copy)
    setRecentTodoItem("")

    localStorage.setItem("todoList", JSON.stringify(copy))
    localStorage.setItem("todoItem", JSON.stringify(""))

  }

  //toggling the specific todo
  function handleComplete(e, index) {

    const copy = [...todoList]  
    copy[index].isComplete = !copy[index].isComplete
    setTodoList(copy)

    localStorage.setItem("todoList", JSON.stringify(copy))

  }

  //deleting the specific todo
  function handleDelete(index) {
    
    const copy = [...todoList]  
    setTodoList(copy.filter((x, i) => i !== index))

    localStorage.setItem("todoList", JSON.stringify(copy.filter((x, i) => i !== index)))

  }

  //deleting and editing the specific todo
  function handleEdit(index) {

    const copy = [...todoList]  
    setRecentTodoItem(copy[index].desc)
    setTodoList(copy.filter((x, i) => i !== index))

    localStorage.setItem("todoList", JSON.stringify(copy.filter((x, i) => i !== index)))
    localStorage.setItem("todoItem", JSON.stringify(copy[index].desc))

  }

  return (
    <div className='bg-slate-100 min-h-screen'>

      <Navbar />

      <div className='container w-[90vw] md:w-[75vw] lg:w-[52vw] bg-violet-100 mx-auto rounded-lg p-[20px] mt-[20px] flex flex-col gap-y-7'>

        <h1 className='font-bold text-[30px] text-center'>iTask - Manage your todos in one place</h1>

        <div className='addtodo flex flex-col gap-y-4'>

          <h2 className='font-bold text-[24px]'>Add a Todo</h2>

          <div className='flex gap-x-3'>

            <input type="text" className='w-[90%] rounded-3xl py-[5px] px-[10px] outline-none focus:border-black focus:border-2' onChange={ handleRecentTodoItem} value={recentTodoItem} autoFocus />

            <button onClick={handleAdd} className="bg-violet-500 hover:bg-violet-600 rounded-3xl text-white py-[8px] px-[15px]">Add</button>

          </div>

        </div>

        <div className='flex gap-x-3 items-center'>

          <input type="checkbox" onChange={(e) => setshowFinished(!showFinished)} checked={showFinished} id="showFinished" name="showFinished" />
          <label htmlFor="showFinished">Show Finished</label>

        </div>

        <h2 className='font-bold text-[24px]'>Your Todos</h2>

        <div className='todos flex flex-col gap-y-4'>

          {todoList.map((todoItem, index) => {
            return <TodoLists key={index} index={index} todoItem={todoItem} handleComplete={handleComplete} handleDelete={handleDelete} handleEdit={handleEdit} showFinished={showFinished} />
          })}

        </div>



      </div>

    </div>
  )
}

export default App
