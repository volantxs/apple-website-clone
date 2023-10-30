import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Special from './components/special';
import Latest from './components/latest';
import Vision from './components/vision';
import Accessories from './components/accessories';
import Audio from './components/audio';
import Help from './components/help';


function App() {
  return (
  <Router>
  <Navbar/>
  <Hero/>
  <Special/>
  <Latest/>
  <Vision />
  <Accessories/>
  <Audio/>
  <Help/>
  </Router>
  );
}

export default App;
