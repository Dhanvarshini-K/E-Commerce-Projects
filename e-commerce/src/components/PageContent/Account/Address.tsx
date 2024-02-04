// import { useDispatch, useSelector } from "react-redux";
// import { AddressState } from "../Redux/reducer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { updateAddress, updateBillingAddress } from "../Redux/action";

// interface RootState {
//   address: AddressState;
//   billingAddress: AddressState;
// }
// const Address = () => {
//   const { addressData, billingAddressData } = useSelector(
//     (state: RootState) => ({
//       addressData: state.address,
//       billingAddressData: state.billingAddress,
//     })
//   );

//   const dispatch = useDispatch();
//   const [editedAddress, setEditedAddress] = useState<AddressState>(addressData);
//   const [editedBillingAddress, setEditedBillingAddress] =
//     useState<AddressState>(billingAddressData);
//   const [isEditingAddress, setIsEditingAddress] = useState(false);
//   const [isEditingBillingAddress, setIsEditingBillingAddress] = useState(false);

//   const handleEdit = () => {
//     setIsEditingAddress(true);
//     setIsEditingBillingAddress(true);
//   };

//   const handleSave = () => {
//     dispatch(updateAddress(editedAddress));
//     dispatch(updateBillingAddress(editedBillingAddress));
//     setIsEditingAddress(false);
//     setIsEditingBillingAddress(false);
//   };

//   const handleCancel = () => {
//     setEditedAddress(addressData);
//     setEditedBillingAddress(billingAddressData);
//     setIsEditingAddress(false);
//     setIsEditingBillingAddress(false);
//   };

//   // Function to handle input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditedAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//     setEditedBillingAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <div className=" d-flex gap-3 flex-column mt-4">
//         <span className="h4 fw-bold">Address</span>
//         <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
//           <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
//             <div className="d-flex gap-5">
//               <span className="h5 fw-bold">Billing Address</span>
//               {isEditingBillingAddress ? (
//                 <div className="d-flex gap-2 align-items-start">
//                   <button className="btn btn-primary" onClick={handleSave}>
//                     Save
//                   </button>
//                   <button className="btn btn-secondary" onClick={handleCancel}>
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div className="edit d-flex gap-2 align-items-start">
//                   <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
//                   <span className="h6 text-secondary fw-bold">Edit</span>
//                 </div>
//               )}
//             </div>
//             {billingAddressData && (
//               <div className="d-flex flex-column">
//                 <span className="h5 fw-medium">
//                   {billingAddressData.firstName} {billingAddressData.lastName}
//                 </span>
//                 <span className="h6">{billingAddressData.phoneNumber}</span>
//                 <span className="h6">
//                   {billingAddressData.streetAddress}
//                   {billingAddressData.city}
//                 </span>
//                 <span className="h6">
//                   {billingAddressData.state}
//                   {billingAddressData.country}
//                   {billingAddressData.zipCode}
//                 </span>
//               </div>
//             )}
//           </div>

//           <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
//             <div className="d-flex gap-5">
//               <span className="h5 fw-bold">Shipping Address</span>
//               {isEditingAddress ? (
//                 <div className="d-flex gap-2 align-items-start">
//                   <button className="btn btn-primary" onClick={handleSave}>
//                     Save
//                   </button>
//                   <button className="btn btn-secondary" onClick={handleCancel}>
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div className="edit d-flex gap-2 align-items-start">
//                   <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
//                   <span className="h6 text-secondary fw-bold">Edit</span>
//                 </div>
//               )}
//             </div>
//             {/* {address && (
//               <div className="d-flex flex-column">
//                 <span className="h5 fw-medium">
//                   {address.firstName} {address.lastName}
//                 </span>
//                 <span className="h6">{address.phoneNumber}</span>
//                 <span className="h6">
//                   {address.streetAddress},{address.city}
//                 </span>
//                 <span className="h6">
//                   {address.state},{address.country},{address.zipCode}
//                 </span>
//               </div>
//             )} */}
// {isEditingAddress ? (
//   <div className="d-flex flex-column">
//     <input
//       type="text"
//       name="firstName"
//       value={editedAddress?.firstName}
//       onChange={handleChange}
//       placeholder="Firstname"
//     />
//     <input
//       type="text"
//       name="lastName"
//       value={editedAddress?.lastName}
//       onChange={handleChange}
//       placeholder="Lastname"
//     />
//     <input
//       type="text"
//       name="phoneNumber"
//       value={editedAddress?.phoneNumber}
//       onChange={handleChange}
//       placeholder="PhoneNumber"
//     />
//   </div>
// ) : (
//   <div className="d-flex flex-column">
//     <p className="h5 fw-medium">
//       {addressData?.firstName} {addressData?.lastName}
//     </p>
//     <p className="h6">{addressData?.phoneNumber}</p>
//     <p className="h6">
//       {addressData?.streetAddress}
//       {addressData?.city}
//     </p>
//     <p className="h6">
//       {addressData?.state}
//       {addressData?.country}
//       {addressData?.zipCode}
//     </p>
//   </div>
// )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Address;

