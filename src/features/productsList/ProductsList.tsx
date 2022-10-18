import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { Row, Spin } from 'antd'
import { fetchProducts } from './productsSlice'
import { ProductItem } from './productItem/ProductItem'

export const ProductsList = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(state => state.products.products)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	if (!products)
		return (
			<Spin
				size='large'
				style={{
					height: '50vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			/>
		)

	return (
		<Row gutter={[16, 16]}>
			{products.map((pr, i) => (
				<ProductItem key={pr.id + i} product={pr} />
			))}
		</Row>
	)
}
