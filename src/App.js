import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Porfolio from './components/Porfolio'
//
import './App.scss'
//
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
      
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/porfolio" element={<Porfolio />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>

      </BrowserRouter>
     

    </>
  )
}

export default App
