import "../Footer/Footer.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { storage } from "../../../appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Footer = () => {
  const location = useLocation();
  const bucketId = "projectImages";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="newsletter_container mt-3">
        <div className="newsletter_content d-flex flex-column  align-items-center py-4 px-2 justify-content-center">
          <span className="h3">Join Our Newsletter</span>
          <p className="text-center">
            Sign up for deals, new products an promotions
          </p>
          <div className="email border-0 border-bottom border-dark d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope}/>
            <input
              type="email"
              placeholder="Email Address"
              className="form-control border-0 no-outline shadow-none"
            />
            <button className="border-0">Signup</button>
          </div>
        </div>
      </div>

      <section className="footer_main container-fluid bg-dark d-flex flex-column p-5">
        <div className="d-flex  justify-content-lg-between border-bottom border-light align-items-center flex-wrap flex-sm-wrap  justify-content-center px-2 py-3 ">
          <div className="d-flex gap-4 flex-wrap flex-xs-wrap justify-content-center align-items-start">
            <img
              src={`${storage.getFilePreview(bucketId, "3legant.")}`}
              alt="footer_logo_image"
            />
            <p className="text-white">Gift & Decoration Store</p>
          </div>
          <div className="navbar text-white gap-4 fs-5 d-flex flex-wrap  flex-sm-wrap align-items-center justify-content-md-center px-5 justify-content-center pb-4">
            <Link className="nav-link " aria-current="page" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="contact_apps d-flex flex-wrap-reverse  justify-content-md-between justify-content-center pt-4 align-items-end">
          <div className="navbar text-white gap-2 fs-6 text-center d-flex align-items-start flex-wrap justify-content-center">
            <p>Copyright © 2023 3legant. All rights reserved </p>
            <a href="#" className="nav-link fw-bold">
              Privacy Policy
            </a>
            <a href="#" className="nav-link fw-bold">
              Terms of Use
            </a>
          </div>
          <div className=" navbar text-white gap-3">
            <a href="#" className="nav-link">
              <img
                src={`${storage.getFilePreview(bucketId, "instagramfooter")}`}
                alt="instagram"
                className=" img-fluid"
              />
            </a>
            <a href="#" className="nav-link">
              <img
                src={`${storage.getFilePreview(bucketId, "facebookfooter")}`}
                alt="facebook"
                className=" img-fluid"
              />
            </a>
            <a href="#" className="nav-link">
              <img
                src={`${storage.getFilePreview(bucketId, "youtubefooter")}`}
                alt="youtube"
                className=" img-fluid"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