// // import { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { AddressState } from "../Redux/reducer"; // Assuming you have an action to update the address
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// // import { updateAddress } from "../Redux/action";

// // interface RootState {
// //   address: AddressState;
// // }

// // const Address = () => {
// //   const { address } = useSelector((state: RootState) => state.address);
// //   const dispatch = useDispatch();

// //   // State variables to hold edited address fields
// //   const [editedAddress, setEditedAddress] = useState<AddressState>(address);
// //   const [isEditing, setIsEditing] = useState(false);

// //   // Function to handle editing
// // const handleEdit = () => {
// //   setIsEditing(true);
// // };

// // // Function to handle saving changes
// // const handleSave = () => {
// //   dispatch(updateAddress(editedAddress)); // Dispatch action to update the address in Redux state
// //   setIsEditing(false);
// // };

// // // Function to handle canceling editing
// // const handleCancel = () => {
// //   setEditedAddress(address); // Reset edited address to the current address
// //   setIsEditing(false);
// // };

// // // Function to handle input changes
// // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //   const { name, value } = e.target;
// //   setEditedAddress((prevAddress) => ({
// //     ...prevAddress,
// //     [name]: value,
// //   }));
// // };

// //   return (
// //     <div>
// //       <div className="d-flex gap-3 flex-column mt-4">
// //         <span className="h4 fw-bold">Address</span>
// //         <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
// //           <div className="border border-1 border-dark rounded d-flex flex-column gap-2 p-3">
// //             <div className="d-flex justify-content-between align-items-center">
// //               <span className="h5 fw-bold">Shipping Address</span>
// // {isEditing ? (
// //   <div className="d-flex gap-2 align-items-start">
// //     <button className="btn btn-primary" onClick={handleSave}>
// //       Save
// //     </button>
// //     <button className="btn btn-secondary" onClick={handleCancel}>
// //       Cancel
// //     </button>
// //   </div>
// // ) : (
// //   <div className="edit d-flex gap-2 align-items-start">
// //     <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
// //     <span className="h6 text-secondary fw-bold">Edit</span>
// //   </div>
// // )}
// //             </div>
// // {isEditing ? (
// //   <div className="d-flex flex-column">
// //     <input
// //       type="text"
// //       name="firstName"
// //       value={editedAddress?.firstName}
// //       onChange={handleChange}
// //     />
// //     <input
// //       type="text"
// //       name="lastName"
// //       value={editedAddress?.lastName}
// //       onChange={handleChange}
// //     />
// //     <input
// //       type="text"
// //       name="PhoneNumber"
// //       value={editedAddress?.phoneNumber}
// //       onChange={handleChange}
// //     />
// //   </div>
// // ) : (
// //   <div className="d-flex flex-column">
// //     <p className="h5 fw-medium">
// //       {address?.firstName} {address?.lastName}
// //     </p>
// //     <p className="h6">{address?.phoneNumber}</p>
// //     <p className="h6">
// //       {address?.streetAddress},{address?.city}
// //     </p>
// //     <p className="h6">
// //       {address?.state},{address?.country},{address?.zipCode}
// //     </p>
// //   </div>
// // )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Address;

// import { useDispatch, useSelector } from "react-redux";
// import { AddressState } from "../Redux/reducer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { updateAddress, updateBillingAddress } from "../Redux/action";

// interface RootState {
//   address: AddressState;
//   billingAddress: AddressState;
// }

// const Address = () => {
//   const { addressData, billingAddressData } = useSelector(
//     (state: RootState) => ({
//       addressData: state.address,
//       billingAddressData: state.billingAddress,
//     })
//   );

