import React, { useContext, useEffect, useReducer, useState } from "react";
import "./ProductDisplay.scss";
import { ShopContext } from "../../../CommonFunctionality/Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { databases } from "../../../../appwriteConfig";

const ProductDisplay = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const infoClick = () => {
    setShowInfo(!showInfo);
  };
  const reviewClick = () => {
    setShowReviews(!showReviews);
  };
  const initialState = { count: 0 };

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
  const { product } = props;
  const { addToCart, addToWishList, removeFromWishList } =
    useContext(ShopContext);
  const [likeWishList, setLikeWishList] = useState(false);
  const [reviews, setReviews] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsResponse = await databases.listDocuments(
          "659681feb0c97e65e766",
          "reviews"
        );
        setReviews(reviewsResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, []);
  return (
    <section className="container product_container">
      <div className="row d-flex">
        <div className="product_images col-lg-6 col-md-5 col-sm-12 d-flex gap-3 flex-column  ">
          <div>
            <img
              src={`../../src/assets/images/Product/${product?.image}`}
              alt=""
              className="product_main_image img-fluid"
            />
          </div>
          <div className="product_side_images d-md-flex  gap-2 d-none d-md-block  gap-3 flex-sm-wrap flex-md-nowrap w-25">
            <img
              src={`../../src/assets/images/Product/${product?.image}`}
              alt=""
              className="img-fluid"
            />
            <img
              src={`../../src/assets/images/Product/${product?.image}`}
              alt=""
              className="img-fluid"
            />
            <img
              src={`../../src/assets/images/Product/${product?.image}`}
              alt=""
              className="img-fluid"
            />
            <img
              src={`../../src/assets/images/Product/${product?.image}`}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-6  col-sm-12">
          <div className="product_details card-body d-flex flex-column gap-2">
            <div className="d-flex flex-column py-3 align-items-baseline gap-3">
              <img
                src={`../../src/assets/images/Product/${product?.ProductReviews}`}
                alt="star"
              />
              <p className="fs-5 fw-medium text-dark">11 Reviews</p>
            </div>
            <span className="h2 fw-bold">{product?.ProductTitle}</span>
            <p>
              Buy one or buy a few and make every space where you sit more
              convenient. Ligt and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className="product_price d-flex gap-3 border-bottom">
              <span className="h5 fw-bold">${product?.Actualprice}</span>
              <span className="h5 text-muted fw-bold" id="actual_price">
                {product?.DiscountPrice}
              </span>
            </div>
            <p className="fw-bold">Measurements</p>
            <span className="h6">17 1/2 x 20 5/8 "</span>
            <div className="choose_color d-flex gap-3 align-items-baseline">
              <p className="fw-bold">Choose color</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <h5>Black</h5>
            <div className="product_color_variety d-flex gap-3 ">
              <img
                src={`../../src/assets/images/Product/${product?.image}`}
                alt="black_tray"
              />
              <img
                src={`../../src/assets/images/Product/${product?.image}`}
                alt="grey_tray"
              />
              <img
                src={`../../src/assets/images/Product/${product?.image}`}
                alt="red_tray"
              />
              <img
                src={`../../src/assets/images/Product/${product?.image}`}
                alt="white_tray"
              />
            </div>
            <div className="d-flex align-items-baseline justify-content-between flex-wrap flex-sm-wrap flex-md-nowrap">
              <div className="quantity_button border-1 border-dark border rounded  p-1 d-flex gap-3 ">
                <button
                  className="border-0 bg-transparent"
                  onClick={() => dispatch({ type: "increment" })}
                >
                  +
                </button>
                <span>{state.count}</span>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => dispatch({ type: "decrement" })}
                >
                  -
                </button>
              </div>
              <div className="wishlist_button">
                <button
                  className="border-0 bg-transparen btn btn-light d-flex gap-2  justify-content-center mt-3 pt-2 align-items-center"
                  onClick={() => {
                    setLikeWishList(!likeWishList);
                    !likeWishList
                      ? addToWishList(product.id)
                      : removeFromWishList(product.id);
                  }}
                >
                  <FontAwesomeIcon
                    icon={likeWishList ? solidHeart : regularHeart}
                    className={`rounded-circle p-2 ${
                      likeWishList ? "text-danger" : "text-secondary"
                    }`}
                  />
                  WishList
                </button>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-light d-flex gap-2 w-100 justify-content-center mt-3 pt-2 bg-dark "
              onClick={() => {
                addToCart(product.id);
              }}
            >
              <span className="h6 text-white">Add to Cart</span>
            </button>
            <div className="sku_and_category pt-4">
              <div className="sku d-flex justify-content-between fw-bold">
                <p>SKU</p>
                <span className="h6">1117</span>
              </div>
              <div className="category d-flex justify-content-between fw-bold">
                <p>CATEGORY</p>
                <span className="h6">Living Room, Bedroom</span>
              </div>
            </div>
            <div className="info_heading d-flex justify-content-between border-bottom">
              <span className="h5">Additional Info</span>
              <button className="bg-white border-0" onClick={infoClick}>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
            {showInfo && (
              <div>
                <p className="fw-medium fs-5">Details</p>
                <p>
                  You can use the removable tray for serving. The design makes
                  it easy to put the tray back after use since you place it
                  directly on the table frame without having to fit it into any
                  holes.
                </p>
                <div className="packaging">
                  <p className="fw-medium fs-5">Packaging</p>
                  <h6>Width: 20 " Height: 1 ½ " Length: 21 ½ "</h6>
                  <h6>Weight: 7 lb 8 oz</h6>
                  <h6>Package(s): 1</h6>
                </div>
              </div>
            )}
            <div className="questions d-flex justify-content-between border-bottom">
              <span className="h5">Questions</span>
              <button className="bg-white border-0">
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>

            <div className="reviews_list d-flex justify-content-between border-bottom">
              <span className="h5">Reviews(3)</span>
              <button className="bg-white border-0" onClick={reviewClick}>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
            {showReviews
              ? reviews.documents?.map((reviewlist: any, index: any) => {
                  return (
                    <div key={index}>
                      <div>
                        <img src={`../../src/assets/images/Product/${reviewlist?.image}`} alt="review_image" />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="h4">{reviewlist?.name}</span>
                        <img src={`../../src/assets/images/Product/${reviewlist.ratings}`} alt="star" className="star" />
                        <p>
                          {reviewlist.description}
                        </p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
