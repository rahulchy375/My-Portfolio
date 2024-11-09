import React from 'react'
import NavSection from '../components/NavSection'
import { Outlet } from 'react-router-dom'
import FooterSection from '../components/FooterSection'

const Layout = () => {
  return (
    <>
    <NavSection/>
    <Outlet/>
    <FooterSection/>
    </>
  )
}

export default Layout