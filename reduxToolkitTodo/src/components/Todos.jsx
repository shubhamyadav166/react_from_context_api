import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlices'
function Todos() {

    useSelector(state)
    return (
        <div>
            <h1>Todos are here</h1>
        </div>
    )
}

export default Todos
