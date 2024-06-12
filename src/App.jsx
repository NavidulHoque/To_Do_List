/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar'
import ToDoListItems from './components/ToDoListItems'
import { ToDoListProvider } from './context/ToDoListContext'

function App() {
  

  return (
    <ToDoListProvider>

      <div className='bg-slate-100 min-h-screen'>

        <Navbar />

        <ToDoListItems />

      </div>

    </ToDoListProvider>

  )
}

export default App
