import { AddressActionTypes, Address } from "./action";

const initialState = {
    minPrice: 0,
    maxPrice: 0,
  
  };
  

  export const priceFilterReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_PRICE_FILTER':
        return { ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice };
      default:
        return state;
    }
  };



export interface AddressState {
  address: Address | null;
}

const addressInitialState: AddressState = {
  address: null,
};

const addressReducer = (state = addressInitialState, action: AddressActionTypes): AddressState => {
  switch (action.type) {
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;

