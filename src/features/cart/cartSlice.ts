import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../productsList/productsSlice'

// thunk

const initialState = {
	items: [] as ItemCart[],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemCart(state, action: PayloadAction<Product>) {
			if (state.items.length === 0) {
				state.items.push({ ...action.payload, count: 0 })
			} else {
				const index = state.items.findIndex(
					item => item.id === action.payload.id
				)
				if (index > -1) {
					state.items[index].count += 1
				} else {
					state.items.push({ ...action.payload, count: 0 })
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
