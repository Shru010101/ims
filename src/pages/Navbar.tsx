// import React from 'react'
// import { Link } from 'react-router-dom';
// //import {logo} from 

// const Navbar = () => {

//   return (
//     <>
    
    
//     <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
//   <div className="container-fluid">
//   <div className="container mx-12 my-3">
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-header">
    
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
//      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
    
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/home" className="nav-link active" >Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/sign out" className="nav-link">Sign Out</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/contact" className="nav-link">contact</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/AboutUs" className="nav-link">AboutUs</Link>
//         </li>
//         {/* <li className="nav-item">
//           <Link to="/Registration" className="nav-link">Registration</Link>
//         </li> */}
     
//       </ul>
//     </div>
//   </div>
//   </div>
//   </div> </div> </div>  </div>
// </nav>
//     </>
//   )
// }


// export default Navbar

import React from 'react'
import logo from "../img/WhatsApp Image 2024-04-30 at 12.46.32 PM.jpeg"

const Navbar = () => {
  return (
   <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className="container-fluid">
      <button className='navbar-toggler type=button'
      data-bs-toggler='collapse'
      data-bs-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>

      </button>
      <a className="navbbar-brand" href='#'>
        <img src={logo} height={70} alt="Your Company Logo" />
      </a>
      <span className='text-primary'><b>Scholar's Academy</b></span>
      <span className='collapse navbar-collapse' id='navbarNav'>
        <div className="image-section"></div>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <a className='nav-link text-primary' href="/login">Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-primary' href="/login">About</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-primary' href="/login">Contact</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-primary' href="/login">Sign Out</a>
          </li>
         
        </ul>
      </span>
    </div>

   </nav>
  )
}

export default Navbar 