//   const dispatch = useDispatch();
//   const [editedAddress, setEditedAddress] = useState<AddressState>(
//     addressData || {}
//   );
//   const [editedBillingAddress, setEditedBillingAddress] =
//     useState<AddressState>(billingAddressData || {});
//   const [isEditingAddress, setIsEditingAddress] = useState(false);
//   const [isEditingBillingAddress, setIsEditingBillingAddress] = useState(false);

//   const handleEditBillingAddress = () => {
//     setIsEditingBillingAddress(true);
//   };

//   const handleSaveBillingAddress = () => {
//     dispatch(updateBillingAddress(editedBillingAddress));
//     setIsEditingBillingAddress(false);
//   };

//   const handleCancelBillingAddress = () => {
//     setEditedBillingAddress(billingAddressData || {});
//     setIsEditingBillingAddress(false);
//   };

//   const handleEditShippingAddress = () => {
//     setIsEditingAddress(true);
//   };

//   const handleSaveShippingAddress = () => {
//     dispatch(updateAddress(editedAddress));
//     setIsEditingAddress(false);
//   };

//   const handleCancelShippingAddress = () => {
//     setEditedAddress(addressData || {});
//     setIsEditingAddress(false);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     type: string
//   ) => {
//     const { name, value } = e.target;
//     if (type === "billingAddress") {
//       setEditedBillingAddress((prevAddress) => ({
//         ...prevAddress,
//         [name]: value,
//       }));
//     } else if (type === "shippingAddress") {
//       setEditedAddress((prevAddress) => ({
//         ...prevAddress,
//         [name]: value,
//       }));
//     }
//   };

//   return (
//     <div>
//       <div className="d-flex gap-3 flex-column mt-4">
//         <span className="h4 fw-bold">Address</span>
//         <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
//           <div className="border border-1 border-dark rounded d-flex flex-column gap-2 p-3">
//             <div className="d-flex justify-content-between align-items-center">
//               <span className="h5 fw-bold">Billing Address</span>
//               {isEditingBillingAddress ? (
//                 <div className="d-flex gap-2 align-items-start">
//                   <button
//                     className="btn btn-primary"
//                     onClick={handleSaveBillingAddress}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="btn btn-secondary"
//                     onClick={handleCancelBillingAddress}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div className="edit d-flex gap-2 align-items-start">
//                   <FontAwesomeIcon
//                     icon={faPenToSquare}
//                     onClick={handleEditBillingAddress}
//                   />
//                   <span className="h6 text-secondary fw-bold">Edit</span>
//                 </div>
//               )}
//             </div>
//             {isEditingBillingAddress ? (
//               <div className="d-flex flex-column">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={editedBillingAddress?.firstName || ""}
//                   onChange={(e) => handleChange(e, "billingAddress")}
//                   placeholder="Firstname"
//                 />
//                 {/* Add input fields for other billing address details */}
//               </div>
//             ) : (
//               <div className="d-flex flex-column">
//                 {/* Display billing address fields */}
//                 {/* Implement your JSX to display billing address fields */}
//               </div>
//             )}
//           </div>

//           <div className="border border-1 border-dark rounded d-flex flex-column gap-2 p-3 ">
//             <div className="d-flex gap-5">
//               <span className="h5 fw-bold">Shipping Address</span>
//               {isEditingAddress ? (
//                 <div className="d-flex gap-2 align-items-start">
//                   <button
//                     className="btn btn-primary"
//                     onClick={handleSaveShippingAddress}
//                   >
//                     Save
//                   </button>
//                   <button
//                     className="btn btn-secondary"
//                     onClick={handleCancelShippingAddress}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div className="edit d-flex gap-2 align-items-start">
//                   <FontAwesomeIcon
//                     icon={faPenToSquare}
//                     onClick={handleEditShippingAddress}
//                   />
//                   <span className="h6 text-secondary fw-bold">Edit</span>
//                 </div>
//               )}
//             </div>
//             {isEditingAddress ? (
//               <div className="d-flex flex-column">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={editedAddress?.firstName || ""}
//                   onChange={(e) => handleChange(e, "shippingAddress")}
//                   placeholder="Firstname"
//                 />
//                 {/* Add input fields for other shipping address details */}
//               </div>
//             ) : (
//               <div className="d-flex flex-column">
//                 {/* Display shipping address fields */}
//                 {/* Implement your JSX to display shipping address fields */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Address;

