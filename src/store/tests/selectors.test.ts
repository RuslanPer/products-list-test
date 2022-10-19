import { selectProducts } from '../selectors'

describe('redux selectors', () => {
	it('should select products from state object', () => {
		const products = [
			{
				id: 123,
				title: 'hello',
				description: 'description',
				price: 123,
				discountPercentage: 23,
				rating: 2,
				stock: 1,
				brand: 'brand',
				category: 'category',
				thumbnail: 'https://thumbnail.jpg',
				imageURL: 'https://image.jpg',
			},
		]

		const result = selectProducts({ products })
		expect(result).toEqual(products)
	})
})
