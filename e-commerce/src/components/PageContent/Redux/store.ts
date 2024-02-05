
//create store-Is used to create the redux store
//combinereducer-is used to combine multiple reducers into a singe root reducer

//The combineReducers function is called with an object where each key-value pair corresponds to a slice of the application state managed by a specific reducer. In this example, the priceFilterReducer is assigned to the priceFilter slice of the state.


import { configureStore } from "@reduxjs/toolkit";
import  {  accountReducer, addressReducer, billingReducer, orderReducer, priceFilterReducer, shippingReducer } from "./reducer";
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  PriceFilter : priceFilterReducer,
  address: addressReducer,
  billingAddress :billingReducer,
  order : orderReducer,
  account:accountReducer,
  shipping :shippingReducer
});

const store = configureStore({
  reducer: rootReducer,
  
})


export default store;


