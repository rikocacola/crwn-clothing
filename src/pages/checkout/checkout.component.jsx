import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.style.scss'

const CheckoutPage = ({cartItems,total}) => {
  return (
    <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
  )
}

const mapToStateProps = createStructuredSelector({
  cartItems : selectCartItems,
  total: selectCartTotal
})

export default connect(mapToStateProps)(CheckoutPage)
