import React from 'react'
import card from './Card'
import { ICard, ICards } from "../modals/FormModal"
import Card from './Card'
import Enrollment from '../pages/Enrollment'

const Cards: React.FC<ICards> = ({ cards }) => {
    return (
        <>
            {/* <div className="row" style={{ width: "100%"}}> */}
            <div className="row no-scroll" style={{ width: "100%", height:'50px' }}>
                {
                    cards && cards.map((card) => (
                        <div className="col-3">
                            <Card image={card.image}
                             title={card.title} 
                             fees={card.fees}
                              duration={card.duration}
                              btn={<Enrollment title={card.title} image={card.image} fees={card.fees} duration={card.duration} btn={card.btn}/>}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cards