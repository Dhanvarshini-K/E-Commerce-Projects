export const SET_PRICE_FILTER = 'SET_PRICE_FILTER';


export  const setPriceFilter = (minPrice:number, maxPrice:number) => ({
  type: SET_PRICE_FILTER,
  payload: { minPrice, maxPrice },
});

//=========================================


export interface Address {
  streetAddress: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  firstName:string;
  lastName:string;
  phoneNumber:number;
}



export const setAddress = (address: Address) => ({
  type: 'SET_ADDRESS',
  payload: address,
});

export const updateAddress = (updateAddress : Address)=>(
  {
    type:'UPDATE_ADDRESS',
    payload:updateAddress
  }
)

export type AddressActionTypes = ReturnType<typeof setAddress> | ReturnType<typeof updateAddress>;

export interface BillingAddress {
  streetAddress: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  firstName:string;
  lastName:string;
  phoneNumber:number;
}



export const setBillingAddress = (billingAddress: BillingAddress) => ({
  type: 'SET_BILLING_ADDRESS',
  payload: billingAddress,
});

export const updateBillingAddress = (updateBillingAddress : BillingAddress)=>(
  {
    type:'SET_BILLING_ADDRESS',
    payload:updateBillingAddress
  }
)

export type BillingActionTypes = ReturnType<typeof setBillingAddress> | ReturnType<typeof updateBillingAddress> 


//=========================================

export const setOrderId = (orderId: string) => {
  return {
    type: "SET_ORDER_ID",
    payload: orderId
  };
};

export const setPaymentMethod = (paymentMethod: string) => {
  return {
    type: "SET_PAYMENT_METHOD",
    payload: paymentMethod
  };
};

export const setDate = (currentDate:string)=>{
  return{
    type :"SET_CURRENT_DATE",
    payload:currentDate
  }
}



//====================================================================


export interface AccountDetails {
  displayname: string;
  email: string;
  oldpassword: string;
  newpassword: string;
  firstname:string;
  lastname:string;
}



export const setAccountData = (account: AccountDetails) => ({
  type: 'ACCOUNT_DETAILS',
  payload: account,
});


export type AccountActionTypes = ReturnType<typeof setAccountData>;


//=============================================================



export const setShippingOption = (shippingMethod: string) => {
  return {
    type: "SET_SHIPPING_METHOD",
    payload: shippingMethod
  };
};


//=====================================================================



