

import React, { useState } from 'react'
import Label from '../component/Label';
import TextInput from '../component/TextInput';
import Button from '../component/Button';
import Form from '../component/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LoginService } from '../service/LoginService';
import useAuth from '../hook/useAuth';

export interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const navigate = useNavigate()

  const { setAuth } = useAuth()

  const [info, setInfo] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });

  };

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // alert("submit successfully..")



    LoginService.userLogin(info).then((result) => {

      if (result && result.data && result.data == "INVALID EMAILID") {

        alert('Incorrect emailid')

      } else if (result && result.data && result.data.email) {

        setAuth({
          user: result.data,
          accessToken: result.data?.token,
          role: result.data.role_id
        })

        console.log(result)

        alert("submit successfully.....");

        navigate("/")

      }
    }).catch((err) => {
      console.log(err)
    })


  }
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card shadow">
            <div className="card-body">

              <div>
                <Form heading='Login'
                  button={{ type: 'submit', onClick: handleSubmit, text: 'Login' }}
                  // button2={{ type: 'reset', onClick: handleSubmit, text: 'Reset' }}
                  textInputs={[
                    {
                      type: 'email',
                      name: 'email',
                      value: info.email,
                      onchange: handleInputChange,
                      label: 'Email',
                      placeholder: ""
                    },
                    {
                      type: 'password',
                      name: 'password',
                      value: info.password,
                      onchange: handleInputChange,
                      label: 'Password',
                      placeholder: ""
                    }
                  ]} placeholder={''}
                />
                <div className=''>
                  <Link to='/forgot'>Forgot Password !</Link><br />
                  New here??<a href="/registration">Apply for new addmission</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
function setAuth(arg0: { user: any; accessToken: any; role: any; }) {
  throw new Error('Function not implemented.');
}

