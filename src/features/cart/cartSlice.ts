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
				state.items.push({ ...action.payload, count: 0 })
				state.totalPrice = state.totalPrice + action.payload.price
			} else {
				const index = state.items.findIndex(
					item => item.id === action.payload.id
				)
				if (index > -1) {
					state.items[index].count += 1
					state.totalPrice = state.totalPrice + action.payload.price
				} else {
					state.items.push({ ...action.payload, count: 0 })
					state.totalPrice = state.totalPrice + action.payload.price
				}
			}
		},
	},
})

export const { addItemCart } = cartSlice.actions

export default cartSlice.reducer

// types
type ItemCart = Product & {
	count: number
}
