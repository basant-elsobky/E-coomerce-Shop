import React from 'react'
import './section2.css'
import { faTruckRampBox, faHandHoldingDollar, faClock, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section2 = () => {
    return (
        <>
            <div className='container'>
                <div className='cars row d-flex flex-row'>

                    <div className='col-md-3 d-flex flex-row rows'>
                        <FontAwesomeIcon className='iconss' icon={faTruckRampBox} />
                        <div><h5>Fast Delivery</h5>

                            <p>Start from $10</p></div>

                    </div>
                    <div className='col-md-3 d-flex flex-row rows'>
                        <FontAwesomeIcon className='iconss' icon={faHandHoldingDollar} />
                        <div >
                            <h5>Money Guarantee</h5>
                            <p>7 Days Back</p>
                        </div>

                    </div>
                    <div className='col-md-3 d-flex flex-row  rows'>
                        <FontAwesomeIcon className='iconss' icon={faClock} />
                        <div>
                            <h5>365 Days</h5>
                            <p>For free return</p>
                        </div>

                    </div>
                    <div className='col-md-3 d-flex flex-row rows'>
                        <FontAwesomeIcon className='iconss' icon={faCreditCard} />
                        <div> <h5>Payment</h5>
                            <p>Secure system</p></div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
