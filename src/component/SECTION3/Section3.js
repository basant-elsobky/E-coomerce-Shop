import React from 'react'
import './section3.css'
import cat1 from '../../images/cat-1.webp'
import cat2 from '../../images/cat-2.webp'
import cat3 from '../../images/cat-3.webp'
import cat4 from '../../images/cat-4.webp'
import cat5 from '../../images/cat-5.webp'
import cat6 from '../../images/cat-6.webp'
import Card from './Card'
const Section3 = () => {
    return (
        <>
            <div className='container cards'>
                <div className='row '>
                    <Card name='Toys' iamge={cat1} />
                    <Card name='Sports
' iamge={cat2} />
                    <Card name='gaming' iamge={cat3} />
                    <Card name='Furniture
' iamge={cat4} />
                    <Card name='fashion' iamge={cat5} />
                    <Card name='Cameras
' iamge={cat6} />

                </div></div>
        </>
    )
}

export default Section3
