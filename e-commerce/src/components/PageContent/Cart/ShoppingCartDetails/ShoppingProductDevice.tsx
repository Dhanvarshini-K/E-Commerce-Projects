import React, { useContext, useReducer } from "react";
import "./ShoppingProduct.scss"
import { ShopContext } from "../../../CommonFunctionality/Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ShoppingProductDevice = () => {
  const { shopProduct, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <>
      {shopProduct.documents.map((cart: any) => {
        const quantity = cartItems[cart.id];
        const initialState = { count: quantity };

        function reducer(state: any, action: any) {
          switch (action.type) {
            case "increment":
              return { count: state.count + 1 };
            case "decrement":
              return { count: state.count - 1 };
            case "reset":
              return { count: (state.count = 0) };
            default:
              return { count: state.count };
          }
        }
        const [state, dispatch] = useReducer(reducer, initialState);
        const subtotal = (cart.Actualprice * state.count).toFixed(2);

        if (quantity > 0) {
          return (
              <tr>
                <td className="d-flex pt-4 gap-2">
                  <div>
                    <img
                      src={`../../src/assets/images/Product/${cart.image}`}
                      alt="cart_image"
                      className="shopping_cart_image imd-fluid"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <span className="h5 fw-bold">{cart.ProductTitle}</span>
                    <span className="h5">{cart.color}</span>
                    <div className="quantity_button border-1 border-dark border rounded d-md-flex p-1 d-flex gap-3  ">
                    <button
                      className="border-0 bg-transparent"
                      onClick={() => dispatch({ type: "increment" })}
                    >
                      +
                    </button>
                    <span>
                      {state.count === 0
                        ? removeFromCart(cart.id)
                        : state.count}
                    </span>
                    <button
                      className="border-0 bg-transparent"
                      onClick={() => dispatch({ type: "decrement" })}
                    >
                      -
                    </button>
                  </div>
            
                  </div>
                </td>
       
                <td>
                  <span className="h5 ">${cart.Actualprice}</span>
                  <div className="d-flex gap-2 align-items-start">
                      <button
                        className="border-0 bg-transparent"
                        onClick={() => removeFromCart(cart.id)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                </td>
              </tr>
          );
        }
        return null;
      })}
    </>
  );
};

export default ShoppingProductDevice;

