import {createSelector} from 'reselect'

const selectCart = state => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCart],
  cartReducer => cartReducer.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatorQuantity, cartItem)=> 
  accumulatorQuantity + cartItem.quantity, 0)
)
