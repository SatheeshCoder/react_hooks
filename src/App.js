import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Do from "./components/usememo";
import FactorialCalculator from "./components/factorial";
import NameMemo from "./components/namememo";
import EvenMemo from "./components/evenmemo";
import Cart from "./components/cart";
import FactorialFor from "./components/factorialfor";
import Home from "./pages/home";
import Incrementcallhook from "./components/incrementcallhook";
function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<NameMemo />} />
          <Route path="/do" element={<Do />} />
          <Route path="/factorial" element={<FactorialCalculator />} />
          <Route path="/even" element={<EvenMemo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/factorialfor" element={<FactorialFor />} />
          <Route path="/incrementcallhook" element={<Incrementcallhook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
