import React from 'react'
import './repeated.css'
import Swiper from '../SECTION4/Swiber'
const Repeatedsection = (props) => {
  return (
    <>
      <div className='container'>
                <div className='row rowss'>
                    <div className='col-md-2 col-sm-12'>
                        <div className='categories text-capitalize'>
                            <h2 >{props.title}</h2>
                            <ul>
                                <li>wireless speaker</li>
                                <li>tablet</li>
                                <li>smartphone</li>
                                <li>laptop</li>
                                <li>imac</li>
                                <li>game controller</li>
                                <li>drone</li>
                                <li>apple</li>
                            </ul>
                            <a>browse all</a>
                        </div>
                    </div>
                    <div className='col-md-10 col-sm-12'>
                        <Swiper/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Repeatedsection
