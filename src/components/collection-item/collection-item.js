import React from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-buttons/custom-buttons';
import {addItem} from '../../redux/cart/cart.action'
import './collection-item.scss';
// import { addItemToCart } from '../../redux/cart/cart.utils';

const CollectionItem = ({ item,addItem}) => {
const { name,price,imageUrl } = item;

    return(
  <div className='collection-item'>

      <div className='image' 
      style={{
          backgroundImage: `url(${imageUrl})`
      }} />
      <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={()=> addItem(item)}>Add to Cart</CustomButton>

  </div>

)}

const mapDispatchToProps = dispatch => ({
    addItem: items => dispatch(addItem(items))
}); // I added a extra S in item on purpose just to check if the addItem is working or not:)

export default connect(null,mapDispatchToProps)( CollectionItem)