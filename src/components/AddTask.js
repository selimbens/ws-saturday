import { useDispatch } from "react-redux"
import { addToList } from "../features/todo/todoSlice"

export default function AddTask() {

    const dispatch = useDispatch()

    let description = ""

    function handleChange(event) {
        description = event.target.value
    }
    
    function send() {
        dispatch(addToList(description))
    }

    function handleClick(event) {
        if (event.key == 'Enter' ) send()
    }

  return (
    <div>
        <input onChange={handleChange} type="text" placeholder="Describe your to do" onKeyUp={handleClick} />
        <button onClick={send}>Add task</button>
    </div>
  )
}
