import React, { useContext, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setAddress, setPaymentMethod } from "../../Redux/action";
import { ShopContext } from "../../../CommonFunctionality/Context/ShopContext";
import OrderSummary from "../OrderSummary/OrderSummary";
import { storage } from "../../../../appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./CheckOut.scss";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { shippingState } from "../../Redux/reducer";

interface RootState{
  shipping : shippingState
}
interface FormData {
  firstName: string,
  lastName: string,
  phoneNumber:string,
  email: string,
  streetAddress: string,
  city: String,
  state: string,
  country: string,
  zipCode: string,
  cardNumber: string,
  date:string,
  cvv: string,
}

const CheckOut = () => {

  const dispatch = useDispatch();  
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "paymentMethod") {
      setFormData((prevState) => ({
        ...prevState,
        paymentMethod: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAddress(formData));
    dispatch(setPaymentMethod(formData.paymentMethod));
    clearForm(e);
    showToast("Order placed successfully!");
    showToast("Please fill the required fields");
    setTimeout(() => {
      navigate("/cart/ordercomplete");
    }, 5000);
  };

  const bucketId = "projectImages";
  const { getTotalCartAmount, cartItems, shopProduct, applyCoupon, appliedCouponDiscount,couponCode } =
    useContext(ShopContext);
  const [getCoupon, setGetCoupon] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const handleApplyCoupon = () => {
    applyCoupon(getCoupon);
  };

  

  const clearForm = (e : any) => {
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      streetAddress: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      cardNumber: "",
      date: "",
      cvv: "",
    });
  };

  const showToast = (message : string) => {
    setToastMessage(message);
    toast.success(message);
  };

  const {shippingMethod} = useSelector((state :RootState) => state.shipping)
  console.log(shippingMethod);
  
  return (
    <>
      <div className="row d-flex gap-md-4 mx-3">
        <div className="col-md-5 col-lg-6 my-5 d-flex gap-3 flex-column">
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <div className="row p-3 border-1 border-secondary border rounded d-flex  gap-3">
              <span className="h5 fw-bold">Contact Information</span>
              <div className="form-row d-flex gap-2">
                <div className="form-group col-md-6 required ">
                  <label
                    htmlFor="firstName"
                    className="control-label fw-bold text-secondary"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control border-dark shadow-none"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6 required">
                  <label
                    htmlFor="lastName"
                    className="control-label  fw-bold text-secondary "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control border-dark shadow-none"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group required">
                <label
                  htmlFor="phoneNumber"
                  className=" control-label fw-bold text-secondary"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control border-dark shadow-none"
                  placeholder="Phone number"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group required">
                <label
                  htmlFor="email"
                  className=" control-label fw-bold text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border-dark shadow-none"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row p-3 border-1 border-secondary border rounded d-flex  gap-3">
              <span className="h5 fw-bold">Shipping Address</span>
              <div className="form-group required">
                <label
                  htmlFor="streetAddress"
                  className="control-label fw-bold text-secondary"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  className="form-control border-dark shadow-none"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group required">
                <label
                  htmlFor="city"
                  className="control-label fw-bold text-secondary"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control border-dark shadow-none"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group required">
                <label
                  htmlFor="state"
                  className="control-label fw-bold text-secondary"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="form-control border-dark shadow-none"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group required">
                <label
                  htmlFor="country"
                  className="control-label fw-bold text-secondary"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="form-control border-dark shadow-none"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group required">
                <label
                  htmlFor="zipCode"
                  className="control-label fw-bold text-secondary"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="form-control border-dark shadow-none"
                  placeholder="ZipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input shadow-none"
                    type="checkbox"
                  />
                  <label className="form-check-label">
                    Use a different billing address(Optional)
                  </label>
                </div>
              </div>
            </div>
            <div className="row p-3 border-1 border-secondary border rounded d-flex  gap-3">
              <span className="h5 fw-bold">Payment method</span>
              <div className="border-bottom border-1 border-secondary d-flex flex-column gap-3 pb-4">
                <button className="border border-1  border-secondary p-2 bg-transparent">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditcard"
                        onChange={handleChange}
                        required
                      />

                      <span>Pay by Card credit</span>
                    </div>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                </button>
                <button className="border border-1  border-secondary p-2 bg-transparent">
                  <div className="d-flex gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      onChange={handleChange}
                      required
                    />
                    <span>Paypal</span>
                  </div>
                </button>
              </div>
              <div className="form-group">
                <label className="fw-bold text-secondary">CARD NUMBER</label>
                <input
                  type="text"
                  className="form-control border-dark shadow-none"
                  placeholder="1234 1234 1234"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row d-flex gap-2">
                <div className="form-group col-md-6">
                  <label className="fw-bold text-secondary">
                    EXPIRATION DATE
                  </label>
                  <input
                    type="date"
                    className="form-control border-dark shadow-none"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="fw-bold text-secondary">CVV</label>
                  <input
                    type="text"
                    className="form-control border-dark shadow-none"
                    placeholder="CVV code"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="border-0 bg-dark text-white rounded p-2 h5 w-100"
            >
              Place Order
            </button>
            <ToastContainer />
          </form>
        </div>
        <div className="col order_summary col py-3 border rounded border-dark my-5 d-flex flex-column gap-2">
          <span className="h4 fw-bold"> Order Summary </span>

          <OrderSummary />

          <div className="d-flex gap-2">
            <input
              type="text"
              placeholder="Input"
              className="w-75 p-2 rounded border border-dark outline-0 shadow-none"
              onChange={(e) => setGetCoupon(e.target.value)}
            />
            <button
              className="border-0 rounded bg-dark text-white py-2 px-3"
              onClick={() => handleApplyCoupon(getCoupon)}
            >
              Apply
            </button>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2">
            <div className="d-flex gap-2 align-items-start">
              <img
                src={`${storage.getFilePreview(bucketId, "TicketPercent")}`}
                alt=""
              />
              <span className="h5 fs-5">
                {`${couponCode}`}
              </span>
            </div>
            <div>
              <span className="text-success fw-bold">{`-$ ${appliedCouponDiscount}.00`}</span>
              <button className="text-success fw-bold border-0 bg-transparent">
                [Remove]
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2">
            <span>Shipping</span>
            <span className="fw-bold">{shippingMethod}</span>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2">
            <span>Subtotal</span>
            <span className="fw-bold">
              $ {`${Math.abs(getTotalCartAmount(cartItems, shopProduct, 0))}`}
            </span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <span>Total</span>
            <span className="fw-bold">
            $ {`${Math.abs(getTotalCartAmount(cartItems, shopProduct, 0))}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
