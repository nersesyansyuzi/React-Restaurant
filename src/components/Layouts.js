import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Home/Footer/Footer'
import Nav from './Home/Header/Nav'


function Layouts() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts