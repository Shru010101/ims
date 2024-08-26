import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Registration from './pages/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
//import ForgotPassword from './pages/ForgotPass';
import Sidebar from './layout/SideBar';
import ForgotPass from './pages/ForgotPass';
import Layout from './layout/Layout';
import Course from './User-Management/Course/pages/Course';
import ProtectedRoute from './Authorization/ProtectedRoute';
import { UserRole } from './utilis/RolesEnum';
import Modal from './pages/Modal';
import Enrollment from './pages/Enrollment';
import EnrollmentForm from './pages/Enrollment';


function App() {
  return (
    <div className="App">
  


      <BrowserRouter>
      {/* <Navbar/> */}
     

        <Routes>
          <Route path='/login' element={<Login />} />

          <Route path='/forgot' element={<ForgotPass />} />
          <Route path='/registration' element={<Registration />} />

          <Route path='/' element={<Layout />}/>
            <Route element={
              <ProtectedRoute
              allowedRoles={[
                UserRole.ADMIN,
                UserRole.FACULTY,
                UserRole.STUDENT,
              ]}
              />
            }
           >
            <Route path='/' element={<Course/>} /> </Route>
            
            <Route element={<ProtectedRoute allowedRoles={[UserRole.ADMIN, UserRole.FACULTY, UserRole.STUDENT]}/>}>
            <Route path='/course' element={<Course/>}></Route>
            
            {/* <Route path='/modal' element={Modals/>}></Route>

            <Route path='/unauthorized' element={<Unauthorized/>}></Route> */}
           {/* <Route path='/buy now' element={<Enrollment/>}/> */}
           {/* <Route path="/enrollmentform" element={<EnrollmentForm />} /> */}
          </Route>
         

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
