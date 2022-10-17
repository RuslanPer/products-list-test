import React, { useEffect, useState, ChangeEvent } from 'react'
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons'
import { Avatar, Card, Skeleton, Switch } from 'antd'
import { db } from '../../firebase'
import { onValue, ref, set } from 'firebase/database'

const { Meta } = Card

export const ProductsList = () => {
	const [products, setProducts] = useState<any>([])

	useEffect(() => {
		onValue(ref(db), snapshot => {
			const data = snapshot.val()
			if (data !== null) {
				Object.values(data.products.items).map(pr => {
					setProducts((oldArray: any) => [...oldArray, pr])
				})
			}
		})
	}, [])

	console.log(products)

	return (
		<div>
			{products.map((pr: any) => (
				<Card
					style={{ width: 300, marginTop: 16 }}
					loading={false}
					cover={<img alt='example' src={pr.imageURL} />}
					actions={[
						<SettingOutlined key='setting' />,
						<EditOutlined key='edit' />,
						<EllipsisOutlined key='ellipsis' />,
					]}
				>
					<Meta
						avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
						title={pr.title}
						description={pr.description}
					/>
				</Card>
			))}
		</div>
	)
}
