import cartReducer, { addItemCart, removeItemCart } from '../cartSlice'

const initialState = { items: [], totalPrice: 0 }

describe('cartSlice', () => {
	it('should return default state when passed an empty action', () => {
		const result = cartReducer(undefined, { type: '' })
		expect(result).toEqual(initialState)
	})

	it('should add new cart item with "addItemCart" action', () => {
		const payload = {
			id: 12,
			title: 'title',
			description: 'description',
			price: 23,
			discountPercentage: 12,
			rating: 4,
			stock: 3,
			brand: 'brand',
			category: 'category',
			thumbnail: 'https://github.jpg',
			imageURL: 'https://github.jpg',
		}
		const action = { type: addItemCart.type, payload: payload }

		const result = cartReducer(initialState, action)

		expect(result.items[0].id).toBe(12)
		expect(result.items[0].imageURL).toBe('https://github.jpg')
	})

	it('should remove cart item by id with "removeItemCart" action', () => {
		const state = {
			items: [
				{
					id: 123,
					title: 'title',
					description: 'description',
					price: 222,
					discountPercentage: 11,
					rating: 1,
					stock: 33,
					brand: 'brand',
					category: 'category',
					thumbnail: 'https://github.jpg',
					imageURL: 'https://github.jpg',
					count: 1,
				},
			],
			totalPrice: 0,
		}

		const action = { type: removeItemCart.type, payload: { id: 123 } }

		const result = cartReducer(state, action)

		expect(result.items).toEqual([])
	})
})
