import { Col, Row, Typography } from 'antd'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { CartItem } from './cartItem/CartItem'

const { Title } = Typography

export const Cart: React.FC = () => {
	const dispatch = useAppDispatch()
	const cartItems = useAppSelector(state => state.cart.items)
	const totalPrice = useAppSelector(state => state.cart.totalPrice)

	return (
		<>
			<Row gutter={16}>
				<Col xs={15}>
					{cartItems.map((el, i) => (
						<CartItem key={el.id + i} item={el} />
					))}
				</Col>
				<Col>Form</Col>
			</Row>
			<Title level={3}>Total: {totalPrice}₽</Title>
		</>
	)
}
