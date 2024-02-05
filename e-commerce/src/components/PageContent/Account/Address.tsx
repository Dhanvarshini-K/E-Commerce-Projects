
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
  const [isBillingAddressEditing, setIsBillingAddressEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleValue = () => {
    setIsBillingAddressEditing(true);
    setIsEditing(false);
  };

  const handleSave = () => {
    dispatch(updateAddress(editedAddress));
    setIsEditing(false);
  };
  const handleSaveValue = () => {
    dispatch(updateBillingAddress(editedBillingAddress));
    setIsBillingAddressEditing(false);
  };

  const handleCancel = () => {
    setEditedAddress(address); 
    setIsEditing(false);
  };
  const handleCancelValue = () => {
    setEditedBillingAddress(billingAddress); 
    setIsBillingAddressEditing(false);
  };

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
              {isBillingAddressEditing ? (
                <div className="d-flex gap-2 align-items-start">
                  <button className="btn btn-primary" onClick={handleSaveValue}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancelValue}>
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

            {isBillingAddressEditing ? (
               <div className="d-flex flex-column">
               <input
                 type="text"
                 name="firstName"
                 value={editedBillingAddress?.firstName}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="Firstname"
               />
               <input
                 type="text"
                 name="lastName"
                 value={editedBillingAddress?.lastName}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="Lastname"

               />
               <input
                 type="text"
                 name="phoneNumber"
                 value={editedBillingAddress?.phoneNumber}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="Phonenumber"
               />
                    <input
                 type="text"
                 name="streetAddress"
                 value={editedBillingAddress?.streetAddress}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="Streetaddress"
               />
                    <input
                 type="text"
                 name="city"
                 value={editedBillingAddress?.city}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="city"
               />
                    <input
                 type="text"
                 name="state"
                 value={editedBillingAddress?.state}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="state"
               />
                    <input
                 type="text"
                 name="country"
                 value={editedBillingAddress?.country}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="country"
               />
                    <input
                 type="text"
                 name="zipCode"
                 value={editedBillingAddress?.zipCode}
                 onChange={handleAddressValue}
                 className="border-0 border-bottom"
                 placeholder="zipcode"
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
                  className="border-0 border-bottom"
                  placeholder="Firstname"
                />
                <input
                  type="text"
                  name="lastName"
                  value={editedAddress?.lastName}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="Lastname"

                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={editedAddress?.phoneNumber}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="Phonenumber"
                />
                     <input
                  type="text"
                  name="streetAddress"
                  value={editedAddress?.streetAddress}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="Streetaddress"
                />
                     <input
                  type="text"
                  name="city"
                  value={editedAddress?.city}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="city"
                />
                     <input
                  type="text"
                  name="state"
                  value={editedAddress?.state}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="state"
                />
                     <input
                  type="text"
                  name="country"
                  value={editedAddress?.country}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="country"
                />
                     <input
                  type="text"
                  name="zipCode"
                  value={editedAddress?.zipCode}
                  onChange={handleChange}
                  className="border-0 border-bottom"
                  placeholder="zipcode"
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
