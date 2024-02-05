

import { useEffect, useState } from "react";
import { databases } from "../../../../appwriteConfig";
import Item from "../../../CommonFunctionality/ProductItems/ProductItem";

const HomeProductItem = () => {
  const [product, setProduct] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchHomeProduct = async () => {
      try {
        const response = await databases.listDocuments(
          "659681feb0c97e65e766",
          "homeproduct"
        );
        setProduct(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomeProduct();
  }, []);

  const renderHomeProduct = product.documents?.map(
    (product: any, index: any) => {
      return (
        <div key={index} className="">
          <Item
            key={index}
            id={product.id}
            product_title={product.ProductTitle}
            image={`../../src/assets/images/Product/${product.image}`}
            actual_price={product.Actualprice}
            discount_price={product.DiscountPrice}
            discount_title={product.DiscountTitle}
            discount_percent={product.DiscountPercent}
            product_reviews={`../../src/assets/images/Product/${product.ProductReviews}`}
          />
        </div>
      );
    }
  );
  return <div className="popular_item d-flex gap-2">{renderHomeProduct}</div>;
};

export default HomeProductItem;
