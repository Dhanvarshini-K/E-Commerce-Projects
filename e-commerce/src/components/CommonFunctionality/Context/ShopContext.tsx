// import { createContext, ReactNode, useState } from "react";
// // import { productList } from "../../Functionality_Data/all_product_card";

// interface ShopContextValue {
//   productList: any[];
//   cartItems: { [itemId: number]: number };
//   wishListItems: { [itemId: number]: boolean };
//   addToCart: (itemId: number) => void;
//   removeFromCart: (itemId: number) => void;
//   addToWishList: (itemId: number) => void;
//   removeFromWishList: (itemId: number) => void;
//   getTotalCartItems: () => number;
//   getTotalCartAmount: (
//     cartItems: object,
//     productList: object,
//     shippingCost: number
//   ) => void;
//   getTotalWishList: () => number;
// couponCode: string;
// appliedCouponDiscount: number;
//   couponMessage: string;
//   applyCoupon: () => void;
// }

// export const ShopContext = createContext<ShopContextValue>({
//   productList: [],
//   cartItems: {},
//   wishListItems: {},
//   addToCart: () => {},
//   removeFromCart: () => {},
//   addToWishList: () => {},
//   removeFromWishList: () => {},
//   getTotalCartItems: () => 0,
//   getTotalWishList: () => 0,
//   getTotalCartAmount: () => {},
//   couponCode: '',
//   appliedCouponDiscount: 0,
//   couponMessage: '',
//   applyCoupon :()=>{}

// });

// const getDefaultCart = () => {
//   let cart: { [itemId: number]: number } = {};
//   for (let index = 0; index < productList.length + 1; index++) {
//     cart[index] = 0;
//   }
//   console.log(cart);

//   return cart;
// };

// const getDefaultWishlist = () => {
//   let wishlist: { [itemId: number]: boolean } = {};
//   for (let index = 0; index < productList.length + 1; index++) {
//     wishlist[index] = false;
//   }
//   return wishlist;
// };

// const ShopContextProvider = (props: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart);
//   const [wishListItems, setWishListItems] = useState(getDefaultWishlist);
// const [couponCode, setCouponCode] = useState("");
// const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);
//   const [couponMessage, setCouponMessage] = useState("");

//   const addToCart = (itemId: number) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFromCart = (itemId: number) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const addToWishList = (itemId: number) => {
//     setWishListItems((prev) => ({ ...prev, [itemId]: true }));
//   };

