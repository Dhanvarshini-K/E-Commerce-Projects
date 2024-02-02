export const SET_PRICE_FILTER = 'SET_PRICE_FILTER';


export  const setPriceFilter = (minPrice:number, maxPrice:number) => ({
  type: SET_PRICE_FILTER,
  payload: { minPrice, maxPrice },
});

// interfaces/Address.ts
export interface Address {
  streetAddress: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
}


export const setAddress = (address: Address) => ({
  type: 'SET_ADDRESS',
  payload: address,
});

export type AddressActionTypes = ReturnType<typeof setAddress>;

