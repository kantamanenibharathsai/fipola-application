import React from 'react';
import './App.css';
import SplashScreen from './pages/splash_screen/SplashScreen';
import LoginBoardingScreen from './pages/login_boarding_screen/LoginBoardingScreen';
import DelivLoc from './pages/delivery_location_screen/DeliveryLocation';
import HomePage from './pages/home_page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from "./pages/register_page/Register";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/loginboarding" element={<LoginBoardingScreen />} />
        <Route path="/deliveryloc" element={<DelivLoc />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
