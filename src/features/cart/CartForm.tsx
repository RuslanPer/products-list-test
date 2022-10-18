import React from 'react'
import { Form, Input, Button, Card } from 'antd'

type PropsType = {
	disabled: boolean
}

export const CartForm: React.FC<PropsType> = ({ disabled }) => {
	return (
		<Card>
			<Form disabled={disabled}>
				<Form.Item>
					<Input placeholder='Your name' />
				</Form.Item>
				<Form.Item>
					<Input placeholder='Your surname' />
				</Form.Item>
				<Form.Item>
					<Input placeholder='Your address' />
				</Form.Item>
				<Form.Item>
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
