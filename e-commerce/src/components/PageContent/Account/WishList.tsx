import React, { useContext } from "react";
// import { remove } from "../../../assets/resources/icons";
import "./WishList.scss";
import { ShopContext } from "../../CommonFunctionality/Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const WishList = () => {
  const { shopProduct, wishListItems, removeFromWishList, addToCart } =
    useContext(ShopContext);

  return (
    <div className="col d-flex gap-4 flex-column pt-4">
      <span className="h4 fw-bold">Your Wishlist</span>
      <table>
        <tr className="border-bottom ">
          <th className="py-3">Product</th>
          <th>Price</th>
          <th>Action</th>
        </tr>

        {shopProduct.documents?.map((wishList: any, index: any) => {
          if (wishListItems[wishList.id]) {
            return (
              <tr key={index}>
                <td className="py-3 d-flex gap-2">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => removeFromWishList(wishList.id)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <img
                    src={`../../src/assets/images/Product/${wishList?.image}`}
                    alt="wishlist_image"
                    className="wishlist_image"
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <span className="h5 fw-bold">{wishList.ProductTitle}</span>
                    <span className="h5">{wishList.color}</span>
                  </div>
                </td>
                <td className="">
                  <span className="h5 ">{wishList.Actualprice}</span>
                </td>
                <td>
                  <button
                    className="border-0 p-2 bg-dark text-white rounded"
                    onClick={() => addToCart(wishList.id)}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            );
          }
          return null;
        })}
      </table>
    </div>
  );
};

export default WishList;
