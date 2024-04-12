import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
     
     <Header/>
     <Navbar/>
     <Skills/>
     <Journey/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
