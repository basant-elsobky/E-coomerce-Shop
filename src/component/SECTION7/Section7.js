import React from 'react'
import './section7.css'
import one from '../../images/banner-21.jpg'
import two from '../../images/banner-22.jpg'
const Section7 = () => {
    const background1 = {
        backgroundImage: `url(${one})`
    };
    const background2 = {
        backgroundImage: `url(${two})`
    };
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12' >

                        <div className='row1' style={background1}>
                            <h4>Final Reduction</h4>
                            <h3>Sale up to 20% Off
                            </h3>
                            <div className='space'></div>
                            <p>Only From <span> $270.00</span></p> 
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12' >
                        <div className='row2' style={background2}>
                            <h4>Weekend Sale
                            </h4>
                            <h3>Fine Smart Speaker
                            </h3>
                            <div className='spacee'></div>
                            <p>Starting at <span>$185.00</span></p> 
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Section7
