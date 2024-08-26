import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import SideBar from './SideBar'
import Footer from '../component/Footer'
import Navbar from '../pages/Navbar'
import Course from '../User-Management/Course/pages/Course'

const Layout:React.FC = () => {
    return (
        <>
           <Navbar/>
           
            <div className="d-flex">
               <SideBar/>
              <Course/>
             
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout