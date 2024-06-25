import { useEffect } from "react"
import ToDoListHooks from "../hooks/ToDoListHooks"

const Navbar = () => {
  const { theme, setTheme } = ToDoListHooks()

  useEffect(() => {

    localStorage.setItem("theme", JSON.stringify(theme))

  }, [theme])

  return (
    <nav className="h-[60px] bg-blue-400 dark:bg-blue-900 flex items-center">

      <div className="w-[95vw] mx-auto flex justify-between items-center">

        <h1 className="text-white hover:font-semibold transition-all cursor-pointer text-[28px]">iTask</h1>

        <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} className="text-[24px]">
          {theme === 'dark' ? <i className="fa-regular fa-sun text-white p-[12px] rounded-full hover:bg-[rgba(0,0,0,0.1)]"></i> : <i className="fa-regular fa-moon p-[12px] rounded-full hover:bg-[rgba(0,0,0,0.1)] w-[48px]"></i>}
        </button>

      </div>

    </nav>
  )
}

export default Navbar
