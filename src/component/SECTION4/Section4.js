
import './section4.css'

import Swiper from './Swiber'
function Section4() {
   
    return (
        <>
            <div className='container'>
                <div className='d-flex alignitems-center justify-content-between deals'>
                    <h2>Deals Of The Day</h2>
                    <a>more products</a>
                </div>
                <Swiper/>
            </div>

        </>
    )
}

export default Section4
