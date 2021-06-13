import {connect} from 'react-redux'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'

import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
