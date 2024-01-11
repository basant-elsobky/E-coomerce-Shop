import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <>
            <div className='col-md-2 col-sm-6 cards text-center'>
                <div class="card" >
                    <img src={props.iamge} class="card-img-top" alt="..." />
                    <div>
                        <button className='text-capitalize'>{props.name}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
