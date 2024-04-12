import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Guide from "./components/Guide"

function App() {
  return (
    <div className="App">
     
     <Header/>
     <Navbar/>
     <Skills/>
     <Journey/>
     <Projects/>
     <Guide/>
     <Contact/>
    </div>
  );
}

export default App;
