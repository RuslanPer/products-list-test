import React from 'react'
import { Card, Col, Image } from 'antd'
import { Product } from '../productsSlice'
const { Meta } = Card

type PropsType = {
	product: Product
}

export const ProductItem: React.FC<PropsType> = ({ product }) => {
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
			</Card>
		</Col>
	)
}
