import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram,faWhatsapp,faGoogle  } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.svg'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='row footercontent text-capitalize'>
                    <div className='col-md-3 col-sm-12'>
                        <div className='d-flex flex-column'>
                            <img src={logo} />
                            <p className='text-secondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et 
                                lectus vel ut sollicitudin elit at amet
                            </p>
                            
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <div className='d-flex flex-column'>
                            <h3>about us</h3>
                            <ul>
                                <li>careers</li>
                                <li>out stores</li>
                                <li>our cares</li>
                                <li>terms & conditions</li>
                                <li>privacy policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                       <div className='d-flex flex-column'>
                       <h3>customer care</h3>
                       <ul>
                        <li>help center</li>
                        <li>how to buy</li>
                        <li>track your order</li>
                        <li>corporate &bulk purchasing</li>
                        <li>return &refunds</li>
                       </ul>
                       </div>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <div className='d-flex flex-column'>
                            <h3>contact us</h3>
                            <p>70 Washington Square South, New York, NY 10012, United States</p>
                        <p>Email: uilib.help@gmail.com
</p>
                       <p>Phone: +1 1123 456 780</p> 


                        <div className='iconss d-flex flex-row'>
                        <FontAwesomeIcon icon={faFacebook} style={{padding:'10px' , color:'white' , backgroundColor:'#0C2A4D' , margin:'10px' , borderRadius:'50px' , cursor:'pointer'}}/>
                        <FontAwesomeIcon icon={faInstagram} style={{padding:'10px' , color:'white' , backgroundColor:'#0C2A4D' , margin:'10px' , borderRadius:'50px' , cursor:'pointer'}}/>
                        <FontAwesomeIcon icon={faWhatsapp} style={{padding:'10px' , color:'white' , backgroundColor:'#0C2A4D' , margin:'10px' , borderRadius:'50px' , cursor:'pointer'}}/>
                        <FontAwesomeIcon icon={faGoogle} style={{padding:'10px' , color:'white' , backgroundColor:'#0C2A4D' , margin:'10px' , borderRadius:'50px' , cursor:'pointer'}}/>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
