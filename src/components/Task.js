import { useState } from "react";
import { useDispatch } from "react-redux";
import { markAsDone } from "../features/todo/todoSlice";
import "./Task.css";

export default function Task({ id, description, isDone }) {
  const [done, setDone] = useState(isDone);
  const dispatch = useDispatch();

  function check() {
    const payload = { id, isDone: done };
    dispatch(markAsDone(payload));
    setDone(!done);
  }

  return (
    <div className="task">
      <p className={done ? "checked" : ""}>{description}</p>
      <input onChange={check} type="checkbox" checked={done} value={isDone} />
    </div>
  );
}
