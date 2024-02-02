import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import HomePage from "./pages/Home/Home";
import SignIn from "./components/PageContent/Form/SignIn";
import SignUp from "./components/PageContent/Form/SignUp";
import Layout from "./components/PageContent/Layout/Layout";
import ContactPage from "./pages/Contact/Contact";
import BlogPage from "./pages/Blog/Blog";
import ArticleDetails from "./components/PageContent/BlogPagemain/BlogArticle/BlogArticleContent";
import ShopPage from "./pages/Shop/Shop";
import ShopCategory from "./components/PageContent/ShopPageMain/ShopCategory/ShopCategory";
import CartPage from "./pages/Cart/Cart";
import ProductPage from "./pages/Product/Product";
import AccountPage from "./pages/Account/Account";
import PrivateRoutes from "./utils/privateRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<PrivateRoutes />}> */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/article" element={<ArticleDetails />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/allrooms" element={<ShopCategory category="" />} />
              <Route
                path="/livingroom"
                element={<ShopCategory category="Livingroom" />}
              />
              <Route
                path="/bedroom"
                element={<ShopCategory category="Bedroom" />}
              />
              <Route
                path="/kitchen"
                element={<ShopCategory category="Kitchen" />}
              />
              <Route
                path="/bathroom"
                element={<ShopCategory category="Bathroom" />}
              />
              <Route
                path="/dinning"
                element={<ShopCategory category="Dinning" />}
              />
              <Route
                path="/outdoor"
                element={<ShopCategory category="Outdoor" />}
              />
              <Route path="/cart" element={<CartPage />}>
                <Route path=":currentpage" element={<CartPage />} />
              </Route>
              <Route path="/product" element={<ProductPage />}>
                <Route path=":productId" element={<ProductPage />} />
              </Route>
              <Route path="/user" element={<AccountPage />}>
                <Route path=":activepage" element={<AccountPage />} />
              </Route>
            </Route>
          {/* </Route> */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
