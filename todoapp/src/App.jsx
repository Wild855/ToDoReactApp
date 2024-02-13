import './App.css'
import {useState} from "react";

function App() {
    const [newItem,setNewItem] = useState("")
    // setNewItem("cag")


use

use
    use;use
us
    const [, set] = useState()
    useState
useState
useState()
    const [, set] = useState()
    const [, set] = useState()
    const [, set] = useState()
    co
    function handleSubmit(e){
e.preventDefault()
    }

  return (
      <>
          <form onSubmit={handleSubmit} className="new-item-form">
      <diu className="form-row">
        <label htmlFor = "item">New Item</label>
          <input value={newItem}
                 onChange={e =>setNewItem(e.target.value)}
                 type = "text"
                 id = "item" />

      </diu>
        <button className = "btn">Add</button>
  </form>
          <h1 className={"header"}> Todo List</h1>
          <ul className={"list"}>
              <li>
                  <label>
                      <input type={"checkbox"}/>
                      Item 1
                  </label>
                  <button className={"btn btn-danger"}>Delete</button>
              </li>
              <li>
                  <label>
                      <input type={"checkbox"}/>
                      Item 2
                  </label>
                  <button className={"btn btn-danger"}>Delete</button>
              </li>
              <li>
                  <label>
                      <input type={"checkbox"}/>
                      Item 3
                  </label>
                  <button className={"btn btn-danger"}>Delete</button>
              </li>
          </ul>

</>
)
}
export default App

