import {ADD_CART_ITEMS,ADD_PRODUCTS,REMOVE_CART_ITEMS,ADD_AMOUNT,DEDUCT_AMOUNT} from './action.types';

export default (state,action) => {

    switch (action.type) {

        case ADD_PRODUCTS : return [...state,action.payload];

        case ADD_CART_ITEMS : return[...state,action.payload];

        case REMOVE_CART_ITEMS : return state.filter(item => item.id !== action.payload);

        case ADD_AMOUNT : 
            let totalAmount=0;

             if(state == null){
                totalAmount= state = Number(action.payload);
             }
             else{
                totalAmount= state + Number(action.payload); 
                
             }
             return totalAmount;

        
         case DEDUCT_AMOUNT : return action.payload       
        
        default : return state

    }
    

}