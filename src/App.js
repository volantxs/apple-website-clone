import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
  <Router>
  <Navbar/>
  <div>
  <Hero/>
  </div>
  </Router>
  );
}

export default App;
