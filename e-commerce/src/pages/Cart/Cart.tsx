import { useParams } from "react-router-dom";
import "../../pages/Cart/Cart.scss";
import CheckOut from "../../components/PageContent/Cart/CheckOut/CheckOut";
import OrderComplete from "../../components/PageContent/Cart/Complete/OrderComplete";
import ShoppingCart from "../../components/PageContent/Cart/ShoppingCart/ShoppingCart";
import CartHeader from "../../components/PageContent/Cart/CartHeader/CartHeader";
const CartPage = () => {
  const { currentpage } = useParams();

  return (
    <section className="cart_container">
      <div className="">
        <CartHeader currentpage={currentpage} />
      </div>
      {currentpage === "shoppingcart" && <ShoppingCart />}
      {currentpage === "checkout" && <CheckOut/>}
      <div className="d-flex justify-content-center">
        {currentpage === "ordercomplete" && <OrderComplete />}
      </div>
    </section>
  );
};

export default CartPage;
