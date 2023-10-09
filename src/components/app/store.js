// Import createStore and combineReducers here.
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
// Import the slice reducers here.
import { inventoryReducer } from "../features/inventory/inventorySlice";
import { cartReducer } from "../features/cart/cartSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Create and export the store here.


const rootReducer = combineReducers({
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer
});
const store = configureStore({
    reducer: rootReducer,
});


export default store;