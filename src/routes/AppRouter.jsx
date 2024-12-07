import React from 'react'
import { Routes, Route } from "react-router"
import Home from '../app/Home.jsx'
import Details from '../app/Details.jsx'
import Login from '../app/Login.jsx'
import Register from '../app/Register.jsx'
import Reservations from '../app/Reservations.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import AuthLayaout from '../layouts/AuthLayaout.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>  
        <Route path="/hotel/:id" element={<Details />}/>  
        <Route path="/reservations" element={<Reservations />}/>  
      </Route>


      <Route element={<AuthLayaout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default AppRouter