import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Aos from 'aos'

export default function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/headphones' element={<Headphones />} />
        <Route path='/category/speakers' element={<Speakers />} />
        <Route path='/category/earphones' element={<Earphones />} />
        {/* <Route path='/category/headphones/' element={null} /> */}
      </Routes>
    </React.Fragment>
  )
}
