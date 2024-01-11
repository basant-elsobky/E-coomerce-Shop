import React, { useRef, useState } from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { useClothesContext } from '../CONTEXT/Globalcontext';
import * as actions from '../CONTEXT/Actiontypes';


const Cards = (props) => {
  const heart =useRef ()
  function redheart () {
    heart.current.classList.add('red')
  }
  const clothecontext = useClothesContext();
  const [isAddedToCart, setAddedToCart] = useState(false);
  const AddToCart = ({products}) => {
    setAddedToCart(true);
    clothecontext.clothesdispatch({
      type: actions.ADD_CLOTHE_TO_CART,
      payload: products
    });
  };

 
  return (
    <>
      <div className="carddeals text-center" >
      <div className='clothes'>
  <img src={props.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-title text-capitalize text-secondary">{props.title}</p>
    <h4 className="card-text">{props.price}</h4>
    <div className='flex flex-row stars'>
    <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
    <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
    <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
    <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
    </div>
   
    {isAddedToCart ? (
              <button  className="btn btn-danger mt-auto">
                Remove
              </button>
            ) : (
              <button onClick={AddToCart} className="addbtn mt-auto">
                Add to cart
              </button>
            )}  
  <div className='heart d-flex flex-column'>
  <FontAwesomeIcon  ref={heart}  icon={faHeart} onClick={redheart}/>
  <FontAwesomeIcon icon={faEye} />


  </div>
  </div>
</div></div>
    </>
  )
}

export default Cards
