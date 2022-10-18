import React from 'react'
import { Button, Card, Col, Image } from 'antd'
import { Product } from '../productsSlice'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { addItemCart } from '../../cart/cartSlice'
const { Meta } = Card

type PropsType = {
	product: Product
}

export const ProductItem: React.FC<PropsType> = ({ product }) => {
	const dispatch = useAppDispatch()

	const addItemCartHandler = () => {
		dispatch(addItemCart(product))
	}

	return (
		<Col span={6}>
			<Card
				style={{ height: '400px' }}
				loading={false}
				cover={
					<Image
						height={200}
						style={{ objectFit: 'contain' }}
						alt='example'
						src={product.imageURL}
					/>
				}
			>
				<Meta title={product.title} description={product.description} />
				<Meta title={product.price + '₽'} />
				<Button
					onClick={addItemCartHandler}
					type='primary'
					shape='circle'
					icon={<ShoppingCartOutlined />}
				/>
			</Card>
		</Col>
	)
}
