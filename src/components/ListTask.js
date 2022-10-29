import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../app/themeSlice";
import Task from "./Task";

export default function ListTask({ tasks }) {
  const [filteredList, setFilteredList] = useState(tasks);
  const [filterByDone, setFilterByDone] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const dispatch = useDispatch()

  function handleFilter() {
    dispatch(toggleTheme())

    setFiltered(!filtered)
    setFilteredList(filteredList.filter( task => {
        return task.idDone == filterByDone
    } ))
  }

  return (
    <div>
      <div>
        <button onClick={handleFilter}>
          {filtered ? "Disable" : "Enable"} Filter
        </button>
        {filtered && (
          <div>
            <label>Filter by {filterByDone ? "Done" : "Pending"}</label>
            <input
              type="checkbox"
              value={filterByDone}
              onChange={() => setFilterByDone(!filterByDone)}
            />
          </div>
        )}
      </div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
}
