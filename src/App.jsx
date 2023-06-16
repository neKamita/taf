import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Merop from "./components/Merop/Merop";
import Stats from "./components/Stats/Stats";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Merop"  element={<Merop/>} />
          <Route path="/Stats"  element={<Stats/>} />
          <Route path="/Product"  element={<Product/>} />
          <Route path="/Contact"  element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
