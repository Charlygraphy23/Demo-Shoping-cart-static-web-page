import React,{useReducer} from 'react'
import Reducer from './Reducer'
import AmountContext from './AmountContext'


const AmountProvider = (props)=> {

    const [amount , amtDispt] = useReducer(Reducer);


    return (
        <AmountContext.Provider value={{amount,amtDispt}}>
            {props.children}
        </AmountContext.Provider>
    )
}
export default AmountProvider;