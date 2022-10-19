import { Col, Row, Typography, PageHeader } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux-hooks'
import { selectCartItems, selectTotalPrice } from '../../store/selectors'
import { CartForm } from './CartForm'
import { CartItem } from './CartItem'

const { Title } = Typography

export const Cart: React.FC = () => {
	const cartItems = useAppSelector(selectCartItems)
	const totalPrice = useAppSelector(selectTotalPrice)

	const navigate = useNavigate()

	return (
		<>
			<PageHeader
				style={{ padding: '0', marginBottom: '16px' }}
				onBack={() => navigate('/')}
				title='Main'
			/>
			<Row gutter={16}>
				<Col xs={16}>
					{cartItems.map((el, i) => (
						<CartItem key={el.id + i} item={el} />
					))}
				</Col>
				<Col xs={8}>
					<CartForm disabled={!cartItems.length} />
				</Col>
			</Row>
			{cartItems.length ? <Title level={3}>Total: {totalPrice}₽</Title> : ''}
		</>
	)
}
