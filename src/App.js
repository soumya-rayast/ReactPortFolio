import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Expierence from './components/Expierence';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Project from './components/Project';
import Skill from './components/Skill';
// import {Link} from "react-router-dom"
function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <div className='pt-16 min-h-screen'>
        <div className='relative'>
          <Main />
        </div>
        <div className='relative'>
          <About />
        </div>
      </div>
      <div className='flex flex-col relative  bg-white'>
        <Overview />
      </div>
      <div className='flex flex-col relative  bg-white'>
        <Expierence />
      </div>
      <div className='flex flex-col relative  bg-white'>
        <Skill />
      </div>
      <div className='flex flex-col relative  bg-white'>
        <Project />
      </div>
      <div className='flex flex-col relative bg-white'>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
