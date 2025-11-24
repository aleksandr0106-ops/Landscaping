import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Head from "./pages/Head";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import ScrollToTop from "./component/ScrollToTop";

export default function App() {
  const navbarHeight = 200; 
  const footerHeight = 468; 

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <main
        style={{
          paddingTop: `${navbarHeight}px`,
          minHeight: `calc(100vh - ${navbarHeight + footerHeight}px)`,
        }}
      >
        <Routes>
          <Route path="/" element={<Head />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}