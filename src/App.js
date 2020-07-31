import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HomePageComponent from './components/HomePageComponent'
import ProductProvider from './context/ProductProvider'
import CartProvider from './context/CartProvider'
import AmountProvider from './context/AmountProvider'
import {ToastContainer} from 'react-toastify'

const App=()=> {
  return (

      <ProductProvider className="App">
        <ToastContainer/>
        <CartProvider>
                  
                    <AmountProvider>
                         <HomePageComponent/>
                    </AmountProvider>
                  
        </CartProvider>         
      </ProductProvider>

  );
}

export default App;
