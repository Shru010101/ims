// import React from 'react'
// export interface Label{
//     text:string|undefined,
// }

// const Label:React.FC <Label>=({text}) => {
//   return (
//    <label className='left-0 text-sm'>
//     {text}
//    </label>
//   )
// }

// export default Label;



import React from 'react'
import { ILable } from '../modals/FormModal';



const Label:React.FC<ILable> = ({text}) => {
  return (
    <label
     htmlFor=""
     style={{
      fontSize:'20px',
     }}
     >
      {text}

    </label>
  )
}

export default Label;