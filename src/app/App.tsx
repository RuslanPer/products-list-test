import React from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Cart } from '../features/cart/Cart'
import { ProductsList } from '../features/productsList/ProductsList'
import './App.css'
import { Button, Layout } from 'antd'
import 'antd/dist/antd.css'
import { useAppSelector } from '../hooks/redux-hooks'

const { Header, Content } = Layout

function App() {
	const cartCount = useAppSelector(state => state.cart.items.length)

	return (
		<div className='App'>
			<Layout className='layout'>
				<Header>
					<NavLink to='/cart'>
						<Button type='primary'>Cart {cartCount}</Button>
					</NavLink>
				</Header>
				<Content style={{ padding: '50px', background: '#fff' }}>
					<Routes>
						<Route path='/' element={<ProductsList />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</Content>
			</Layout>
		</div>
	)
}

export default App
