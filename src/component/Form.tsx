

import React, { Fragment } from "react";
import { IForm } from "../modals/FormModal";
import Button from "./Button";
import Label from "./Label";
import { IButton, ITextInput } from "../modals/FormModal";
import TextInput from "./TextInput";
import { Link } from "react-router-dom";
import Radio from "./Radio";
//import Label from "./Label";

const Form: React.FC<IForm> = ({ heading, button, textInputs}) => {
  return (
    <form action=''>
      <h2 className="text-center text-success">{heading}</h2>
      <div className="row col-md-12">
        {
          textInputs.map((textInput) => (
            <div className="col-md-6" >
              {
                textInput.type == 'radio' ? <Radio /> :
                  <Fragment>
                    <Label text={textInput.label} />
                    <TextInput
                      name={textInput.name}
                      type={textInput.type}
                      value={textInput.value}
                      label={textInput.label}
                      onChange={textInput.onchange}
                    />
                  </Fragment>
              }

            </div>
          ))
        }
      </div>
      
      <div className="row col-md-12 m-3" >
        {/* <Button classNames="btn btn-secondary col-md-3" text={button2.text} onClick={button2.onClick} type={button2.type} /> */}
        <Button classNames="btn btn-success col-md-3" text={button.text}
         onClick={button.onClick} type={button.type} />
      </div>
      {/* <br/>
    New here <a href="/registration">Apply for new addmission</a> */}
    </form>
  )
}
export default Form;