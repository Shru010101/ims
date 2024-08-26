
//import React from "react";
//import <ITextInput> from '../modals/FormModals'
// import Label from "./Label";
// export interface ITextInput{
//   type:string,
//   value:string,
//   name:string,
//   label:string,
//   onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void;
 
  
// }
// const TextInput:React.FC<ITextInput>=({type,value,name,onChange,label})=>{

//   return(
//     <input
//     type={type}
//     value={value}
//     onChange={onChange}
//     name={name}
//     label={label}
//     className="border-black-300 rounded w-full py-2 px-3 col-md-12"/>
//   )
// }
// export default TextInput;


import React from "react";
export interface ITextInput {
  type: string;
  value: string;
  name: string;
  label: string;
  //onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=> void
}

const TextInput: React.FC<ITextInput> = ({ type, value, name, onChange, label }) => {
  const inputId = `input-${name}`; // Create a unique ID for the input

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{label}</label> {/* Create a label element */}
      <input
        id={inputId} // Set the ID for the input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="border-black-300 rounded w-full py-2 px-3 col-md-12"
      />
    </div>
  );
};

export default TextInput;

