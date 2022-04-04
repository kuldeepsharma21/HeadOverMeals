import React from 'react'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import Cruisine from './Cruisine'
import Searched from './Searched'
import Login from './Login'


function Pages() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cruisine/:type' element={<Cruisine/>} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    
  )
}

export default Pages