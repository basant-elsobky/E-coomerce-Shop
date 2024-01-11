import React, { useContext } from 'react'
import { GlobalContext, useClothesContext } from '../CONTEXT/Globalcontext'
import * as actions from '../CONTEXT/Actiontypes';

const Storecart = ({ movie }) => {
    const { clothesdispatch } = useContext(GlobalContext)
    const clotheecontext = useClothesContext()
    return (
        <>
            <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2">
                        <img className="img-fluid" src={movie.image} /></div>
                    <div className="col">
                        <div className="row text-muted">Shirt</div>
                        <div className="row">{movie.title}</div>
                    </div>

                    <div className="col">&euro; {movie.price}<span onClick={() => clotheecontext.clothesdispatch({ type: actions.REMOVE_CLOTHE_FROM_CART, payload: movie.id })}
                        className="close" style={{cursor:'pointer'}}> &#10005;</span></div>
                </div>
            </div>




        </>
    )
}

export default Storecart
