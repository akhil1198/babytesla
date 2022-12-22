import logo from './logo.svg';
import './App.css';
import Landing from './components/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from "history";
import Products from './components/products';

var history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
