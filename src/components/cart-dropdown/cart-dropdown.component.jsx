import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart-dropdown.style.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {
  // let history = useHistory()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
          )) :
          <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems,
  total: selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
