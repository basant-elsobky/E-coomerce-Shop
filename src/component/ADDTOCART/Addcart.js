import React, { useContext } from 'react';
import './addcart.css';
import { GlobalContext, useClothesContext } from '../CONTEXT/Globalcontext';
import { Link } from 'react-router-dom';
import Storecart from './Storecart';

const Addcart = () => {
    const Clotheecontext = useClothesContext();

    return (
        <div className='container'>
            <div className='cart'>
                <div className='header'></div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">{Clotheecontext.cart.length} items</div>
                                </div>
                            </div>
                            {Clotheecontext.cart.length > 0 ? (
                                <div className='clothe-grid'>
                                    {Clotheecontext.cart.map((movie) => (


                                        <Storecart  movie={movie}/>

                                    ))}
                                    <div className="back-to-shop">
                                        <Link to='/collection'>
                                            <span className="text-muted">Back to shop</span>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addcart;
