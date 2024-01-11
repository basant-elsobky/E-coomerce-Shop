import './section1.css';
import one from '../../images/1.jpg'
import two from '../../images/2.jpg'
import three from '../../images/3.jpg'
import four from '../../images/4.jpg'
import { Link, NavLink } from 'react-router-dom';


const Section1 = () => {

    const item1Style = {
        backgroundImage: `url(${one})`,
    };
    const item2Style = {
        backgroundImage: `url(${two})`,
    };

    
    return (
        <div className='container section1'>
            <div className='row contentt'>
                <div className='col-md-8 col-sm-12'>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active men" style={item1Style}>
                                <h4>Lifestyle Collection</h4>
                                <h1>Men</h1>
                                <h4>Sale up to <span className='text-uppercsae'>35% off</span></h4>
                                <p>Get free shipping on orders over $99.00</p>
                             
                               <button >shopping now</button>
                              



                            </div>
                            <div className="carousel-item women" style={item2Style} >
                                <h4 className='text-capitalize'>Lifestyle Collection</h4>
                                <h1>Women</h1>
                                <h4 className='text-uppercase'>Sale up to <span className='text-uppercsae'>35% off</span></h4>
                                <p className='text-uppercase'>Get free shipping on orders over $99.00</p>

                              
                               <button >shopping now</button>
                               
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='d-flex flex-column'>
                        <div className='top'>
                            <img src={three} />
                            <div className='offer'>
                                <p className='text-uppercase'>new arrivals</p>
                                <h4 className='text-uppercase'>summer sale 20% off</h4>
                                <a className='text-capitalize'>shop now</a>
                            </div>
                        </div>
                        <div className='top'>
                            <img src={four} />
                            <div className='offer'>
                                <p className='text-uppercase'>gaming 4k</p>
                                <h4 className='text-uppercase'>desktop & laptops</h4>
                                <a className='text-capitalize'>shop now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section1;
