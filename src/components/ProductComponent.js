import React,{useContext} from 'react';
import ProductContext from '../context/ProductContext';
import CartContext from '../context/CartContext';
import {ADD_CART_ITEMS,ADD_AMOUNT} from '../context/action.types';
import AmountContext from '../context/AmountContext'
import {toast} from 'react-toastify'

const ProductComponent = () =>{
    
    const {products} = useContext(ProductContext);
    const {cart,dispatch} = useContext(CartContext); 
    const {amount,amtDispt} = useContext(AmountContext)

    const handleClick=(item)=>{
        const alreayItems = cart.findIndex( (aItem) =>{
            return aItem.id === item.id;
        })

        if(alreayItems != -1){
            toast('Item is already in the cart', {
                type : 'error',
                position : 'bottom-right'
            })
        }else{
            dispatch({
                type : ADD_CART_ITEMS,
                payload : item
            })

            console.log(amount)

            amtDispt({
                type : ADD_AMOUNT,
                payload : Number(item.price),
            })

            toast('Item added succesfully', {
                type : 'success',
                position : 'bottom-right'
            })
        }
       
    }

    return (
        <div className='container text-center'>
            {console.log(amount)}
            <h1 className='display-4 p-3' style={{borderLeft: '5px solid black', marginTop : '5px'}}>All Products</h1>
            <hr className=" mb-4"/>
            <div className='row justify-content-center '>
                {products.map( item => (
                    <div className="col-lg-4" key={item.id}>
                        <div className="card cr mb-4">
                            <div className="inner">
                                 <img src={item.photoUrl} alt="" className="card-img-top"/>
                            </div>
                            <div className="card-body text-center">
                                <div className="card-title"><h6>{item.productName}</h6></div>
                                <p>Price = <strong>${item.price}</strong></p>                              
                            </div>
                            <div className="mb-4">
                                <button className="btn btn-warning  responsive-width" onClick={()=>handleClick(item)}>Add To Cart </button>
                            </div> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductComponent;