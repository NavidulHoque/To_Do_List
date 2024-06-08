/* eslint-disable react/prop-types */

const TodoLists = ({index, todoItem, handleComplete, handleDelete, handleEdit, showFinished}) => {
    return (
        <div style={!showFinished && todoItem.isComplete ? { display: "none" } : undefined} className="todo flex justify-between items-start gap-x-4">

            <div className="flex gap-x-2 items-start">

                <input className="mt-[6px]" type="checkbox" id={index.toString()} name={index.toString()} onChange={(e) => handleComplete(e, index)} checked={todoItem.isComplete}/>

                <label className={`${todoItem.isComplete && 'line-through'}`} htmlFor={index.toString()}>{todoItem.desc}</label>

            </div>

            <div className="flex gap-x-2">

                <button onClick={() => handleEdit(index)} className="bg-violet-500 hover:bg-violet-600 rounded-md text-white py-[6px] px-[10px]"><i className="fa-solid fa-pen-to-square"></i></button>

                <button onClick={() => handleDelete(index)} className="bg-violet-500 hover:bg-violet-600 rounded-md text-white py-[6px] px-[10px]"><i className="fa-solid fa-trash"></i></button>

            </div>

        </div>
    )
}

export default TodoLists
