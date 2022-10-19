import { RootState } from '.'

export const selectProducts = (state: RootState) => state.products.products
export const selectCartItems = (state: RootState) => state.cart.items
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
