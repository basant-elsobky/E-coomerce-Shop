import React, { useState } from 'react';
import { useClothesContext } from '../CONTEXT/Globalcontext';
import * as actions from '../CONTEXT/Actiontypes';

const Storecard = ({ products }) => {
  const clothecontext = useClothesContext();
  const [isAddedToCart, setAddedToCart] = useState(false);

  const AddToCart = () => {
    setAddedToCart(true);
    clothecontext.clothesdispatch({
      type: actions.ADD_CLOTHE_TO_CART,
      payload: products
    });
  };

  const RemoveFromCart = () => {
    setAddedToCart(false);
    clothecontext.clothesdispatch({
      type: actions.REMOVE_CLOTHE_FROM_CART,
      payload: products.id
    });
  };

  return (
    <>
      <div className="col-md-4 mt-4 text-center">
        <div className="card h-100 pt-4 p-3 d-flex flex-column">
          <img className="card-img-top h-50 w-60" src={products.image} alt={products.description} />
          <div className="card-body">
            <h5 className="card-title">${products.price}</h5>
            <p className="card-text">{products.description}.</p>

            {isAddedToCart ? (
              <button onClick={RemoveFromCart} className="btn btn-danger mt-auto">
                Remove
              </button>
            ) : (
              <button onClick={AddToCart} className="btn btn-primary mt-auto">
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Storecard;
