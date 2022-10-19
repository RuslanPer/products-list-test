import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

const itemsLS = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems') as string)
	: []

const totalPriceLS = localStorage.getItem('totalPrice')
	? JSON.parse(localStorage.getItem('totalPrice') as string)
	: 0

const initialState = {
	items: itemsLS as ItemCart[],
	totalPrice: totalPriceLS,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemCart(state, action: PayloadAction<Product>) {
			if (state.items.length === 0) {
				state.items.push({ ...action.payload, count: 1 })
				state.totalPrice = state.totalPrice + action.payload.price
			} else {
				const index = state.items.findIndex(
					item => item.id === action.payload.id
				)
				if (index > -1) {
					state.items[index].count += 1
					state.totalPrice = state.totalPrice + action.payload.price
				} else {
					state.items.push({ ...action.payload, count: 1 })
					state.totalPrice = state.totalPrice + action.payload.price
				}
			}

			localStorage.setItem(
				'cartItems',
				JSON.stringify(state.items.map(item => item))
			)
			localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
		},
		removeItemCart(state, action: PayloadAction<{ id: number }>) {
			const index = state.items.findIndex(item => item.id === action.payload.id)
			if (index > -1) {
				if (state.items[index].count > 1) {
					state.totalPrice = state.totalPrice - state.items[index].price
					state.items[index].count -= 1
				} else {
					state.totalPrice = state.totalPrice - state.items[index].price
					state.items.splice(index, 1)
				}
			}

			localStorage.setItem(
				'cartItems',
				JSON.stringify(state.items.map(item => item))
			)
			localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
		},
	},
})

export const { addItemCart, removeItemCart } = cartSlice.actions

export default cartSlice.reducer

// types
export type ItemCart = Product & {
	count: number
}
