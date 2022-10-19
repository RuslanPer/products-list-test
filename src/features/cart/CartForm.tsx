import React from 'react'
import { Form, Input, Button, Card } from 'antd'
import { useAppSelector } from '../../hooks/redux-hooks'

type FormValues = {
	name: string
	surname: string
	address: string
	phone: string
}

type PropsType = {
	disabled: boolean
}

export const CartForm: React.FC<PropsType> = ({ disabled }) => {
	const cartItems = useAppSelector(state => state.cart.items)

	const onFinish = (values: FormValues) => {
		const order = {
			...values,
			products: cartItems,
		}

		alert('Your order has been placed')
		console.log(order)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Card>
			<Form
				disabled={disabled}
				name='basic'
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					name='name'
					rules={[{ required: true, message: 'Please input your name!' }]}
				>
					<Input placeholder='Your name' />
				</Form.Item>
				<Form.Item
					name='surname'
					rules={[{ required: true, message: 'Please input your surname!' }]}
				>
					<Input placeholder='Your surname' />
				</Form.Item>
				<Form.Item
					name='address'
					rules={[{ required: true, message: 'Please input your address!' }]}
				>
					<Input placeholder='Your address' />
				</Form.Item>
				<Form.Item
					name='phone'
					rules={[{ required: true, message: 'Please input your phone!' }]}
				>
					<Input type='phone' placeholder='Your phone' />
				</Form.Item>

				<Form.Item>
					<Button style={{ width: '100%' }} type='primary' htmlType='submit'>
						Order
					</Button>
				</Form.Item>
			</Form>
		</Card>
	)
}
