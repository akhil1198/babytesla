import logo from './logo.svg';
import './App.css';
import Landing from './components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
