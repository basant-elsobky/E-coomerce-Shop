import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Modal} from 'react-bootstrap';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Login from '../FORM/Login';
import { Link } from 'react-router-dom';
import { useClothesContext } from '../CONTEXT/Globalcontext';


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Clotheecontext = useClothesContext();

  return (
    <>
      <div className={`navbar simple-navbar ${scrolling ? 'scrolled' : ''}  fixed-top`} style={{ backgroundColor: scrolling ? 'white' : 'transparent' }}>
        <div className="container ">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="itmes">
            <ul class=" mr-auto d-flex flex-row">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link   class="nav-link" to="/store">store</Link>
              </li>
              <li class="nav-item">
                <Link   class="nav-link" to="/mens">men</Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="#">women</Link>
              </li>
              <li class="nav-item">
                <Link   class="nav-link" to="#">kids</Link>
              </li>
            </ul>
          </div>
          <div className="user-info ">
            <span>
              <FontAwesomeIcon onClick={handleShow} className="icons" icon={faUser} />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Login />
              </Modal>
            </span>
            <span >
                <Link to='/cart'><FontAwesomeIcon className="icons" icon={faShoppingCart}/>
                <span class="badge navcart-count">{Clotheecontext.cart.length}</span>
                </Link>
            </span>
          </div>
        </div>

      </div>


    </>
  );
};

export default Navbar;