//   const removeFromWishList = (itemId: number) => {
//     setWishListItems((prev) => ({ ...prev, [itemId]: false }));
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const getTotalWishList = () => {
//     let totalItems = 0;
//     for (const itemId in wishListItems) {
//       if (wishListItems[itemId]) {
//         totalItems += 1;
//       }
//     }
//     return totalItems;
//   };

//   const applyCoupon = (couponCodeFromUser:string) => {
//     // Implement your coupon validation logic here
//     // Replace the following line with your actual validation logic
//     setCouponCode(couponCodeFromUser);
//     if (couponCode === "SAVE20" ) {
//       setAppliedCouponDiscount(20); // Set the discount amount
//       setCouponMessage("Coupon applied successfully!");
//       console.log(appliedCouponDiscount, couponMessage, couponCode);
//     }
//     else if (couponCode === "JenkateMW") {
//       setAppliedCouponDiscount(25); // Set the discount amount
//       setCouponMessage("Coupon applied successfully!");
//       console.log(appliedCouponDiscount, couponMessage, couponCode);
//     }
//     else if (couponCode === "BALA") {
//       setAppliedCouponDiscount(50); // Set the discount amount
//       setCouponMessage("Coupon applied successfully!");
//       console.log(appliedCouponDiscount, couponMessage, couponCode);
//     }
//     else {
//       setAppliedCouponDiscount(0); // Reset the discount if the coupon is invalid
//       setCouponMessage("Invalid coupon code");
//     }
//     // setAppliedCouponDiscount(20); // Set the discount amount
//     return appliedCouponDiscount;
//   };

//   const getTotalCartAmount = (cartItems, productList, shippingCost) => {
//     let totalAmount = 0;

//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const quantity = cartItems[itemId];
//         console.log(cartItems);

//         const itemInfo = productList.find(
//           (product) => product.id === Number(itemId)
//         );

//         if (itemInfo) {
//           totalAmount += Number(itemInfo.actual_price) * Number(quantity);
//           console.log(Number(itemInfo.actual_price));
//           console.log(Number(quantity));
//         }
//       }
//     }
//     totalAmount -= appliedCouponDiscount;
//     // if(totalAmount>100){
//     //    totalAmount -= appliedCouponDiscount;
//     // }

//     return totalAmount + shippingCost;
//   };

//   const contextValue = {
//     getTotalCartAmount,
//     productList,
//     cartItems,
//     wishListItems,
//     addToCart,
//     removeFromCart,
//     addToWishList,
//     removeFromWishList,
//     getTotalCartItems,
//     getTotalWishList,
//     applyCoupon
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

// import { createContext, ReactNode, useState } from "react";
// import { productList } from "../../Functionality_Data/AllProductCard";

// interface ShopContextValue {
//   productListLength : number,
//   producListDocuments : [],
//   productList: any[];
//   cartItems: { [itemId: number]: number };
//   wishListItems: { [itemId: number]: boolean };
//   addToCart: (itemId: number) => void;
//   removeFromCart: (itemId: number) => void;
//   addToWishList: (itemId: number) => void;
//   removeFromWishList: (itemId: number) => void;
//   getTotalCartItems: () => number;
//   getTotalCartAmount: (
//     cartItems: object,
//     productList: object,
//     shippingCost: number
//   ) => void;
//   getTotalWishList: () => number;
//   applyCoupon: () => void;
//   couponCode: string;
//   appliedCouponDiscount: number;
// }

// export const ShopContext = createContext<ShopContextValue>({
//   productListLength: 1,
//   producListDocuments:[],
//   productList: [],
//   cartItems: {},
//   wishListItems: {},
//   addToCart: () => {},
//   removeFromCart: () => {},
//   addToWishList: () => {},
//   removeFromWishList: () => {},
//   getTotalCartItems: () => 0,
//   getTotalWishList: () => 0,
//   getTotalCartAmount: () => {},
//   couponCode: "",
//   appliedCouponDiscount: 0,
//   applyCoupon: () => {},
// });

// const getDefaultCart = () => {
//   let cart: { [itemId: number]: number } = {};
//   console.log(productListLength);
//   for (let index = 0; index < 72 + 1; index++) {
//     cart[index] = 0;
//   }
//   console.log(cart);

//   return cart;
// };

// const getDefaultWishlist = () => {
//   let wishlist: { [itemId: number]: boolean } = {};
//   for (let index = 0; index < 72 + 1; index++) {
//     wishlist[index] = false;
//   }
//   return wishlist;
// };

// const ShopContextProvider = (props: { children: ReactNode }) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart);
//   const [wishListItems, setWishListItems] = useState(getDefaultWishlist);
//   const [couponCode, setCouponCode] = useState("");
//   const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);

//   const addToCart = (itemId: number) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}));
//   };

//   const removeFromCart = (itemId: number) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const addToWishList = (itemId: number) => {
//     setWishListItems((prev) => ({ ...prev, [itemId]: true }));
//   };

//   const removeFromWishList = (itemId: number) => {
//     setWishListItems((prev) => ({ ...prev, [itemId]: false }));
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const getTotalWishList = () => {
//     let totalItems = 0;
//     for (const itemId in wishListItems) {
//       if (wishListItems[itemId]) {
//         totalItems += 1;
//       }
//     }
//     return totalItems;
//   };

//   const applyCoupon = (couponCodeFromUser: string) => {
//     // Implement your coupon validation logic here
//     // Replace the following line with your actual validation logic
//     setCouponCode(couponCodeFromUser);
//     if (couponCode === "SAVE20") {
//       setAppliedCouponDiscount(20); // Set the discount amount
//       console.log(appliedCouponDiscount, couponCode);
//     } else if (couponCode === "JenkateMW") {
//       setAppliedCouponDiscount(25); // Set the discount amount
//       console.log(appliedCouponDiscount, couponCode);
//     } else if (couponCode === "BALA") {
//       setAppliedCouponDiscount(50); // Set the discount amount
//       console.log(appliedCouponDiscount, couponCode);
//     } else {
//       setAppliedCouponDiscount(0); // Reset the discount if the coupon is invalid
//     }
//     // setAppliedCouponDiscount(20); // Set the discount amount
//     return appliedCouponDiscount;
//   };

//   const getTotalCartAmount = (cartItems, productListDocuments, shippingCost) => {
//     let totalAmount = 0;

//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         const quantity = cartItems[itemId];
//         console.log(cartItems);

//         const itemInfo = productListDocuments.find(
//           (product) => product.id === Number(itemId)
//         );

//         if (itemInfo) {
//           totalAmount += Number(itemInfo.actual_price) * Number(quantity);
//           console.log(Number(quantity));
//           console.log(totalAmount);
//         }
//       }
//     }
//     if (totalAmount > 100) {
//       totalAmount -= appliedCouponDiscount;
//     }

//     return totalAmount + shippingCost;
//   };

//   const contextValue = {
//     getTotalCartAmount,
//     productListDocuments,
//     productListLength,
//     productList,
//     cartItems,
//     wishListItems,
//     addToCart,
//     removeFromCart,
//     addToWishList,
//     removeFromWishList,
//     getTotalCartItems,
//     getTotalWishList,
//     applyCoupon,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import { createContext, ReactNode, useEffect, useState } from "react";
import { databases } from "../../../appwriteConfig";

interface ShopContextValue {
  shopProduct:any;
  cartItems: { [itemId: number]: number };
  wishListItems: { [itemId: number]: boolean };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  addToWishList: (itemId: number) => void;
  removeFromWishList: (itemId: number) => void;
  getTotalCartItems: () => number;
  getTotalCartAmount: (
    cartItems: object,
    productList: object,
    shippingCost: number
  ) => void;
  getTotalWishList: () => number;
  couponCode: string;
  appliedCouponDiscount: number;
  couponMessage: string;
  applyCoupon: () => void;
}

export const ShopContext = createContext<ShopContextValue>({
  shopProduct:[],
  cartItems: {},
  wishListItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  addToWishList: () => {},
  removeFromWishList: () => {},
  getTotalCartItems: () => 0,
  getTotalWishList: () => 0,
  getTotalCartAmount: () => {},
  couponCode: "",
  appliedCouponDiscount: 0,
  couponMessage: "",
  applyCoupon: () => {},
});

const getDefaultCart = (productListLength: number) => {
  let cart: { [itemId: number]: number } = {};
  for (let index = 0; index < productListLength  + 1; index++) {
    cart[index] = 0;
  }
  console.log(cart);
  
  return cart;
};

const getDefaultWishlist = (productListLength: number) => {
  let wishlist: { [itemId: number]: boolean } = {};
  for (let index = 0; index < productListLength  + 1; index++) {
    wishlist[index] = false;
  }
  return wishlist;
};



const ShopContextProvider = (props: { children: ReactNode }) => {

  
    const [couponCode, setCouponCode] = useState("");
    const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState("");
  const [shopProduct, setShopProduct] = useState<any>({ documents: [] });
  
  const [cartItems, setCartItems] = useState<{[ItemId:number] : number}>({});
  const [wishListItems, setWishListItems] = useState<{[ItemId:number] : boolean}>({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productListResponse = await databases.listDocuments(
          "659681feb0c97e65e766",
          "homeproduct"
        );
        setShopProduct(productListResponse);
        setCartItems(getDefaultCart(productListResponse.documents?.length))
        setWishListItems(getDefaultWishlist(productListResponse.documents?.length))

      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  },[]);

  

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToWishList = (itemId: number) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishList = (itemId: number) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: false }));
  };


  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    
    return totalItem;
  };

  const getTotalWishList = () => {
    let totalItems = 0;
    for (const itemId in wishListItems) {
      if (wishListItems[itemId]) {
        totalItems += 1;
      }
    }
    return totalItems;
  };

  const applyCoupon = (couponCodeFromUser: string) => {
    setCouponCode(couponCodeFromUser);
    if (couponCode === "SAVE20") {
      setAppliedCouponDiscount(20); 
      setCouponMessage("Coupon applied successfully!");
      console.log(appliedCouponDiscount, couponMessage, couponCode);
    } else if (couponCode === "JenkateMW") {
      setAppliedCouponDiscount(25);
      setCouponMessage("Coupon applied successfully!");
      console.log(appliedCouponDiscount, couponMessage, couponCode);
    } else if (couponCode === "BALA") {
      setAppliedCouponDiscount(50); 
      setCouponMessage("Coupon applied successfully!");
      console.log(appliedCouponDiscount, couponMessage, couponCode);
    } else {
      setAppliedCouponDiscount(0); 
      setCouponMessage("Invalid coupon code");
    }
    return appliedCouponDiscount;
  };



  const getTotalCartAmount = (cartItems,shopProduct,shippingCost) => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const quantity = cartItems[itemId];
        console.log(shopProduct);
        const itemInfo = shopProduct.documents?.find(
          (product) => product.id === Number(itemId)
        );

        if (itemInfo) {
          totalAmount += Number(itemInfo.Actualprice) * Number(quantity);
          console.log(Number(itemInfo.Actualprice));
          console.log(Number(quantity));
        }
      }
    }
    totalAmount -= appliedCouponDiscount;
    // if(totalAmount>100){
    //    totalAmount -= appliedCouponDiscount;
    // }

    return totalAmount + shippingCost;
  };
  const contextValue = {
    getTotalCartAmount,
    shopProduct,
    cartItems,
    wishListItems,
    addToCart,
    removeFromCart,
    addToWishList,
    removeFromWishList,
    getTotalCartItems,
    getTotalWishList,
    applyCoupon,
  };
 
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
