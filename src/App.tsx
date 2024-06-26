import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryPage from './pages/category/Category';
import DelivLoc from './pages/delivery_location_screen/DeliveryLocation';
import HomePage from './pages/home_page/HomePage';
import LoginBoardingScreen from './pages/login_boarding_screen/LoginBoardingScreen';
import RegisterPage from "./pages/register_page/Register";
import SplashScreen from './pages/splash_screen/SplashScreen';
import CartPage from './pages/cart_page/CartPage';
import ProfilePage from './pages/profile_page/ProfilePage';
import RelatedCategory from './pages/related_category/RelatedCategory';



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
      </Routes>
    </BrowserRouter>


  );
}

export default App;
