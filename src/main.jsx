import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import EventDetails from "./EventDetails.jsx";
import Checkout from "./Checkout.jsx";
import AfterCheckout from "./AfterCheckout.jsx";
import MyTickets from "./MyTickets.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
import PromoterDashboard from "./PromoterDashboard.jsx";
import Cart from "./Cart.jsx";

import './App.css';

function NotFound() {
  return <div style={{padding: 32}}><h2>Page non trouvée</h2></div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/aftercheckout" element={<AfterCheckout />} />
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/promoter" element={<PromoterDashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
