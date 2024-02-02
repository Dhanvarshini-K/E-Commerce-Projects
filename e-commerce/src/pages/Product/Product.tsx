import "../Home/home.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/PageContent/ProductPageMain/BreadCrums.tsx/BreadCrums";
import ProductDisplay from "../../components/PageContent/ProductPageMain/ProductDisplay/ProductDisplay";
import HomeProductItem from "../../components/PageContent/HomePageMain/HomeProductDisplay/ProductItem";
import { ShopContext } from "../../components/CommonFunctionality/Context/ShopContext";

const ProductPage = () => {
  const { shopProduct }: any = useContext(ShopContext) || {};
  const { productId } = useParams();
  const product = shopProduct.documents?.find((e : any) => e.id === Number(productId));
  // const product = Array.isArray(shopProduct) ? shopProduct.find((e: any) => e.id === Number(productId)) : null;
  return (
    <>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <div className="product container">
        <HomeProductItem />
      </div>
    </>
  );
};
export default ProductPage;
