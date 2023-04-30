import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Skills from "./components/Skills";
import ErrorPage from "./components/Error";
import ProjectsPage from "./components/Poroject";
import Contact from './components/Contact'



function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/*" element={<ErrorPage/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      
    </div>
  );
}

export default App;
