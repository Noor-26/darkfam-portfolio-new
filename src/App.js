import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber/Navber';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="App" data-theme="black">
      <Navber/> 
      <Header/>
      <About/>
    </div>
  );
}

export default App;
