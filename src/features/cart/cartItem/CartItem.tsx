import React from 'react'
import { ItemCart } from '../cartSlice'
import { Card, Col, Row, Image, Typography, Button } from 'antd'

const { Title, Text } = Typography

type PropsType = {
	item: ItemCart
}

export const CartItem: React.FC<PropsType> = ({ item }) => {
	return (
		<Card style={{ marginBottom: '15px', height: '175px' }}>
			<Row gutter={16}>
				<Col span={4}>
					<Image
						style={{ objectFit: 'contain', height: '100px' }}
						alt='example'
						src={item.imageURL}
					/>
				</Col>
				<Col span={16}>
					<Title level={5}>{item.title}</Title>
					<Text type='secondary'>{item.description}</Text>
					<Title level={5}>{item.price}₽</Title>
				</Col>
				<Col
					span={4}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						columnGap: '20px',
					}}
				>
					<Button type='primary'>-</Button>
					<Title level={4} style={{ margin: '0' }}>
						{item.count}
					</Title>
					<Button type='primary'>+</Button>
				</Col>
			</Row>
		</Card>
	)
}
