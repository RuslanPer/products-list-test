import React from 'react'
import { Button, Card, Col, Image } from 'antd'
import { Product } from '../../store/productsSlice'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { addItemCart } from '../../store/cartSlice'
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
				<Meta
					style={{
						height: '100px',
					}}
					title={product.title}
					description={product.description}
				/>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: '20px',
					}}
				>
					<Meta title={product.price + '₽'} />
					<Button
						onClick={addItemCartHandler}
						type='primary'
						shape='circle'
						icon={<ShoppingCartOutlined />}
					/>
				</div>
			</Card>
		</Col>
	)
}
