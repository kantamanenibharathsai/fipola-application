import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './pages/cart_page/CartPage';
import CategoryPage from './pages/category/Category';
import DelivLoc from './pages/delivery_location_screen/DeliveryLocation';
import HomePage from './pages/home_page/HomePage';
import LoginBoardingScreen from './pages/login_boarding_screen/LoginBoardingScreen';
import OrderHistory from './pages/order_history/OrderHistory';
import OrderSuccess from './pages/order_successfully/OrderSuccessfully';
import ProfilePage from './pages/profile_page/ProfilePage';
import RegisterPage from "./pages/register_page/Register";
import RelatedCategory from './pages/related_category/RelatedCategory';
import SelectAddress from './pages/select_address/SelectAddress';
import SingleHistory from './pages/single_history/SingleHistory';
import SplashScreen from './pages/splash_screen/SplashScreen';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/loginboarding" element={<LoginBoardingScreen />} />
        <Route path="/deliveryloc" element={<DelivLoc />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/relatedCategory" element={<RelatedCategory />} />
        <Route path="/singleHistory" element={<SingleHistory />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
        <Route path="/selectAddress" element={<SelectAddress />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
