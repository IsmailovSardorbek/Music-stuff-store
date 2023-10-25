import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { products } from './data/products'
import Context from './context/context'

export default function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([])

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <Context.Provider
      value={{ products, shoppingCartItems, setShoppingCartItems }}
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/headphones' element={<Headphones />} />
        <Route path='/category/speakers' element={<Speakers />} />
        <Route path='/category/earphones' element={<Earphones />} />
        <Route path='/category/headphones/:id' element={null} />
      </Routes>
    </Context.Provider>
  )
}
