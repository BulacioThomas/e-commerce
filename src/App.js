import React from "react";
import "./App.css";

// REACT - ROUTER - DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS

import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";
import Header from "./components/Header/Header";
// CONTEXT
import { ItemsProvider } from "./context/ItemsContext";

// VIEWS
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Shop from "./views/Shop/Shop";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import MenuCatalague from "./views/ProductCategory/ProductCategory";
import ErrorPage from "./views/ErrorPages/ErrorPages";
const App = () => {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/details/:id" element={<ProductDetail />} />
            <Route
              path="/products-category/:category"
              element={<MenuCatalague />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </ItemsProvider>
    </Router>
  );
};

export default App;
