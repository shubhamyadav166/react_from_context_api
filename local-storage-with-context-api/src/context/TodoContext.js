import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " ",
            completed: true
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deletTodo: (id) => { },
    toggleComplete: (id) => { }
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider