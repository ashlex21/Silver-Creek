import React from "react";
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview'
import CollectionPage from '../../pages/collection/collection'

const ShopPage = ({match}) => 
(<div className="shop-page">
  <Route exact path={`${match.path}`} component={CollectionOverview}/>
  <Route path={`${match.path}/:collectionId`} component={CollectionPage}  />
</div>);
//we're using match.path bcz we want the code to know itself where we're on the route right now and match.path will tell we're now at /shop

//this makes it more flexible cuz we don't have to hard code it and hence we can use it in multiple components

// mapStateToProps = 


export default ShopPage;
