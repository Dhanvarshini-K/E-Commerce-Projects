import { useState } from "react";
import "./AccountDetails.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { account } from "../../../appwriteConfig";
import { useDispatch } from "react-redux";
import { setAccountData } from "../Redux/action";
interface accountDetails {
  firstname: string;
  lastname: string;
  displayname: string;
  email: string;
  oldpassword: string;
  newpassword: string;
  confirmpassword: string;
}

const AccountDetails = () => {
const dispatch = useDispatch();
const [accountDetails, setAccountDetails] = useState<accountDetails>({
    firstname: "",
    lastname: "",
    displayname: "",
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setAccountDetails((prevState) =>({
      ...prevState,
      [name]:value,
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(setAccountData(accountDetails))
  }

  
  const updateAccountDetails = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (
        !accountDetails.firstname ||
        !accountDetails.lastname ||
        !accountDetails.displayname ||
        !accountDetails.email ||
        !accountDetails.oldpassword ||
        !accountDetails.newpassword ||
        !accountDetails.confirmpassword
      ) {
        throw new Error("Please fill in all required fields");
      }
      const updateName = await account.updateName(
        accountDetails.firstname + " " + accountDetails.lastname
      );
      const updateEmail = await account.updateEmail(
        accountDetails.email,
        accountDetails.oldpassword
      );
      const updatePassword = await account.updatePassword(
        accountDetails.newpassword,
        accountDetails.oldpassword
      );
      toast.success("Account Details successfully updated");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="d-flex gap-3 flex-column pt-4">
      <span className="h4 fw-bold">Account Details</span>
      <form className="myform d-flex  flex-column gap-3" onClick={handleSubmit}>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">
            FIRST NAME
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="First Name"
            name="firstname"
            value={accountDetails.firstname}
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                firstname: e.target.value,
              });
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">
            LAST NAME
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastname"
            value={accountDetails.lastname}
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                lastname: e.target.value,
              });
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">
            DISPLAY NAME
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Display name"
            name="displayname"
            value={accountDetails.displayname}
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                displayname: e.target.value,
              });
              handleChange(e);
            }}
            required
          />
          <small className="form-text text-muted">
            This will be how you name will be displayed in the account section
            and in reviews.
          </small>
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="control-label fw-bold text-secondary">EMAIL</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={accountDetails.email}
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                email: e.target.value,
              });
              handleChange(e);
            }}
            required
          />
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
            name="oldpassword"
            value={accountDetails.oldpassword}
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                oldpassword: e.target.value,
              });
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="fw-bold text-secondary">NEW PASSWORD</label>
          <input
            type="password"
            className="form-control"
            placeholder="New password"
            name="newpassword"
            value={accountDetails.newpassword}
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                newpassword: e.target.value,
              });
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group required d-flex flex-column gap-2">
          <label className="fw-bold text-secondary">REPEAT NEW PASSWORD</label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat new password"
            onChange={(e) => {
              setAccountDetails({
                ...accountDetails,
                confirmpassword: e.target.value,
              });
            }}
            required
          />
        </div>
      </form>
      <button
        type="submit"
        className="btn bg-dark text-white button_custom_width"
        onClick={(e) => {updateAccountDetails(e);
        handleSubmit(e)}}
      
      >
        Save changes
        <ToastContainer />
      </button>
    </div>
  );
};

export default AccountDetails;


