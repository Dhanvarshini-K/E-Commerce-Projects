import { useDispatch, useSelector } from "react-redux";
import { AddressState } from "../Redux/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { updateAddress } from "../Redux/action";

interface RootState {
  address: AddressState;
  billingAddress: AddressState;
}
const Address = () => {
  const { address } = useSelector(
    (state: RootState) => state.address
  );

  const dispatch = useDispatch();
  const [editedAddress, setEditedAddress] = useState<AddressState>(address);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to handle saving changes
  const handleSave = () => {
    dispatch(updateAddress(editedAddress)); // Dispatch action to update the address in Redux state
    setIsEditing(false);
  };

  // Function to handle canceling editing
  const handleCancel = () => {
    setEditedAddress(address); // Reset edited address to the current address
    setIsEditing(false);
  };

  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedAddress((prevAddress) => ({
      ...prevAddress,
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
              <div className="edit d-flex gap-2 align-items-start">
                <FontAwesomeIcon icon={faPenToSquare} />

                <span className="h6 text-secondary fw-bold">Edit</span>
              </div>
            </div>
            {address && (
              <div className="d-flex flex-column">
                <span className="h5 fw-medium">
                  {address.firstName} {address.lastName}
                </span>
                <span className="h6">{address.phoneNumber}</span>
                <span className="h6">
                  {address.streetAddress}{address.city}
                </span>
                <span className="h6">
                  {address.state}{address.country}{address.zipCode}
                </span>
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
            {/* {address && (
              <div className="d-flex flex-column">
                <span className="h5 fw-medium">
                  {address.firstName} {address.lastName}
                </span>
                <span className="h6">{address.phoneNumber}</span>
                <span className="h6">
                  {address.streetAddress},{address.city}
                </span>
                <span className="h6">
                  {address.state},{address.country},{address.zipCode}
                </span>
              </div>
            )} */}
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
                  {address?.streetAddress}{address?.city}
                </p>
                <p className="h6">
                  {address?.state}{address?.country}{address?.zipCode}
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

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AddressState } from "../Redux/reducer"; // Assuming you have an action to update the address
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// import { updateAddress } from "../Redux/action";

// interface RootState {
//   address: AddressState;
// }

// const Address = () => {
//   const { address } = useSelector((state: RootState) => state.address);
//   const dispatch = useDispatch();

//   // State variables to hold edited address fields
//   const [editedAddress, setEditedAddress] = useState<AddressState>(address);
//   const [isEditing, setIsEditing] = useState(false);

//   // Function to handle editing
// const handleEdit = () => {
//   setIsEditing(true);
// };

// // Function to handle saving changes
// const handleSave = () => {
//   dispatch(updateAddress(editedAddress)); // Dispatch action to update the address in Redux state
//   setIsEditing(false);
// };

// // Function to handle canceling editing
// const handleCancel = () => {
//   setEditedAddress(address); // Reset edited address to the current address
//   setIsEditing(false);
// };

// // Function to handle input changes
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setEditedAddress((prevAddress) => ({
//     ...prevAddress,
//     [name]: value,
//   }));
// };

//   return (
//     <div>
//       <div className="d-flex gap-3 flex-column mt-4">
//         <span className="h4 fw-bold">Address</span>
//         <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
//           <div className="border border-1 border-dark rounded d-flex flex-column gap-2 p-3">
//             <div className="d-flex justify-content-between align-items-center">
//               <span className="h5 fw-bold">Shipping Address</span>
// {isEditing ? (
//   <div className="d-flex gap-2 align-items-start">
//     <button className="btn btn-primary" onClick={handleSave}>
//       Save
//     </button>
//     <button className="btn btn-secondary" onClick={handleCancel}>
//       Cancel
//     </button>
//   </div>
// ) : (
//   <div className="edit d-flex gap-2 align-items-start">
//     <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
//     <span className="h6 text-secondary fw-bold">Edit</span>
//   </div>
// )}
//             </div>
// {isEditing ? (
//   <div className="d-flex flex-column">
//     <input
//       type="text"
//       name="firstName"
//       value={editedAddress?.firstName}
//       onChange={handleChange}
//     />
//     <input
//       type="text"
//       name="lastName"
//       value={editedAddress?.lastName}
//       onChange={handleChange}
//     />
//     <input
//       type="text"
//       name="PhoneNumber"
//       value={editedAddress?.phoneNumber}
//       onChange={handleChange}
//     />
//   </div>
// ) : (
//   <div className="d-flex flex-column">
//     <p className="h5 fw-medium">
//       {address?.firstName} {address?.lastName}
//     </p>
//     <p className="h6">{address?.phoneNumber}</p>
//     <p className="h6">
//       {address?.streetAddress},{address?.city}
//     </p>
//     <p className="h6">
//       {address?.state},{address?.country},{address?.zipCode}
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
