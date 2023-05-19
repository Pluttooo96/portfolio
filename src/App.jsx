import React from 'react';
import { BrowserRouter as HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects';


function App() {
  return (
    <>
      <HashRouter basename='/portfolio'>
        <Navbar />
        <Routes>
          <Route path='/portfolio' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App;
