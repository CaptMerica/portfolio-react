import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Resume from './Pages/Resume/Resume'
import Projects from './Pages/Projects/Projects'
import NavBar from './components/NavBar';
import ProjectDetails from './Pages/ProjectDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='resume' element={<Resume />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='projects/:projectDetails' element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App;
