import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import CustomButton from "../custom-buttons/custom-buttons";
import CartItem from "../cart-item/cart-item";
import {createStructuredSelector} from 'reselect'

import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.scss";
import {toggleCartHidden} from '../../redux/cart/cart.action'


const CartDropdown = ({ cartItems,history,dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
{/* Conditionally rendering if cart has no items then an empty message */}
{
  cartItems.length ? 
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      :
     ( <span className='empty-message'>Your cart is Empty</span>)
}
    </div>
   {
     cartItems.length ? 
     <CustomButton onClick={()=> {
       dispatch(toggleCartHidden());
       history.push('/checkout');
       }}>GO CHECKOUT</CustomButton>
     : (
      ''
     )
   }
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
//doing this will give history props to the components that comes out form connect!! hence enabling the history prop to CartDropDown component
