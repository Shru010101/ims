

import React from 'react'
import { Link } from 'react-router-dom'
// import "../style/App.css"
import "../styles/style.css"

const SideBar:React.FC = () => {
  return (
    <>
    <div className="navsidebar d-flex flex-column" >
        <ul className='demo list-group list-group-flush sidebar-list'>

            <li className='mt-3'>
                <Link to={'/admin'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Admin
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Courses'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Courses
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Revenue'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Revenue
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Income'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Income
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Expense'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Expense
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/User Roles'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>User Roles
                </Link>
            </li>

            

            <li className='mt-3'>
                <Link to={'/All Users'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>All Users
                </Link>
            </li>


            <li className='mt-3'>
                <Link to={'/Sallary Annexture'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Sallary Annexture
                </Link>
            </li>

           

            <li className='mt-3'>
                <Link to={'/Payroll Processing'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Payroll Processing
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Relieving Letter'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Relieving Letter
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Offer Letter'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Offer Letter
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Available Courses'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Available Courses
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Faculty'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Faculty
                </Link>
            </li>

            <li className='mt-3'>
                <Link to={'/Enrollment'} className="Link">
                    <i className='bi bi-person-fill-lock text-dark'></i>Enrollment
                </Link>
            </li>

        </ul>
    </div>
    </>
  )
}

export default SideBar