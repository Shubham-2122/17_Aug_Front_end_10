import React from 'react'
import Home from './wesbite/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './wesbite/Pages/About'
import Services from './wesbite/Pages/Services'
import Testi from './wesbite/Pages/Testi'
import Trainning from './wesbite/Pages/Trainning'
import Feacture from './wesbite/Pages/Feacture'
import Countries from './wesbite/Pages/Countries'
import Contact from './wesbite/Pages/Contact'
import NotFound from './wesbite/Pages/NotFound'
import Dashbord from './admin/Apages/Dashbord'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/testi' element={<Testi />} />
          <Route path='/training' element={<Trainning />} />
          <Route path='/feacture' element={<Feacture />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='*' element={<NotFound />} />


          {/* Admin route */}
          <Route path='/dash' element={<Dashbord />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App