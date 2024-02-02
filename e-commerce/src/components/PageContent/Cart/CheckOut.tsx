import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../Redux/action";
import { ShopContext } from "../../CommonFunctionality/Context/ShopContext";
import OrderSummary from "../OrderSummary/OrderSummary";
import { storage } from "../../../appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./CheckOut.scss";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAddress(formData));
  };

  const bucketId = "projectImages";
  const { getTotalCartAmount, cartItems, shopProduct, applyCoupon } =
    useContext(ShopContext);
    // const [getCoupon, setGetCoupon] = useState("");
    // const handleApplyCoupon = () => {
    //   applyCoupon(getCoupon);
    // };

  return (
    <>
      <div className="row d-flex gap-md-4 mx-3">
        <div className="col-md-5 col-lg-6 my-5 d-flex gap-3 flex-column">
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <div className="row p-3 border-1 border-secondary border rounded d-flex  gap-3">
              <span className="h5 fw-bold">Contact Information</span>
              <div className="form-row d-flex gap-2">
                <div className="form-group col-md-6 required ">
                  <label htmlFor="firstName" className="control-label fw-bold text-secondary">
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
                  <label htmlFor="lastName" className="control-label  fw-bold text-secondary ">
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
                <label htmlFor="phoneNumber" className=" control-label fw-bold text-secondary">
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
                <label htmlFor="email" className=" control-label fw-bold text-secondary">
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
                <label htmlFor="city" className="control-label fw-bold text-secondary">
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
                <label htmlFor="state" className="control-label fw-bold text-secondary">
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
                <label htmlFor="country" className="control-label fw-bold text-secondary">
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
                <label htmlFor="zipCode" className="control-label fw-bold text-secondary">
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
                      <input type="radio" name="card" required />

                      <span>Pay by Card credit</span>
                    </div>
                    <FontAwesomeIcon icon={faCreditCard}/>
                  </div>
                </button>
                <button className="border border-1  border-secondary p-2 bg-transparent">
                  <div className="d-flex gap-2">
                    <input type="radio" name="card" required />
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
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="fw-bold text-secondary">CVV</label>
                  <input
                    type="text"
                    className="form-control border-dark shadow-none"
                    placeholder="CVV code"
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
              <span className="h5 fs-5">JenkateMW</span>
            </div>
            <div>
              <span className="text-success fw-bold">-$25.00</span>
              <button className="text-success fw-bold border-0 bg-transparent">
                [Remove]
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2">
            <span>Shipping</span>
            <span className="fw-bold">Free</span>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2">
            <span>Subtotal</span>
            <span className="fw-bold">
              $ {`${getTotalCartAmount(cartItems, shopProduct, 0)}`}
            </span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <span>Total</span>
            <span className="fw-bold">
              $ {`${getTotalCartAmount(cartItems, shopProduct, 0)}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

// import React, { useContext, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAddress } from "../Redux/action";
// import OrderSummary from "../OrderSummary/OrderSummary";
// import { ShopContext } from "../../CommonFunctionality/Context/ShopContext";
// import { storage } from "../../../appwriteConfig";
// import { Link } from "react-router-dom";

// const CheckOut = () => {
// const { getTotalCartAmount, cartItems, shopProduct, applyCoupon } =
//   useContext(ShopContext);
  // const [getCoupon, setGetCoupon] = useState("");
  // const handleApplyCoupon = () => {
  //   applyCoupon(getCoupon);
  // };
//   const bucketId = "projectImages";
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     streetAddress: "",
//     city: "",
//     state: "",
//     country: "",
//     zipCode: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(setAddress(formData));
//   };

//   return (
//     <section className="checkout_details">
//       <div className="row d-flex gap-md-4 mx-3">
//         <div className="col-md-5 col-lg-6 my-5 d-flex gap-3 flex-column">
//           <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
//             <div className="row p-3 border-1 border-secondary border rounded d-flex gap-3">
//               <div className="form-row d-flex gap-2">
//                 <div className="form-group col-md-6">
//                   <label className="fw-bold text-secondary">First Name</label>
//                   <input
//                     type="text"
//                     className="form-control border-dark shadow-none"
//                     placeholder="First name"
//                     required
//                   />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label className="fw-bold text-secondary">Last Name</label>
//                   <input
//                     type="text"
//                     className="form-control border-dark shadow-none"
//                     placeholder="Last name"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label className="fw-bold text-secondary">Phone Number</label>
//                 <input
//                   type="number"
// className="form-control border-dark shadow-none"
// placeholder="Phone number"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label className="fw-bold text-secondary">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control border-dark shadow-none"
//                   placeholder="Your email"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row p-3 border-1 border-secondary border rounded d-flex gap-3">
//               <span className="h5 fw-bold">Shipping Address</span>
//               <div className="form-group">
//                 <label
//                   htmlFor="streetAddress"
//                   className="fw-bold text-secondary"
//                 >
//                   Street Address
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control border-dark shadow-none"
//                   placeholder="Street Address"
//                   id="streetAddress"
//                   name="streetAddress"
//                   value={formData.streetAddress}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="city" className="fw-bold text-secondary">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control border-dark shadow-none"
//                   placeholder="City"
//                   id="city"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="state" className="fw-bold text-secondary">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control border-dark shadow-none"
//                   placeholder="State"
//                   id="state"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="country" className="fw-bold text-secondary">
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control border-dark shadow-none"
//                   placeholder="Country"
//                   id="country"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="zipCode" className="fw-bold text-secondary">
//                   Zip Code
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control border-dark shadow-none"
//                   placeholder="zipCode"
//                   id="zipCode"
//                   name="zipCode"
//                   value={formData.zipCode}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
// <div className="form-group">
//   <div className="form-check">
//     <input
//       className="form-check-input shadow-none"
//       type="checkbox"
//     />
//     <label className="form-check-label">
//       Use a different billing address(Optional)
//     </label>
//   </div>
// </div>
//             </div>
//             <div className="row p-3 border-1 border-secondary border rounded d-flex gap-3">
//               <div className="row p-3 border-1 border-secondary border rounded d-flex gap-3">
//                 <span className="h5 fw-bold">Payment method</span>
// <div className="border-bottom border-1 border-secondary d-flex flex-column gap-3 pb-4">
//   <button className="border border-1  border-secondary p-2 bg-transparent">
//     <div className="d-flex justify-content-between">
//       <div className="d-flex gap-2">
//         <input type="radio" name="card" required />

//         <span>Pay by Card credit</span>
//       </div>
//       {/* <img src={paycard} alt="paycard" /> */}
//     </div>
//   </button>
//   <button className="border border-1  border-secondary p-2 bg-transparent">
//     <div className="d-flex gap-2">
//       <input type="radio" name="card" required />
//       <span>Paypal</span>
//     </div>
//   </button>
// </div>
// <div className="form-group">
//   <label className="fw-bold text-secondary">CARD NUMBER</label>
//   <input
//     type="text"
//     className="form-control border-dark shadow-none"
//     placeholder="1234 1234 1234"
//     required
//   />
// </div>
// <div className="form-row d-flex gap-2">
//   <div className="form-group col-md-6">
//     <label className="fw-bold text-secondary">
//       EXPIRATION DATE
//     </label>
//     <input
//       type="date"
//       className="form-control border-dark shadow-none"
//       required
//     />
//   </div>
//   <div className="form-group col-md-6">
//     <label className="fw-bold text-secondary">CVV</label>
//     <input
//       type="text"
//       className="form-control border-dark shadow-none"
//       placeholder="CVV code"
//       required
//     />
//   </div>
// </div>
//               </div>
//             </div>
//           </form>
//           <Link to="/cart/ordercomplete">
//             <button
//               type="submit"
//               className="border-0 bg-dark text-white rounded p-2 h5 w-100"
//             >
//               Place Order
//             </button>
//           </Link>
//         </div>
//         <div className="order_summary col py-3 border rounded border-dark my-5 d-flex flex-column gap-2">
//           <span className="h4 fw-bold"> Order Summary </span>

//           <OrderSummary />

//   <div className="d-flex gap-2">
//     <input
//       type="text"
//       placeholder="Input"
//       className="w-75 p-2 rounded border border-dark outline-0 shadow-none"
//       onChange={(e) => setGetCoupon(e.target.value)}
//     />
//     <button
//       className="border-0 rounded bg-dark text-white py-2 px-3"
//       onClick={() => handleApplyCoupon(getCoupon)}
//     >
//       Apply
//     </button>
//   </div>
//   <div className="d-flex justify-content-between border-bottom p-2">
//     <div className="d-flex gap-2 align-items-start">
//       <img
//         src={`${storage.getFilePreview(bucketId, "TicketPercent")}`}
//         alt=""
//       />
//       <span className="h5 fs-5">JenkateMW</span>
//     </div>
//     <div>
//       <span className="text-success fw-bold">-$25.00</span>
//       <button className="text-success fw-bold border-0 bg-transparent">
//         [Remove]
//       </button>
//     </div>
//   </div>
//   <div className="d-flex justify-content-between border-bottom p-2">
//     <span>Shipping</span>
//     <span className="fw-bold">Free</span>
//   </div>
//   <div className="d-flex justify-content-between border-bottom p-2">
//     <span>Subtotal</span>
//     <span className="fw-bold">
//       $ {`${getTotalCartAmount(cartItems, shopProduct, 0)}`}
//     </span>
//   </div>
//   <div className="d-flex justify-content-between p-2">
//     <span>Total</span>
//     <span className="fw-bold">
//       $ {`${getTotalCartAmount(cartItems, shopProduct, 0)}`}
//     </span>
//   </div>
// </div>
//       </div>
//     </section>
//   );
// };

// export default CheckOut;

// import React, { useContext, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAddress } from "../Redux/action";
// import { ShopContext } from "../../CommonFunctionality/Context/ShopContext";

// const CheckOut = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     country: "",
//     zipCode: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(setAddress(formData));
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="streetAddress">Street Address</label>
//             <input
//               type="text"
//               id="streetAddress"
//               name="streetAddress"
//               value={formData.streetAddress}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="state">State</label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="country">Country</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="zipCode">Zip Code</label>
//             <input
//               type="text"
//               id="zipCode"
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CheckOut;
