import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/themeSlice";
import Task from "./Task";

export default function ListTask() {
  const dataList = useSelector((state) => state.todo.tasks);
  const [list, setList] = useState(dataList);
  const [filtered, setFiltered] = useState(false);
  const dispatch = useDispatch();


  useEffect( () => {
    setList(dataList)
  } ,[dataList])

  function changeTheme() {
    dispatch(toggleTheme());
  }

  function handleFilter() {
    if ( !filtered ) setList( dataList.filter((task) => task.isDone === filtered) );
    if ( filtered ) setList( dataList )
    setFiltered(!filtered);
  }

  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
      <div>
        <button onClick={handleFilter}>
          {filtered ? "Disable" : "Enable"} Filter
        </button>
      </div>
      {list.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
}
