import React from "react";
import SingleCard from "./components/SingleCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
