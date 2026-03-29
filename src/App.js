import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import Hero from './components/Hero';
import Menu from './components/Menu';
import MyNav from './components/Nav';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className='app'>
      <MyNav/>
      <Hero/>
      <Menu/>
      <About/>
      <Expertise/>
      <Reviews/>
      <Contact/>
    </div>
    
  );
}

export default App;
