import './App.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import { useSelector } from 'react-redux';

function App() {
  const darkTheme = useSelector( (state) => state.theme.dark )
  
  return (
    <div className={`App ${darkTheme && "dark"}`}>
      <div className={ darkTheme ? "darkTheme" : "lightTheme" }>{!darkTheme ? "Light" : "Dark"}</div>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
