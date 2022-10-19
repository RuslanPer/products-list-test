import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase'

// thunk
export const fetchProducts = createAsyncThunk(
	'products/products-list',
	async (param, thunkAPI) => {
		try {
			onValue(ref(db), snapshot => {
				const data = snapshot.val()
				if (data !== null) {
					const productsArr: Product[] = Object.values(data.products)
					thunkAPI.dispatch(setProducts(productsArr))
				}
			})
		} catch (error) {
			console.log(error)
		}
	}
)

const initialState = {
	products: null as Product[] | null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<Product[]>) {
			state.products = action.payload
		},
	},
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

// types
export type Product = {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	imageURL: string
}
