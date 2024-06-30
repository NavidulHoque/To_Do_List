/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar'
import ToDoListItems from './components/ToDoListItems'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || 'light')

  return (


    <div className={theme}>

      <div className='bg-slate-100 min-h-screen dark:bg-black transition-all duration-200'>

        <Navbar theme={theme} setTheme={setTheme} />

        <ToDoListItems />

      </div>
      
    </div>



  )
}

export default App