//================================================

import { useDispatch, useSelector } from "react-redux";
import { AddressState, BillingState } from "../Redux/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { updateAddress, updateBillingAddress } from "../Redux/action";

interface RootState {
  address: AddressState;
  billingAddress: BillingState;
}
const Address = () => {
  const { address } = useSelector((state: RootState) => state.address);
  const { billingAddress } = useSelector(
    (state: RootState) => state.billingAddress
  );

  const dispatch = useDispatch();
  const [editedAddress, setEditedAddress] = useState<AddressState>(address);
  const [editedBillingAddress, setEditedBillingAddress] =
    useState<BillingState>(billingAddress);

  const [isEditing, setIsEditing] = useState(false);
  const [isValue, setIsValue] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleValue = () => {
    setIsValue(true);
    setIsEditing(false);
  };

  // Function to handle saving changes
  const handleSave = () => {
    dispatch(updateAddress(editedAddress)); // Dispatch action to update the address in Redux state
    setIsEditing(false);
  };
  const handleSaveValue = () => {
    dispatch(updateBillingAddress(editedBillingAddress)); // Dispatch action to update the address in Redux state
    setIsValue(false);
  };

  // Function to handle canceling editing
  const handleCancel = () => {
    setEditedAddress(address); // Reset edited address to the current address
    setIsEditing(false);
  };
  const handleCancelValue = () => {
    setEditedBillingAddress(billingAddress); // Reset edited address to the current address
    setIsValue(false);
  };

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleAddressValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBillingAddress((prevBillingAddress) => ({
      ...prevBillingAddress,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className=" d-flex gap-3 flex-column mt-4">
        <span className="h4 fw-bold">Address</span>
        <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
          <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
            <div className="d-flex gap-5">
              <span className="h5 fw-bold">Billing Address</span>

              {isValue ? (
                <div className="d-flex gap-2 align-items-start">
                  <button className="btn btn-primary" onClick={handleSaveValue}>
                    Save
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleCancelValue}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="edit d-flex gap-2 align-items-start">
                  <FontAwesomeIcon icon={faPenToSquare} onClick={handleValue} />
                  <span className="h6 text-secondary fw-bold">Edit</span>
                </div>
              )}
            </div>

            {isValue ? (
              <div className="d-flex flex-column">
                <input
                  type="text"
                  name="firstName"
                  value={editedBillingAddress?.firstName}
                  onChange={handleAddressValue}
                />
                <input
                  type="text"
                  name="lastName"
                  value={editedBillingAddress?.lastName}
                  onChange={handleAddressValue}
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedBillingAddress?.phoneNumber}
                  onChange={handleAddressValue}
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <p className="h5 fw-medium">
                  {billingAddress?.firstName} {billingAddress?.lastName}
                </p>
                <p className="h6">{billingAddress?.phoneNumber}</p>
                <p className="h6">
                  {billingAddress?.streetAddress}
                  {billingAddress?.city}
                </p>
                <p className="h6">
                  {billingAddress?.state}
                  {billingAddress?.country}
                  {billingAddress?.zipCode}
                </p>
              </div>
            )}
          </div>

          <div className="border border-1 border-dark rounded  d-flex flex-column gap-2 p-3 ">
            <div className="d-flex gap-5">
              <span className="h5 fw-bold">Shipping Address</span>
              {isEditing ? (
                <div className="d-flex gap-2 align-items-start">
                  <button className="btn btn-primary" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="edit d-flex gap-2 align-items-start">
                  <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
                  <span className="h6 text-secondary fw-bold">Edit</span>
                </div>
              )}
            </div>
            {isEditing ? (
              <div className="d-flex flex-column">
                <input
                  type="text"
                  name="firstName"
                  value={editedAddress?.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  value={editedAddress?.lastName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedAddress?.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="d-flex flex-column">
                <p className="h5 fw-medium">
                  {address?.firstName} {address?.lastName}
                </p>
                <p className="h6">{address?.phoneNumber}</p>
                <p className="h6">
                  {address?.streetAddress}
                  {address?.city}
                </p>
                <p className="h6">
                  {address?.state}
                  {address?.country}
                  {address?.zipCode}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
