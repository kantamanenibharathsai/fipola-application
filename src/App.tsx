import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryPage from './pages/category/Category';
import DelivLoc from './pages/delivery_location_screen/DeliveryLocation';
import HomePage from './pages/home_page/HomePage';
import LoginBoardingScreen from './pages/login_boarding_screen/LoginBoardingScreen';
import RegisterPage from "./pages/register_page/Register";
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
      </Routes>
    </BrowserRouter>


  );
}

export default App;
