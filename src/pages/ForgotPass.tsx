// import React, { useState } from 'react';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
    
//     setMessage(`Password reset link sent to ${email}`);
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Send Reset Link</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;


import React from "react";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

const ForgotPass = () =>{
  const navigate=useNavigate();

const handleReset=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  e.preventDefault();

  navigate('/login');
}


return(
  <div className="container-fluid">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <h3>Forgot Password</h3>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <h6>OR</h6>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input type="text" className="form-control" />
              </div>
              <Button type='button' onClick={handleReset} text="Reset"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

);
};
export default ForgotPass;

