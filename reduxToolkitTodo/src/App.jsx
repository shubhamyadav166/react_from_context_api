import AddTodo from "./components/addTodo"
import Todos from "./components/Todos"


function App() {


  return (
    <>
      <div>
        <h1>Redux Toolkit Todo</h1>
        <AddTodo />

        <Todos />
      </div>
    </>
  )
}

export default App
