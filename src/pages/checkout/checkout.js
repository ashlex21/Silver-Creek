import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

import './checkout.scss'
// import CartItem from '../../components/cart-item/cart-item'

const CheckoutPage = ({cartItems,total}) => (
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
        {cartItems.map(cartItem => (<CheckOutItem key={cartItem.id} cartItem={cartItem}/>) )}

        <div className='total'>
            <span>TOTAL: ₹{total}</span>
        </div>
        {/* <div className='test-warning'>
            *Please use the following credit card number for payments*<br/><br/>
            4242 4242 4242 4242(VISA) - Exp: Any Future Date CVV: 123
        </div> */}
        <StripeCheckoutButton price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default withRouter(connect(mapStateToProps)(CheckoutPage))