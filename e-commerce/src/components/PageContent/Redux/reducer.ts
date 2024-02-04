const initialState = {
  minPrice: 0,
  maxPrice: 0,
};

export const priceFilterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_PRICE_FILTER":
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    default:
      return state;
  }
};

//===================================================

import { AddressActionTypes, Address } from "./action";

export interface AddressState {
  address: Address | null;
}

const addressInitialState: AddressState = {
  address: null,
};

export const addressReducer = (
  state = addressInitialState,
  action: AddressActionTypes
): AddressState => {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};


//===============================================


import { BillingActionTypes, BillingAddress } from "./action";

export interface BillingState {
  billingAddress : BillingAddress | null;
}

const billingInitialState: BillingState = {
  billingAddress : null,
};

export const billingReducer = (
  state = billingInitialState,
  action: BillingActionTypes
): BillingState => {
  switch (action.type) {
    case "SET_BILLING_ADDRESS":
      return {
        ...state,
        billingAddress: action.payload,
      };
    case "UPDATE_BILLING_ADDRESS":
      return {
        ...state,
        billingAddress: action.payload,
      };
    default:
      return state;
  }
};

//===================================================

interface OrderState {
  orderId: string;
  paymentMethod: string;
  currentDate: string;
}

const orderInitialState: OrderState = {
  orderId: "",
  paymentMethod: "",
  currentDate: "",
};

export const orderReducer = (
  state = orderInitialState,
  action: { type: string; payload: any }
): OrderState => {
  switch (action.type) {
    case "SET_ORDER_ID":
      return {
        ...state,
        orderId: action.payload,
      };
    case "SET_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case "SET_CURRENT_DATE":
      return {
        ...state,
        currentDate: action.payload,
      };
    default:
      return state;
  }
};


//==========================================================

interface ImageState {
  isDarkMode: boolean;
}

const imageInitialState: ImageState = {
  isDarkMode: true,
};

export const imageReducer = (state = imageInitialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_IMAGE":
      return {
        ...state,
      isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};


//=================================================================================


import { UPDATE_DISPLAY_NAME } from "./action";

interface AccountState {
  displayName: string;
}

const displayInitialState: AccountState = {
  displayName: '',
};

export const accountReducer = (state = displayInitialState, action: any) => {
  switch (action.type) {
    case UPDATE_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.payload,
      };
    default:
      return state;
  }
};


//=====================================================


interface ShippingState {
  shippingMethod: string;
}

const shippingInitialState: ShippingState = {
  shippingMethod: "",
};

export const shippingReducer = (
  state = shippingInitialState,
  action: { type: string; payload: any }
): ShippingState => {
  switch (action.type) {

    case "SET_SHIPPING_METHOD":
      return {
        ...state,
        shippingMethod: action.payload,
      };
 
    default:
      return state;
  }
};