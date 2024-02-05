import { Link } from "react-router-dom";
import "./CartHeader.scss";
import { storage } from "../../../../appwriteConfig";
const CartHeader = ({ currentpage }) => {
  const BucketId = "projectImages";
  return (
    <section className="cart_header_main d-flex flex-column gap-3">
      <span className="h1 fw-bold text-center">Cart</span>
      <div className="cart_header d-flex justify-content-md-center gap-5 pb-3">
        <div
          className={`${
            location.pathname === "/cart/checkout"
              ? "border-md-bottom border-md-success border-md-2 text-success"
              : "border-md-bottom border-md-dark border-md-2 text-dark"
          } d-flex gap-2 align-items-center ps-3 pb-2`}
        >
          {location.pathname === "/cart/checkout" ||
          location.pathname === "/cart/ordercomplete" ? (
            <>
              <img
                src={`${storage.getFilePreview(BucketId, "Success")}`}
                alt="cart_one_dark"
                className="cart_image"
              />
            </>
          ) : (
            <>
              <img
                src={`${storage.getFilePreview(BucketId, "FirstCartDark")}`}
                alt="cart_one_dark"
                className="cart_image"
              />
            </>
          )}
          {currentpage === "shoppingcart" ? (
            <span className="text-decoration-none cart_nav_link h5">
              Shopping Cart
            </span>
          ) : (
            <a href="#" className="h5 cart_nav_link text-decoration-none">
              Shopping cart
            </a>
          )}
        </div>
        <div
          className={`${
            location.pathname === "/cart/ordercomplete"
              ? "border-md-bottom border-md-success border-md-2 text-success"
              : location.pathname === "/cart/shoppingcart"
              ? ""
              : "border-md-bottom border-md-dark border-md-2 text-dark"
          }  d-flex gap-2 align-items-center ps-3 pb-2`}
        >
          {location.pathname === "/cart/ordercomplete" ? (
            <img
              src={`${storage.getFilePreview(BucketId, "Success")}`}
              alt="cart_one_dark"
              className="cart_image"
            />
          ) : location.pathname === "/cart/shoppingcart" ? (
            <img
              src={`${storage.getFilePreview(BucketId, "SecondCartLight")}`}
              alt="cart_two_light"
              className="cart_image"
            />
          ) : (
            <img
              src={`${storage.getFilePreview(BucketId, "SecondCartDark")}`}
              alt="cart_two_light"
              className="cart_image"
            />
          )}

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
        <div className="d-flex gap-2 align-items-center ps-3 pb-2">
          {location.pathname === "/cart/ordercomplete" ? (
            <img
              src={`${storage.getFilePreview(BucketId, "ThirdCartDark")}`}
              alt="cart_three_light"
              className="cart_image"
            />
          ) : (
            <img
            src={`${storage.getFilePreview(BucketId, "ThirdCartLight")}`}
            alt="cart_three_light"
            className="cart_image"
          />
          )}

          {currentpage === "ordercomplete" ? (
            <span
              className="text-decoration-none h5 cart_nav_link"
            >
              Order Complete
            </span>
          ) : (
            <Link
              to="#"
              className="text-decoration-none h5 cart_nav_link"
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
