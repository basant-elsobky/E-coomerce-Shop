import React from 'react'
import './section10.css'
import albiba from '../../images/alibaba.png'
import levis from '../../images/levis.png'
import loto from '../../images/lotto.png'
import samsu from '../../images/samsung.png'
import raymond from '../../images/raymond.png'
const Section10 = () => {
  return (
    <>
   <div className='container'>
    <div><h2 className='text-capitalize'>featured brands</h2></div>
   <div className='row logos'>
   <div className='col-md-2 col-sm-6'>
    <img src={albiba}/>
   </div>
   <div className='col-md-2 col-sm-6'>
    <img src={levis}/>
   </div>
   <div className='col-md-2 col-sm-6'>
    <img src={loto}/>
   </div>
   <div className='col-md-2 col-sm-6'>
    <img src={samsu}/>
   </div>
   <div className='col-md-2 col-sm-6'>
    <img src={raymond}/>
   </div>
   </div>
   
   </div>   
    </>
  )
}

export default Section10
