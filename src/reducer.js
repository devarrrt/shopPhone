export const reducer = (state, action) => {
	switch (action.type) {

		case 'INCREASE': {
			let ItemCart = state.cart.map(item => {
				if (item.id === action.payload) {
					return {
						...item,
						amount: item.amount + 1
					}
				}
				return item
			})
			return {
				...state,
				cart: ItemCart
			}
		}

		case 'DECREASE':
			let ItemCart = state.cart.map(item => {
					if (item.id === action.payload) {
						return {
							...item,
							amount: item.amount - 1
						}
					}
					return item
				})
				.filter((item) => item.amount !== 0)
			return {
				...state, cart: ItemCart
			}

			case 'REMOVE':
				return {
					...state,
					cart: state.cart.filter(item => item.id !== action.payload)
				}

				case 'CLEAR':
					return {
						...state, cart: []
					}

					case 'LOADING':
						return {
							...state,
							loading: true
						}

						case 'DISPLAY_ITEMS':
							return {
								...state,
								cart: action.payload,
									loading: false
							}

							case 'GET_TOTALS':{   
								 let { total, amount } = state.cart.reduce(
								(cartTotal, cartItem) => {
									const { price, amount } = cartItem
									const itemTotal = price * amount
					
									cartTotal.total += itemTotal
									cartTotal.amount += amount
									return cartTotal
								},
								{
									total: 0,
									amount: 0,
								}
							)
							total = parseFloat(total.toFixed(2))
					
							return { ...state, total, amount }
								}




							default:
								return state
	}
}