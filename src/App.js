import React from "react";
import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Contact from "./pages/contact/contact";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header";
// import Footer from './components/footer/footer';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {
 unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          } );
          
        });
        
      }else
        {setCurrentUser(userAuth);}
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        {/* <Footer/> */}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
});

// const mapDispatchToProps = dispatch => {
//   return { setCurrentUser: user => dispatch(setCurrentUser(user))}
// }

export default connect(null,mapDispatchToProps)(App);
