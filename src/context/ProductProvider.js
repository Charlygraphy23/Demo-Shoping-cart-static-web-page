import React,{useReducer} from 'react';
import ProductContext from './ProductContext'
import Reducer from './Reducer'

const ProductProvider = (props) =>{

    const [products,dispatch] = useReducer(Reducer,[]);

   return(
    <ProductContext.Provider value={{products,dispatch}}>
        {props.children}
    </ProductContext.Provider>
   )

}
export default ProductProvider;