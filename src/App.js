import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber/Navber';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App" data-theme="black">
      <Navber/> 
      <Header/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
