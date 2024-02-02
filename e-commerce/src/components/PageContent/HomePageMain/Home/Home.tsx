import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { storage } from "../../../../appwriteConfig";

const HomePageMain = () => {
  const bucketId = "projectImages";
  return (
    <>
      <figure className="homepage_background_image">
        <img
          src={`${storage.getFilePreview(bucketId, "SliderImage")}`}
          alt="slider_section"
        />
      </figure>

      <section className="container d-flex flex-row align-items-center justify-content-between flex-wrap pb-3">
        <div className="text-justify  d-flex flex-column h1">
          <span className="h1 fw-bold">Simply Unique /</span>
          <span className="h1 fw-bold">Simply Better .</span>
        </div>
        <p>
          <b>3legant</b> is a gift & decorations stored based in HCMC, vietnam.
          Est since 2019.
        </p>
      </section>

      <section className="product_container container d-flex justify-content-between gap-5 flex-wrap">
        <div className=" product_items col-md-6">
          <img
            src={`${storage.getFilePreview(bucketId, "LivingRoom")}`}
            alt="test"
            className="img-responsive img-fluid"
          />
          <div className="carousel-item active d-flex flex-column ps-5 pt-4">
            <span className="text-dark fw-bold h2">Living Room</span>
            <div className="link border-bottom border-dark d-flex gap-1 align-items-center">
              <Link
                to="/livingroom"
                className="fw-bold text-decoration-none text-dark"
              >
                Shop Now
              </Link>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </div>
        </div>

        <div className=" category_product col-md-5 d-flex gap-5 flex-column">
          <div className=" product_items col">
            <img
              src={`${storage.getFilePreview(bucketId, "BedRoom")}`}
              alt="test"
              className="img-responsive img-fluid"
            />
            <div className="carousel-item active pt-4 ps-4 ">
              <span className="text-dark fw-bold h2">BedRoom</span>
              <div className="link border-bottom border-dark  d-flex gap-1 align-items-center">
                <Link
                  to="/bedroom"
                  className="fw-bold text-decoration-none text-dark"
                >
                  Shop Now
                </Link>
              <FontAwesomeIcon icon={faArrowRight}/>

              </div>
            </div>
          </div>
          <div className=" product_items col">
            <img
              src={`${storage.getFilePreview(bucketId, "Kitchen")}`}
              alt="test"
              className="img-responsive img-fluid"
            />
            <div className="carousel-item active pt-4 ps-4">
              <span className="text-dark fw-bold h2">Kitchen</span>
              <div className="link border-bottom border-dark d-flex gap-1 align-items-center">
                <Link
                  to="/kitchen"
                  className="fw-bold text-decoration-none text-dark"
                >
                  Shop Now
                </Link>
                <FontAwesomeIcon icon={faArrowRight}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new_arrivals_container container d-flex justify-content-between    pt-4 align-items-center">
        <div className="new_arrivals d-flex flex-column">
          <span className="h3 fw-bold">New</span>
          <span className="h3 fw-bold">Arrivals</span>
        </div>
        <div className="link d-flex align-items-center border-bottom border-dark">
          <Link to="/shop" className="text-decoration-none text-dark">
            MoreProducts
          </Link>
          <FontAwesomeIcon icon={faArrowRight}/>
        </div>
      </section>
    </>
  );
};
export default HomePageMain;
