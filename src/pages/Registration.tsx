import React, { useState } from "react";
import Form from "../component/Form";
import { IButton } from "../modals/FormModal";
import Button from "../component/Button";
import TextInput from "../component/TextInput";
//import Form from "../Form/Form";
//import { Form, Placeholder } from "react-bootstrap";


export interface IRegister {
  firstName: string,
  lastName: string
  dob: string,
  address: string,
  email: string,
  contact: string,
  qualification: string,
  passingYear: string,
  casteCategory: string,
  subCaste: string,

}

const Registartion: React.FC = () => {
  const [reg, setReg] = useState<IRegister>({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    email: '',
    contact: '',
    qualification: '',
    passingYear: '',
    casteCategory: '',
    subCaste: '',
    

  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReg({
      ...reg,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert("submit successfully..")
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // location.reload()
    window.location.reload()
  };
  return (
    <div className="container mt-2 justify-content-centre">
      <div className="row">
        <div className="card">
          <div className="col-md-12">
            <Form heading="Registration Form"
            button={{ type: "submit", onClick: handleSubmit, text: "submit" }}
            // button2={{ type: 'reset', onClick: handleReset, text: 'Reset' }}

            //     type:"reset", onClick:handleSubmit, text:"Reset"}]}
            //  IInputs={[
            textInputs={[
              {
                type: "text",
                name: "firstName",
                value: reg.firstName,
                onchange: handleInputChange,
                label: "First Name",
                placeholder: ""
              },
              {
                type: "text",
                name: "lastName",
                value: reg.lastName,
                onchange: handleInputChange,
                label: "Last Name",
                placeholder: ""
              },
              {
                type: "radio",
                name: "dob",
                value: reg.dob,
                onchange: handleInputChange,
                label: "DOB",
                placeholder: ""
              },
              {
                type: "date",
                name: "dob",
                value: reg.dob,
                onchange: handleInputChange,
                label: "DOB",
                placeholder: ""
              },
              {
                type: "email",
                name: "email",
                value: reg.email,
                onchange: handleInputChange,
                label: "Email",
                placeholder: "Enter uour Email"
              },
              {
                type: "text",
                name: "contact",
                value: reg.contact,
                onchange: handleInputChange,
                label: "Contact",
                placeholder: ""
              },
              {
                type: "text",
                name: "address",
                value: reg.address,
                onchange: handleInputChange,
                label: "Address",
                placeholder: ""
              },

              {
                type: "text",
                name: "qualification",
                value: reg.qualification,
                onchange: handleInputChange,
                label: "Qualification",
                placeholder: ""
              },
              {
                type: "number",
                name: "passingYear",
                value: reg.passingYear,
                onchange: handleInputChange,
                label: "PassingYear",
                placeholder: ""
              },
              {
                type: "text",
                name: "casteCategory",
                value: reg.casteCategory,
                onchange: handleInputChange,
                label: "CasteCategory",
                placeholder: ""
              },
              {
                type: "text",
                name: "subCaste",
                value: reg.subCaste,
                onchange: handleInputChange,
                label: "SubCaste",
                placeholder: ""
              }
            ]} placeholder={""}            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registartion;

