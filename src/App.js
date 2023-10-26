import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Special from './components/special';
import Latest from './components/latest';

function App() {
  return (
  <Router>
  <Navbar/>
  <Hero/>
  <Special/>
  <Latest/>
  </Router>
  );
}

export default App;
