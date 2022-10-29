import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import { useSelector } from 'react-redux';
import { store } from './app/store';

function App() {

  const [tasks, setTasks] = useState([])
  const darkTheme = useSelector( (state) => state.theme.dark )

  console.log(darkTheme)



  return (
    <div className={`App ${darkTheme && "dark"}`}>
      <div className={ darkTheme ? "darkTheme" : "lightTheme" }>{!darkTheme ? "Light" : "Dark"}</div>
      <AddTask add={setTasks} />
      <ListTask tasks={tasks} />
    </div>
  );
}

export default App;
