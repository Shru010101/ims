import React from 'react'
import { Link } from 'react-router-dom'
import { ICard } from '../modals/FormModal'
import Enroll from '../pages/Enrollment'
import Enrollment from '../pages/Enrollment'

const card: React.FC<ICard> = ({ title, image, fees, duration, btn }) => {

  return (
    <>
      <div className="card mx-2 mt-3" >
        
        <img src={image} className='card-img-top' alt="" width='50px' height='70px'/>
        <div className="card-body">
          <div className="card-title">
            
            <h5 className='card-title'>{title}</h5>
            <h5 className='card-title'>{fees}</h5>
            <h5 className='card-title'>{duration}</h5>
            <h5 className='card-title'>{btn}</h5>
            {/* <Link to="EnrollmentForm" className="btn btn-primary"> {btn}</Link> */}
            {/* <Enrollment title={''} image={''} fees={0} duration={''} btn={''}/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default card;