import React from 'react'
import PropTypes from 'prop-types'
import { FaRegCircle } from 'react-icons/fa'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FaRegCheckCircle } from 'react-icons/fa'

const TodoItem = ({ todo, toggle, deleteTodo }) => {
    return (
        <div className="w-full flex items-center px-2 py-4 gap-2 border-b cursor-pointer select-none" onClick={() => toggle(todo.id)}>
            {todo.isComplete ? (
                <FaRegCheckCircle className="text-[#00ADB5]" />
            ) : (<FaRegCircle className="text-[#00ADB5]" />
            )}
            <p className={`flex-1 ${todo.isComplete ? "line-through" : ""}`}>{todo.text}</p>
            <FaRegTrashAlt className="text-[#e01056] 
            size-5 hover:scale-110 transition-all" onClick={() => deleteTodo(todo.id)} />
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
