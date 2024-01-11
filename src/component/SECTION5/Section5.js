import React from 'react';
import './section5.css';
import one from '../../images/banner-18.jpg';
import two from '../../images/banner-19.jpg';
import three from '../../images/banner-20.jpg';

const Section5 = () => {
  const background1 = {
    backgroundImage: `url(${one})`,
  };
  const background2 = {
    backgroundImage: `url(${two})`,
  };
  const background3 = {
    backgroundImage: `url(${three})`,
  };

  return (
    <>
      <div className='container new'>
        <div className='row'>
          <div className='col-md-4 col-sm-12 ml-3 mb-3' style={background1}>
            <div className='options'>
              <p className='text-capitalize'>new arrivals</p>
              <h4 className='text-capitalize'>ski clothes sale</h4>
              <span className='text-capitalize'>up to 35% off</span> <br />
              <a className='text-uppercase'>shop now</a>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 mx-3 mb-3' style={background2}>
            <div className='optionss'>
              <p className='text-capitalize'>best seller</p>
              <h4 className='text-capitalize'>trending women sunglasses</h4>
              <a className='text-uppercase'>shop now</a>
            </div>
          </div>

          <div className='col-md-4 col-sm-12 mr-3 mb-3' style={background3}>
            <div className='options'>
              <p className='text-capitalize'>new arrivals</p>
              <h4 className='text-capitalize'>new latest bag collection</h4>
              <a className='text-uppercase'>shop now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
