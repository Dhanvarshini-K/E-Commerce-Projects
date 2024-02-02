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

import { AddressActionTypes, Address, BillingAddress } from "./action";

export interface AddressState {
  address: Address | null;
  billingAddress : BillingAddress | null;
}

const addressInitialState: AddressState = {
  address: null,
  billingAddress : null,
};

const addressReducer = (
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

export default addressReducer;

//===============================================

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
