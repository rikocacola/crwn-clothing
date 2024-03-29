import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'

import {toggleCartHidden} from '../../redux/cart/cart.action'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart-icon.style.scss'

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount : selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
