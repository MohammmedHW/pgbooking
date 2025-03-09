// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IconArray from "./components/IconArray/IconArray";
import Residencies from "./components/Residencies/Residencies";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import BookingForm from "./components/BookingForm/BookingForm";
import Receipt from "./components/Receipt/Receipt";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div>
              <div className="white-gradient" />
              <Header />
              <Hero />
            </div>
            <IconArray />
            <Residencies />
            <Home />
            <Footer />
          </div>
        } />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
