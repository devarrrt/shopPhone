import React from 'react'
import { CartItem } from './CartItem'
import { useGlobalContext } from '../context'




export const Cart = ( ) => {
const { cart, clearCart, total } = useGlobalContext()

	return (
		<section className='cart'>
		<header>
			<h2>your bag</h2>
		</header>
		{ cart.map( item => (
				<CartItem { ...item } key={ item.id }  />
		)) }
		<footer>
		<hr />
		<div className='cart-total'>
				<h4>
					total <span> $ { total } </span>
				</h4>
			</div>
			<button className='btn clear-btn' onClick={ clearCart }>
				clear cart
			</button>
		</footer>
		</section>
	)
}
