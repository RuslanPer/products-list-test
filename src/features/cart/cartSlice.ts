import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../productsList/productsSlice'

// thunk

const initialState = {
	items: [] as ItemCart[],
	totalPrice: 0,
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
		},
	},
})

export const { addItemCart, removeItemCart } = cartSlice.actions

export default cartSlice.reducer

// types
export type ItemCart = Product & {
	count: number
}
