import logo from './logo.svg';
import './App.css';
import Navber from './components/Navber/Navber';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectViewModal from './components/ProjectViewModal/ProjectViewModal';
import ProjectView from './components/ProjectView/ProjectView';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import { ToastContainer } from 'react-toastify'
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App" data-theme="black">
      <Navber/> 
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ProjectViewModal modal={"project_modal"}>
        <ProjectView/>
        </ProjectViewModal>
    </div>
  );
}

export default App;
