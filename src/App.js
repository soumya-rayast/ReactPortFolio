import './App.css';
import About from './components/About';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Overview from './components/Overview';

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="fixed w-full z-10">
        <Navbar/>
      </div>
      <div className='pt-16 min-h-screen'>
        <div className='relative'>
          <Main/>
        </div>
        <div className='relative'>
          <About/>
        </div>
      </div>
      <div className='flex flex-col relative bg-white'>
        <Overview/>
      </div>
    </div>
  );
}

export default App;
