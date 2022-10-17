import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: null as Product[] | null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
		},
	},
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

// types
export type Product = {
	title: string
	desription: string
	price: number
	imageURL: string
}
