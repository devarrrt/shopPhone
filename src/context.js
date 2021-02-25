import React, { useContext, useReducer, useEffect } from 'react'
import { data } from './data'
import { reducer } from './reducer'
import axios from 'axios'



const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
}

export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)


const fetchData = async () => { 
	dispatch({ type: 'LOADING' })
	const cart = await axios.get( url ).then( res=> res.data )
	dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
}



const increase = ( id ) => {
	dispatch({ type: 'INCREASE', payload: id})
}
const decrease = ( id ) => {
	dispatch({ type: 'DECREASE', payload: id })
}
const remove = ( id ) => {
	dispatch({ type: 'REMOVE', payload: id })
}
 
const clearCart = () => {
	dispatch({ type: 'CLEAR' })
} 

useEffect(() => {
	dispatch({ type: 'GET_TOTALS' })
}, [state.cart])


useEffect( ()=>{
fetchData()
},[])





return (
	<AppContext.Provider  
	value={{ 
		 ...state,
		 increase,
		 decrease,
		 remove,
		 clearCart
		 }}>
		{ children }
	</AppContext.Provider>
	)
	}


	export const useGlobalContext = () => {
		return useContext(AppContext)
	}




