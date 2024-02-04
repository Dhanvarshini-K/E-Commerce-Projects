import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShopCategory.scss";
import { Link, useLocation } from "react-router-dom";
import {
  setPriceFilter,
} from "../../Redux/action";
import { databases, storage } from "../../../../appwriteConfig";
import Item from "../../../CommonFunctionality/ProductItems/ProductItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface RootState {
  PriceFilter: {
    minPrice: number;
    maxPrice: number;
  };
}
const ShopCategory = (props: { category: string }) => {
  const BucketId = "projectImages";
  const shopDispatch = useDispatch();

  const { minPrice, maxPrice } = useSelector(
    (state: RootState) => state.PriceFilter
  );
  console.log(minPrice);
  console.log(maxPrice);

  const handleCheckboxChange = (min: number, max: number) => {
    shopDispatch(setPriceFilter(min, max));
  };


  const shopReducer = (state: any, action: any) => {
    switch (action.type) {
      case "THREE":
        return "row row-cols-2 row-cols-md-3";
      case "FOUR":
        return "row row-cols-2 row-cols-md-4";
      case "TWO":
        return "row row-cols-2 row-cols-md-2 d-flex";
      case "ONE":
        return "row row-cols-1 row-cols-md-1";
      default:
        return state;
    }
  };
  const gridHeadingReducer = (state: boolean, action: any) => {
    switch (action.type) {
      case "Show":
        return true;
      case "Hide":
        return false;
      default:
        return state;
    }
  };

  const [showMore, setShowMore] = useState<Boolean>(false);
  const [shopView, dispatch] = useReducer(shopReducer, "row-cols-md-3");
  const [editFilter, setEditFilter] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [isActivePrice, setIsActivePrice] = useState(false);
  const [selectPrice, setSelectPrice] = useState("All price");
  const [gridHeading, dispatchGridHeading] = useReducer(
    gridHeadingReducer,
    false
  );
  const [shopProduct, setShopProduct] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchShopProduct = async () => {
      try {
        const shopResponse = await databases.listDocuments(
          "659681feb0c97e65e766",
          "homeproduct"
        );
        setShopProduct(shopResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShopProduct();
  }, []);

  const location = useLocation();
  const shoplocation = useLocation();
  const { hash, pathname, search } = shoplocation;
  const { category } = props;

  const renderProduct = shopProduct.documents.map((item: any, index: any) => {
    if (
      (!category || category === item.category) &&
      (!minPrice || item.Actualprice >= minPrice) &&
      (!maxPrice || item.Actualprice <= maxPrice)
    ) {
      return (
        <Item
          key={index}
          id={item.id}
          product_title={item.ProductTitle}
          image={`../../src/assets/images/Product/${item.image}`}
          actual_price={item.Actualprice}
          discount_price={item.DiscountPrice}
          discount_title={item.DiscountTitle}
          discount_percent={item.DiscountPercent}
          product_reviews={`../../src/assets/images/Product/${item.ProductReviews}`}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <React.Fragment>
      <div className="shop_bg_image">
        <div className="carousel-item active d-flex flex-column gap-3 ">
          <div className="shop_link d-flex justify-content-center gap-3 align-items-baseline">
            <Link to="/home" className="text-decoration-none text-dark h5 ">
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} />
            <Link
              to="/shop"
              className="text-decoration-none text-dark h5 fw-bold"
            >
              Shop
            </Link>
          </div>
          <span className="h1 fw-bold text-center">Shop Page</span>
          <span className="h4 text-center">
            Let's design the place you always imagined
          </span>
        </div>
      </div>
      <section className="px-4 py-5">
        <div className="row d-flex justify-content-center ">
          {editFilter && !gridHeading && (
            <div className="col-lg-2 col-md-3 py-2 d-flex flex-column gap-4">
              <div className="filter_container d-flex align-items-start gap-2">
                <img
                  src={`${storage.getFilePreview(BucketId, "Filter")}`}
                  alt="filter"
                />
                <button className="border-0 bg-transparent">
                  <span className="h4 fw-bold">Filter</span>
                </button>
              </div>
              <div className="d-none d-md-block d-md-flex flex-md-column gap-3">
                <span className="h4 fw-bold">CATEGORIES</span>

                <div className="categories_list navbar d-flex flex-column align-items-start fw-medium fs-5 gap-2 flex-nowrap pb-5">
                  <Link
                    className={`nav-link  ${
                      location.pathname === "/allrooms" ||
                      location.pathname === "/shop"
                        ? "active"
                        : ""
                    }`}
                    to="/allrooms"
                  >
                    All Rooms
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/livingroom" ? "active" : ""
                    }`}
                    to="/livingroom"
                  >
                    Living Room
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/bedroom" ? "active" : ""
                    }`}
                    to="/bedroom"
                  >
                    Bedroom
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/kitchen" ? "active" : ""
                    }`}
                    to="/kitchen"
                  >
                    Kitchen
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/bathroom" ? "active" : ""
                    }`}
                    to="/bathroom"
                  >
                    Bathroom
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/dinning" ? "active" : ""
                    }`}
                    to="/dinning"
                  >
                    Dinning
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/outdoor" ? "active" : ""
                    }`}
                    to="/outdoor"
                  >
                    Outdoor
                  </Link>
                </div>

                <span className="h4 fw-bold">PRICE</span>
                <div className="d-flex flex-column gap-3 ">
                  <div className="form-check-inline">
                    <label className="form-check-label fw-medium d-flex justify-content-between">
                      All Price
                      <input
                        className="form-check-input "
                        type="checkbox"
                        onChange={() => handleCheckboxChange(0, 0)}
                      />
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label fw-medium  d-flex justify-content-between">
                      $0.00 - 99.99
                      <input
                        type="checkbox"
                        className="form-check-input "
                        onChange={() => handleCheckboxChange(0, 99.99)}
                      />
                    </label>
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $100.00 - 199.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                      onChange={() => handleCheckboxChange(100, 199.99)}
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $200.00- 299.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                      onChange={() => handleCheckboxChange(200, 299.99)}
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $300.00 - 399.99
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                      onChange={() => handleCheckboxChange(300, 399.99)}
                    />
                  </div>
                  <div className="form-check-inline d-flex justify-content-between">
                    <label className="form-check-label fw-medium">
                      $400.00-$500.00
                    </label>
                    <input
                      className="form-check-input custom-control-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="option3"
                      onChange={() => handleCheckboxChange(400, 500)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-lg-10 col-md-9 d-flex flex-column gap-2 py-2 ">
            <div className="shoplist_container px-3 gap-2 flex-wrap">
              <div className="sortby_container d-flex justify-content-between flex-xs-wrap flex-md-nowrap">
                {!gridHeading && (
                  <span className="livingroom_container h2 fw-bold">
                    {pathname === "/allrooms" || pathname === "/shop"
                      ? "All Rooms"
                      : category}
                  </span>
                )}
                {gridHeading && (
                  <section className="container d-flex gap-4 flex-wrap">
                    <div className="dropdown d-flex gap-2 flex-column ">
                      <span className="h5 text-secondary fw-bold">
                        Categories
                      </span>
                      <div
                        className="dropdown-btn border border-dark rounded d-flex justify-content-between align-items-center p-1 ps-2"
                        onClick={() => setIsActive(!isActive)}
                      >
                        <span className="h5">{selectedCategory}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                      {isActive && (
                        <div className="dropdown-content border border-dark  d-flex flex-column gap-2 rounded p-2">
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/allrooms"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("All Rooms");
                              }}
                            >
                              All Rooms
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/livingroom"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("Living Room");
                              }}
                            >
                              Living Room
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/bedroom"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("Bedroom");
                              }}
                            >
                              Bedroom
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/kitchen"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("Kitchen");
                              }}
                            >
                              Kitchen
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/bathroom"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("Bathroom");
                              }}
                            >
                              Bathroom
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/dinning"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("Dinning");
                              }}
                            >
                              Dinning
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/outdoor"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActive(false);
                                setSelectedCategory("Outdoor");
                              }}
                            >
                              Outdoor
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="dropdown d-flex gap-2 flex-column ">
                      <span className="h5 text-secondary fw-bold">Price</span>
                      <div
                        className="dropdown-btn border border-dark rounded d-flex justify-content-between align-items-center p-1 ps-2"
                        onClick={() => setIsActivePrice(!isActivePrice)}
                      >
                        <span className="h5">{selectPrice}</span>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </div>
                      {isActivePrice && (
                        <div className="dropdown-content border border-dark  d-flex flex-column gap-2 rounded p-2">
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/allrooms"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActivePrice(false);
                                setSelectPrice("All Price");
                              }}
                              onChange={() => handleCheckboxChange(0, 0)}
                            >
                              All Price
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to=""
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActivePrice(false);
                                setSelectPrice("$0.00 - 99.99");
                                handleCheckboxChange(0, 99.99);
                              }}
                            >
                              $0.00 - 99.99
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/livingroom"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActivePrice(false);
                                setSelectPrice("$100.00 - 199.99");
                              }}
                              onChange={() => handleCheckboxChange(100, 199.99)}
                            >
                              $100.00 - 199.99
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/bedroom"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActivePrice(false);
                                setSelectPrice("$200.00 - 299.99");
                              }}
                              onChange={() => handleCheckboxChange(200, 299.99)}
                            >
                              $200.00- 299.99
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/kitchen"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActivePrice(false);
                                setSelectPrice("$300.00 - 399.99");
                              }}
                            >
                              <div
                                onChange={() =>
                                  handleCheckboxChange(300, 399.99)
                                }
                              >
                                {" "}
                                $300.00 - 399.99
                              </div>
                            </Link>
                          </div>
                          <div className="dropdown-item text-center h5">
                            <Link
                              to="/bathroom"
                              className="text-decoration-none  text-secondary"
                              onClick={() => {
                                setIsActivePrice(false);
                                setSelectPrice("$400.00+");
                              }}
                              onChange={() => handleCheckboxChange(400, 500)}
                            >
                              $400.00+
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}
                <div className="d-flex align-items-start gap-2">
                  <div className="sorting_container d-flex align-items-baseline gap-2">
                    <p className=" fw-bold">Sortby</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                  <div className="d-flex">
                    <button
                      onClick={() => {
                        dispatch({ type: "THREE" });
                        setEditFilter(true);
                        dispatchGridHeading({ type: "Hide" });
                      }}
                      className="border-1 d-none d-md-block"
                    >
                      <img
                        src={`${storage.getFilePreview(BucketId, "FirstGrid")}`}
                        alt="first_page_icon"
                      />

             
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "FOUR" });
                        setEditFilter(false);
                        dispatchGridHeading({ type: "Show" });
                      }}
                      className="border-1 d-none d-md-block "
                    >
                      <img
                        src={`${storage.getFilePreview(
                          BucketId,
                          "SecondGrid"
                        )}`}
                        alt="first_page_icon"
                      />

                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "TWO" });
                        setEditFilter(true);
                        dispatchGridHeading({ type: "Show" });
                      }}
                      className="border-1"
                    >
                      <img
                        src={`${storage.getFilePreview(BucketId, "ThirdGrid")}`}
                        alt="first_page_icon"
                      />
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "ONE" });
                        setEditFilter(true);
                        dispatchGridHeading({ type: "Show" });
                      }}
                      className="border-1"
                    >
                      <img
                        src={`${storage.getFilePreview(
                          BucketId,
                          "FourthGrid"
                        )}`}
                        alt="first_page_icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${shopView}`}>
              {renderProduct}
              {showMore ? renderProduct : null}
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 d-flex justify-content-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="btn shadow-none bg-white btn-rounded border-dark"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      
    </React.Fragment>
  );
};

export default ShopCategory;
