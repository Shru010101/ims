import React from 'react'


export interface IButton{
    type:"button"|"submit"|"reset";
    onClick:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    classNames?: string
    text:string
}
const Button:React.FC<IButton>= ({type, onClick, classNames,text}) => {
  return (
   <button type={type} onClick={onClick} className={classNames}>
    {text}
   </button>
  );
};

export default Button