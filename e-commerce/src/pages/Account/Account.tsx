import { useParams } from "react-router-dom";
import "../../pages/Account/Account.scss"
import WishList from "../../components/PageContent/Account/WishList";
import OrderHistory from "../../components/PageContent/Account/Order";
import AccountProfile from "../../components/PageContent/Account/AccountProfile";
import Address from "../../components/PageContent/Account/Address";
import AccountDetails from "../../components/PageContent/Account/AccountDetails";
const AccountPage = () => {
  const { activepage } = useParams();

  return (
    <section className="accountPage">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <AccountProfile activepage={activepage} />
        </div>
        <div className="col-lg-7 col-md-6">
          {activepage === "account" && <AccountDetails />}
          {activepage === "address" && <Address />}
          {activepage === "order" && <OrderHistory/>}
          {activepage === "wishlist" && <WishList/>}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
