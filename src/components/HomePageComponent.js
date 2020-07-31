import React,{useContext,useEffect} from 'react';
import ProductContext from '../context/ProductContext';
import axios from 'axios';
import {commerce,random} from 'faker'
import ProductComponent from './ProductComponent'
import {ADD_PRODUCTS} from '../context/action.types'
import CartPageComponet from './CartPageComponet'

const HomePageComponent = () =>{

    const {dispatch} = useContext(ProductContext);

    const getAllProducts = async ()=> {
        axios.get('https://api.pexels.com/v1/search?query=nature&per_page=9&page=1',{
            headers: {
                authorization: // Enter Authorization code
            }
        }).then(({data}) =>{
            const allItems = data.photos.map( item => ({
                photoUrl : item.src.landscape,
                icon : item.src.tiny,
                productName : commerce.productName(),
                price : commerce.price(),
                id : random.uuid()  ,
                
            }));

            allItems.map( item => (
                dispatch({
                    type : ADD_PRODUCTS,
                    payload : item
                })
            ))                
         })
    }

    useEffect( () => {
            getAllProducts();
    },[])


    return (
        <div className='row justify-content-center' >
            <div className='col-md-8'>               
                <ProductComponent/>
            </div>
            <div className='col-md-4'>
                <CartPageComponet/>
            </div>
        </div>
    )
}
export default HomePageComponent;