
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
      setAppliedCouponDiscount(10); 
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
