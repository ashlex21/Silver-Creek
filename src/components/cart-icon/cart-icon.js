import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden} from '../../redux/cart/cart.action';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}> 
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
    </div>
);


// dispatches the action to the store
// dispatch is a function of the Redux store
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    //here we'll use the reduce method
    // we transferred the reduce code to a component called cart.selectors, where it'll serve the same job and hence it can't be just limited to only single component making it reusable
    itemCount: selectCartItemsCount
    //it takes the whole rducer state 

    //Now this became memoizable
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
