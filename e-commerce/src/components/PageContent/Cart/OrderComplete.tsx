
import CompletePage from "../OrderComplete/Complete";
import "./OrderComplete.scss"

const OrderComplete = () => {
  return (
    <div className="order_complete  p-4 mt-5 d-flex flex-column flex-wrap">
      <span className="h5 fw-bold text-secondary text-center">Thank You!🎉</span>
      <span className="h4 fw-bold text-center">Your Order has been Received</span>
      <CompletePage/>
    </div>
  );
};

export default OrderComplete;