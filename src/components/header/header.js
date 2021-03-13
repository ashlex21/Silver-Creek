import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import "./header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
    
      <Link className="option" to="/shop">
        SHOP
      </Link>
      
      <Link className="option" to="/contact">
        Contact Us
      </Link>
      

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          
          Sign In
        </Link>
      )}
     
      <CartIcon/>
      
    </div>
    
     { hidden ? null : <CartDropdown/>}
    
    
  </div>
);

// user and cart are coming from state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);


//If we had 4-5 selectors we've to just do selectThing many times and passing the state in each of them in every time So to make that DRY we use creatStructuredSelector!!
// In creatStructuredSelector instead of passing it as a function we just pass it like where the properies that we want point to a correct selector and then createStructureSelector will automatically pass the top level state that we get as our mapStateaToProps into each subsequent selector!!!