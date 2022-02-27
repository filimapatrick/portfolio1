import React from 'react'
import SideBar from './components/SideBar'
import PhotoSection from './components/PhotoSection'
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Works from './pages/Work'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  return (
    <div className='split'>
      <SideBar/>
      <PhotoSection/>

      <Routes>
  <Route path="/"  element={<Home />} />
           
  <Route path="/about" element={<About /> } />

  <Route path="/resume" element={<Resume /> } />

  <Route path="/works" element={<Works /> } />

  <Route path="/contact" element={<Contact /> } />

  <Route path="/blogs" element={<Blog /> } />

  
          </Routes>

    </div>
  )
}

export default App
