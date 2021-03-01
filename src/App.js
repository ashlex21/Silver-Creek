import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Contact from './pages/contact/contact'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
// import Footer from './components/footer/footer';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
 constructor() {
   super();
   this.state = {
     currentUser: null
   }
 }

 unsubscribeFromAuth = null;

 componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
     this.setState({ currentUser: user});

     console.log(user);
   })
 }

 componentWillUnmount() {
 this.unsubscribeFromAuth();
 }

 render(){  
   return(
    <div>
    <Header current={this.state.currentUser}/>
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

export default App;
