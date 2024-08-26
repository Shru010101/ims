
// import React from 'react'

// const Modal: React.FC= () => {
//   return (
//     <>
//     <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" >
//   <div className="modal-dialog modal-dialog-centered">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalToggleLabel">Enrollment Form</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         Show a second modal and hide this one with the button below.
//       </div>
//       <div className="modal-footer">
//         <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" >
//   <div className="modal-dialog modal-dialog-centered">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         Hide this modal and show the first with the button below.
//       </div>
//       <div className="modal-footer">
//         <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
//       </div>
//     </div>
//   </div>
// </div>
// <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Submit</a>
  
  
// </>
//   )
// }

// export default Modal;

// import React from 'react'
// import TextInput from '../component/TextInput';
// import { IButton, ITextInput } from '../modals/FormModal';
// import { Form } from 'react-router-dom';
// import Label from '../component/Label';
// export interface IModal{
//   button:IButton,
//   heading:string,
//   TextInput:ITextInput

// }

// const Modal:React.FC<IModal> = ({button, heading, TextInput }) => {
//   return (
//     <>
//     <Form>
//       <h2>{heading}</h2>
      
//         <Label text={TextInput.label}/>
//         <TextInput type={TextInput.type}
//         value={TextInput.value}
//         name={TextInput.name}
//         className=''
//         placeholder=''
//         />
      
//     </Form>
//     </>
//   )
// }

// export default  Modal;

import React, { useState } from 'react';

const Modal:React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Process form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Modal;
