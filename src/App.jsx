import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from './layout/Weblayout'
import Login from '@/pages/web/Login'
import Register from '@/pages/web/Register'
import Error from '@/pages/web/Error'
import Home from './pages/web/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
              <Routes>
                <Route element= {<Weblayout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Register' element={<Register/>}/>
                  <Route path='*' element={<Error/>}/>
                </Route>
              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
