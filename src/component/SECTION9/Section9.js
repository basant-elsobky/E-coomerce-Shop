import React from 'react'
import './section9.css'
import banner from '../../images/long-banner.jpg'
const Section9 = () => {
    const style = {
        backgroundImage: `url(${banner})`
    }
    return (
        <>
          <div className='container bc'>
            <div className='blackfriday' style={style}>
<div className='gift row'>
<div className='friday '>
    <h1>Black Friday Gift!</h1>
    <p>Get 50% off your first purchase on us this Black Friday.</p>
</div>


</div>
<button className='text-capitalize'>discover now</button>
            </div>
          </div>
        </>
    )
}

export default Section9
