import React,{useContext} from 'react';
import CartContext from '../context/CartContext';
import {REMOVE_CART_ITEMS,DEDUCT_AMOUNT} from '../context/action.types'
import AmountContext from '../context/AmountContext'

const CartPageComponent =()=> {

   const {cart,dispatch} = useContext(CartContext);
   const {amount,amtDispt} = useContext(AmountContext);

   const handleClick=(item)=>{

        dispatch({
            type : REMOVE_CART_ITEMS,
            payload : item.id
        })

        amtDispt({
            type : DEDUCT_AMOUNT,
            payload : amount- Number(item.price)
        })

   }

  return (
     <div className="container">
        <h1 className="display-4 p-3" style={{borderLeft: '5px solid black', marginTop : '5px'}}>Your Cart</h1>
        {cart == '' ? (
            <div>
                <hr/>
                <h6 className="pl-4"> **You donot have any item yet.</h6>
            </div>
        ) : (
            <div>
            <div className="cartItem">
                <hr/>
                {cart.map( item => (
                <div className="card_of_cart" key={item.id}>
                        <div className="d-flex justify-content-between">
                            <div className='d-flex justify-content-left'>
                                <img src={item.icon} alt="" className='mr-2' style={{width : '7rem' , borderRadius: '5px'}}/>
                                <div>
                                    <h6 className="text-primary">{item.productName}</h6>

                                    <button className="btn btn-danger" onClick={()=>handleClick(item)}>Remove</button>      
                                </div>
                            </div>
                            <div className="d-flex justify-content-right">
                                <h6 > $ {item.price}</h6>
                            </div>
                        </div>
                        <hr/>
                 </div>
            ))}

            </div>
            <div className="card">
            <div className="card-header text-success text-center"><h6>GRAND TOTAL</h6></div>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <p>Subtotal ({cart.length} items): $ {amount}.00</p>
                </div>
            </div>
        </div>
        </div>
        ) }
        
     </div>
  );
}
export default CartPageComponent;
