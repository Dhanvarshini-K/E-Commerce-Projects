import "../Header/Header.scss";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../../CommonFunctionality/Context/ShopContext";
import { useAuth } from "../../../utils/AuthContext";
import { storage } from "../../../appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";




const Header = () => {
  const { productId } = useParams();
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();
  const { getTotalCartItems, addToWishList, wishListItems, getTotalWishList } =
    useContext(ShopContext);
  const { logoutUser } = useAuth();
  const bucketId = "projectImages";

  return (
    <>
      <section className="header_container container-fluid py-1 d-flex justify-content-between bg-body-tertiary">
        <div className="container d-flex gap-2 justify-content-center align-items-baseline">
          <div>
            <img
              src={`${storage.getFilePreview(bucketId, "TicketPercent")}`}
              alt="ticket_percent"
              className="img-fluid"
            />
            <span className="advertisement fw-bold fs-md-5 fs-lg-5 fs-xl-5 ps-1">
              30% off storewide-Limited time!{" "}
            </span>
       
          </div>
          <div className="d-none d-sm-block border-bottom border-primary fw-bold">
            <a href="#" className="text-decoration-none">
              Shop Now{" "}
            </a>
            <FontAwesomeIcon icon={faArrowRight} className="arrow_right" />
          </div>
        </div>
        <div className="close_button">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </section>

      <nav className="navbar navbar-expand-md sticky-top bg-white">
        <div className="container">
          <div>
            <button
              className="navbar-toggler border-0  shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img
              src={`${storage.getFilePreview(bucketId, "Logo")}`}
              alt="Logo"
            />
          </div>
          <div className="d-flex gap-3 order-md-3">
            {openSearch && (
              <input
                type="search"
                className="rounded border-1 ps-2 border-secondary"
                placeholder="Search"
              />
            )}

            <button
              onClick={() => setOpenSearch(!openSearch)}
              className="border-0 bg-transparent d-none d-md-block img-fluid"
              id="sub_header_icons"
            >
              <img
                src={`${storage.getFilePreview(bucketId, "Search")}`}
                alt="Search"
                className="img-fluid"
              />
            </button>
            <button
              className="border-0 bg-transparent d-none d-md-block img-fluid"
              id="sub_header_icons"
            >
              <Link to="/user/account">
                <img
                  src={`${storage.getFilePreview(bucketId, "User")}`}
                  alt="user"
                  className="img-fluid"
                />
              </Link>
            </button>
            <button className="border-0 bg-transparent">
              <Link
                to="/cart/shoppingcart"
                className="d-flex text-decoration-none"
              >
                <img
                  src={`${storage.getFilePreview(
                    bucketId,
                    "65b894722cec8f83ec46"
                  )}`}
                  alt="CartShopping"
                  className="img-fluid"
                />
                <div className="cart_count bg-dark rounded-circle text-white fw-medium  text-center d-flex justify-content-center align-items-center">
                  {getTotalCartItems()}
                </div>
              </Link>
            </button>
          </div>

          <div
            className="hamburger_container offcanvas offcanvas-start w-auto bg-body-tertiary"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div>
              <div className="offcanvas-header">
                <div className="d-flex flex-column gap-1 justify-content-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      <img
                        className="navbar-brand"
                        src={`${storage.getFilePreview(bucketId, "Logo")}`}
                        alt="Logo"
                      />
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <button className="border-0 bg-body-tertiary">
                      <input
                        type="search"
                        className="form-control shadow-none pl-3"
                        placeholder="Search"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-1 justify-content-center">
                <div className="offcanvas-body d-flex justify-content-sm-start justify-content-md-center">
                  <ul className="navbar-nav justify-content-start flex-grow-3 fs-6 fw-medium position-sticky">
                    <li className="nav-item">
                      <Link
                        to="/home"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/home" ? "active" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/shop"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/shop" ? "active" : ""
                        }`}
                      >
                        Shop
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/blog"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/blog" ? "active" : ""
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                    <li className="nav-item">
                      <Link
                        to="/contact"
                        aria-current="page"
                        className={`nav-link ${
                          location.pathname === "/contact" ? "active" : ""
                        }`}
                      >
                        Contact us
                      </Link>
                    </li>
                    <div className="vertical_line d-md-none d-sm-block border-1 border-bottom"></div>
                  </ul>
                </div>
                <div className="d-md-none d-sm-block ">
                  <div className="cart container d-flex justify-content-between align-items-start border-bottom pb-1 pt-1">
                    <Link
                      to="/cart/shoppingcart"
                      className="h6 text-decoration-none"
                    >
                      Cart
                    </Link>
                    <button className="border-0 bg-transparent">
                      <Link
                        to="/cart/shoppingcart"
                        className="d-flex text-decoration-none"
                      >
                        <img
                          src={`${storage.getFilePreview(
                            bucketId,
                            "65b894722cec8f83ec46"
                          )}`}
                          alt="CartShopping"
                          className="img-fluid"
                        />
                        <div className="cart_count bg-dark rounded-circle text-white fw-medium  text-center d-flex justify-content-center align-items-center">
                          {getTotalCartItems()}
                        </div>
                      </Link>
                    </button>
                  </div>
                  <div className="wishlist container d-flex justify-content-between align-items-start border-bottom pb-1 pt-1">
                    <Link
                      to="/user/wishlist"
                      className="h6 text-decoration-none"
                    >
                      wishlist
                    </Link>
                    <button className="border-0 bg-transparent">
                      <Link
                        to="/user/wishlist"
                        className="d-flex text-decoration-none"
                      >
                        <img
                          src={`${storage.getFilePreview(bucketId, "Heart")}`}
                          alt="account_icon"
                          id="sub_header_icons"
                          className="img-fluid"
                        />
                        <div className="cart_count bg-dark rounded-circle text-white fw-medium  text-center d-flex justify-content-center align-items-center">
                          {getTotalWishList()}
                        </div>
                      </Link>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="ham_button btn  btn-dark my-1 mx-3"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </div>
                <div className=" d-md-none d-sm-block ps-2 d-flex gap-4">
                  <img
                    src={`${storage.getFilePreview(bucketId, "Instagram")}`}
                    alt="instagram_icon"
                  />
                  <img
                    src={`${storage.getFilePreview(bucketId, "FaceBook")}`}
                    alt="facebook-icon"
                  />
                  <img
                    src={`${storage.getFilePreview(bucketId, "YouTube")}`}
                    alt="youtube_icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
