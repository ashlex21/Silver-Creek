import { combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root', // it means where we wanna store 
    storage, //it means which storage object from redux-persist we wanna use
    whitelist:['cart'] // it provide us whichever reducer we wanna store in redux-persist in form of a string
    //we just need cart to get stored as user is being handled by firebase auth
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});  
export default persistReducer(persistConfig, rootReducer);//it's now a modified versioin of our rootReducer with persistance capability thanks to persistReducer function that we got from  redux-persist