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

import { AddressActionTypes, Address, AccountActionTypes} from "./action";

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


//=======================================================

import { AccountDetails } from "./action";

export interface AccountState {
  account: AccountDetails | null;
}

const accountInitialState: AccountState = {
  account: null,
};

export const accountReducer = (
  state = accountInitialState,
  action: AccountActionTypes
): AccountState => {
  switch (action.type) {
    case "ACCOUNT_DETAILS":
      return {
        ...state,
        account: action.payload,
      };
   
    default:
      return state;
  }
};


//========================================================

// import { SET_SHIPPING_OPTION , optionType} from "./action";

// const shippingInitialState :optionType= {
//   shippingOption: 'Free',
// };

// export const ShippingReducer = (state = shippingInitialState, action : any):optionType => {
//   switch (action.type) {
//     case SET_SHIPPING_OPTION:
//       return {
//         ...state,
//         shippingOption: action.payload,
//       };
//     default:
//       return state;
//   }
// };


export interface shippingState {
  shippingMethod: string;

}

const shippingInitialState: shippingState = {
  shippingMethod: "Free",
};

export const shippingReducer = (
  state = shippingInitialState,
  action: { type: string; payload: any }
): shippingState => {
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











