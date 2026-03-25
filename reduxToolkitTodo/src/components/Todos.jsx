import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlices'
function Todos() {

    const todos = useSelector(state => state.todos)
    console.log(todos);

    const dispatch = useDispatch()
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (

                <li key={todo.key}>
                    {todo.text}
                    <button
                        className='p-2 bg-red-500 text-white'
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >X</button>
                </li>
            ))}
        </>
    )
}

export default Todos
