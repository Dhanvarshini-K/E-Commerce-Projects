import { useState } from "react";
import "./AccountDetails.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";
import { account } from "../../../appwriteConfig";
interface accountDetails{
  firstname: string,
  lastname:string,
  displayname:string,
  email:string,
  oldpassword:string,
  newpassword:string,
  confirmpassword:string,
}
const AccountDetails = () => {

  const [accountDetails, setAccountDetails] = useState<accountDetails>({
    firstname: "",
    lastname:'',
    displayname:'',
    email:"",
    oldpassword:'',
    newpassword:'',
    confirmpassword:'',
  });
  const updateAccountDetails =async(e)=>{
    e.preventDefault();
    try{
      const updateName = await account.updateName(accountDetails.firstname+' '+accountDetails.lastname);
      const updateEmail = await account.updateEmail(accountDetails.email,accountDetails.oldpassword);
      const updatePassword = await account.updatePassword(accountDetails.newpassword,accountDetails.oldpassword);
        toast.success('Account Details successfully updated');
    }
    catch(error){
      console.log(error);
      
    }
  }
  return (
    <div className="d-flex gap-3 flex-column pt-4">
      <span className="h4 fw-bold">Account Details</span>
      <form className="myform d-flex  flex-column gap-3">
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">
            FIRST NAME
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="First Name"
            onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                firstname:e.target.value,
              })
            }}
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">
            LAST NAME
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Last name"
            onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                lastname:e.target.value,
              })
            }}
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">
            DISPLAY NAME
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Display name"
            onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                displayname:e.target.value,
              })
            }}
          />
          <small className="form-text text-muted">
            This will be how you name will be displayed in the account section
            and in reviews.
          </small>
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">EMAIL</label>
          <input type="password" className="form-control" placeholder="Email"   onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                email:e.target.value,
              })
            }} />
        </div>
      </form>
      <span className="h4 fw-bold">Password</span>
      <form className="d-flex  flex-column gap-3">
        <div className="form-group required d-flex flex-column gap-2">
          <label className="fw-bold text-secondary">OLD PASSWORD</label>
          <input
            type="password"
            className="form-control"
            placeholder="Old password"
            onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                oldpassword:e.target.value,
              })
            }}
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="fw-bold text-secondary">NEW PASSWORD</label>
          <input
            type="password"
            className="form-control"
            placeholder="New password"
            onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                newpassword:e.target.value,
              })
            }}
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="fw-bold text-secondary">REPEAT NEW PASSWORD</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat new password"
            onChange={(e)=>{
              setAccountDetails({
                ...accountDetails,
                confirmpassword:e.target.value,
              })
            }}
          />
        </div>
      </form>
      <button
      type="submit"
        className="btn bg-dark text-white button_custom_width"
        onClick={(e)=>updateAccountDetails(e)}
      >
        Save changes
        <ToastContainer/>
      </button>
    </div>
  );
};

export default AccountDetails;
