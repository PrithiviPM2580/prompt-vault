import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default MainRoutes