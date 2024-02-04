
import { Link } from "react-router-dom";
import "./CartHeader.scss";
const CartHeader = ({ currentpage }) => {
  return (
    <section className="cart_header_main d-flex flex-column gap-3">
      <span className="h1 fw-bold text-center">Cart</span>
      <div className="cart_header d-flex justify-content-md-center gap-5 pb-3">
        <div className="d-flex gap-2 align-items-center ps-3 pb-2" >
          {/* <img src={cart_one_dark} alt="cart_one_dark" className="cart_image" /> */}
          {currentpage === "shoppingcart" ? (
            <span className="text-decoration-none cart_nav_link h5">
              Shopping Cart
            </span>
          ) : (
            <a
              href="#"
              className="h5 cart_nav_link text-decoration-none"
            >
              Shopping cart
            </a>
          )}
        </div>
        <div className="d-flex gap-2 align-items-center">
          {/* <img
            src={cart_two_light}
            alt="cart_two_light"
            className="cart_image"
          /> */}
          {currentpage === "checkout" ? (
            <span className="text-decoration-none text-dark h5 cart_nav_link">
              Check Out
            </span>
          ) : (
            <Link
              to="#"
              className="text-decoration-none text-dark h5 cart_nav_link"
            >
              Check Out
            </Link>
          )}
        </div>
        <div className="d-flex gap-2 align-items-center">
          {/* <img
            src={cart_three_light}
            alt="cart_three_light"
            className="cart_image"
          /> */}
          {currentpage === "ordercomplete" ? (
            <span className="text-decoration-none text-dark h5 cart_nav_link">
              Order Complete
            </span>
          ) : (
            <Link
              to="#"
              className="text-decoration-none text-dark h5 cart_nav_link"
            >
              Order complete
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartHeader;
