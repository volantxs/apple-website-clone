import logo from './logo.svg';
import './global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Special from './components/special';
import Latest from './components/latest';
import Vision from './components/vision';
import Accessories from './components/accessories';
import Audio from './components/audio';
import Help from './components/help';
import Experience from './components/experience';
import Educators from './components/educators';
import PreFooter from './components/pre-footer';
import Footer from './components/footer';


function App() {
  return (
  <Router>
    <div className='app'>
    <Navbar/>
    <Hero/>
    <Special/>
    <Latest/>
    <Vision />
    <Accessories/>
    <Audio/>
    <Help/>
    <Experience/>
    <Educators/>
    <PreFooter/>
    <Footer/>
    </div>

  </Router>
  );
}

export default App;
