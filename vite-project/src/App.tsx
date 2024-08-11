import { damydata } from "./assets/data/data"


function App() {
  return (
    <div>
       <h1>todo app</h1>

       {damydata.map(todo =>(
        <p>{todo.title}</p>
       ))}
    </div>
  )
}

export default App