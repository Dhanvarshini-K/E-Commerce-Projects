// import { sofia_image } from "../../../assets/resources/images";
// import { down_arrow, profile_change, user_icon } from "../../../assets/resources/icons";
import "./AccountProfile.scss";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../utils/AuthContext";
import { useRef, useState } from "react";

interface accountProps {
  activepage: string;
}

const AccountProfile: React.FC<accountProps> = ({ activepage }) => {
  const { user, logoutUser } = useAuth();
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Account");
  console.log("activepage:", activepage);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };

  return (
    <section className="account_profile rounded d-flex align-items-center flex-column p-3 py-5 gap-4 m-2">
      <div className="profile_container d-flex flex-column align-items-center">
        {/* {image ? (
        <img src={URL.createObjectURL(image)} alt="sofia_image" className="img-fluid  rounded-circle update_image " />

        ):(
        // <img src={user_icon} alt="sofia_image" className="img-fluid update_image" />

        )} */}
        <span className="h4 fw-bold">Sofia Hervertz</span>
        <div className="edit_profile" onClick={handleImageClick}>
        {/* <img src={profile_change} alt="profile_change_icon" /> */}

       
          <input
            type="file"
            className="profile_image"
            ref={inputRef}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <div className="dropdown d-flex gap-2 flex-column d-md-none d-sm-block ">
        <div
          className="dropdown-btn border border-dark rounded d-flex justify-content-between p-1 ps-2"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="h5">{selectedCategory}</span>
          {/* <img src={down_arrow} alt="down_arrow" /> */}
        </div>
        {isActive && (
          <div className="dropdown-content border border-dark  d-flex flex-column gap-2 rounded p-2">
            <div className="dropdown-item text-center h5">
              <Link
                to="/user/account"
                className="text-decoration-none  text-secondary"
                onClick={() => {
                  setIsActive(false);
                  setSelectedCategory("Account");
                }}
              >
                Account
              </Link>
            </div>
            <div className="dropdown-item text-center h5">
              <Link
                to="/user/address"
                className="text-decoration-none  text-secondary"
                onClick={() => {
                  setIsActive(false);
                  setSelectedCategory("Address");
                }}
              >
                Address
              </Link>
            </div>
            <div className="dropdown-item text-center h5">
              <Link
                to="/user/order"
                className="text-decoration-none  text-secondary"
                onClick={() => {
                  setIsActive(false);
                  setSelectedCategory("Orders");
                }}
              >
                Orders
              </Link>
            </div>
            <div className="dropdown-item text-center h5">
              <Link
                to="/user/wishlist"
                className="text-decoration-none  text-secondary"
                onClick={() => {
                  setIsActive(false);
                  setSelectedCategory("Wishlist");
                }}
              >
                Wishlist
              </Link>
            </div>
            <div className="dropdown-item text-center h5">
              <Link
                to="/user/wishlist"
                className="text-decoration-none  text-secondary"
                onClick={() => {
                  logoutUser();
                  setIsActive(false);
                  setSelectedCategory("Logout");
                }}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className=" d-md-flex flex-column gap-3 d-none d-md-block">
        {activepage === "account" ? (
          <>
            <span
              className={`links text-secondary fw-bold fs-5  ${
                location.pathname === "/user/account" ? "active" : ""
              }`}
            >
              Account
            </span>
          </>
        ) : (
          <Link
            to="/user/account"
            className=" text-decoration-none text-secondary fw-bold fs-5 "
          >
            Account
          </Link>
        )}

        {activepage === "address" ? (
          <span
            className={`links text-secondary fw-bold fs-5  ${
              location.pathname === "/user/address" ? "active" : ""
            }`}
          >
            Address
          </span>
        ) : (
          <Link
            to="/user/address"
            className=" text-decoration-none text-secondary fw-bold fs-5"
          >
            Address
          </Link>
        )}
        {activepage === "order" ? (
          <span
            className={`links text-secondary fw-bold fs-5  ${
              location.pathname === "/user/order" ? "active" : ""
            }`}
          >
            Order
          </span>
        ) : (
          <Link
            to="/user/order"
            className=" text-decoration-none text-secondary fw-bold fs-5"
          >
            Orders
          </Link>
        )}
        {activepage === "wishlist" ? (
          <span
            className={`links text-secondary fw-bold fs-5  ${
              location.pathname === "/user/wishlist" ? "active" : ""
            }`}
          >
            Wishlist
          </span>
        ) : (
          <Link
            to="/user/wishlist"
            className=" text-decoration-none text-secondary fw-bold fs-5"
          >
            Wishlist
          </Link>
        )}

        <button
          onClick={logoutUser}
          className=" border-0 bg-transparent text-secondary fw-bold fs-5 text-start"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default AccountProfile;
