
import CardItem from "../../components/CommonFunctionality/ServiceCard/Card";
import HomePageMain from "../../components/PageContent/HomePageMain/Home/Home";
import HomeArticle from "../../components/PageContent/HomePageMain/HomeArticle/HomeArticle";
import HomeSaleUp from "../../components/PageContent/HomePageMain/HomeSaleUp/HomeSaleUp";
import HomeProductItem from "../../components/PageContent/HomePageMain/HomeProductDisplay/ProductItem";
import "../Home/Home.scss";

const HomePage = () => {
  return (
    <>
      <HomePageMain/>
      <div className="product container">
      <HomeProductItem/>
      </div>
      <CardItem/>
      <HomeSaleUp/>
      <HomeArticle/>
    </>
  );
};
export default HomePage;
