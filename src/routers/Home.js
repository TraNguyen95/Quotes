import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import Footer from "../components/Footer";
import Quotes from "../pages/Quotes";

export default function Home() {
  return (
    <>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
