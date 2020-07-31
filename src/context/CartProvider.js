import React,{useReducer} from 'react';
import CartContext from './CartContext'
import Reducer from './Reducer'

const CartProvider = (props) =>{

    const [cart,dispatch] = useReducer(Reducer,[]);

   return(
    <CartContext.Provider value={{cart,dispatch}}>
        {props.children}
    </CartContext.Provider>
   )

}
export default CartProvider;