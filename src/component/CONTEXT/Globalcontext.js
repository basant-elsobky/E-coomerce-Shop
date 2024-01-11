import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { json } from 'react-router-dom';

const initialState = {
    cart: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[],
    favourite: localStorage.getItem("favourite")? JSON.parse(localStorage.getItem("favourite")):[],
};

export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
        localStorage.setItem('favourite', JSON.stringify(state.favourite))

    }, [state])

    return (
        <GlobalContext.Provider value={{ cart: state.cart, favourite: state.favourite, clothesdispatch: dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider;

export const useClothesContext = () => {
    return useContext(GlobalContext);
};
