import "./App.css";

// It allows us to write HTML code directly in our React project.
//Using TypeScript with React provides better IntelliSense and code completion for JSX.
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { OrdersPage } from "./pages/OrdersPage";
import { ViewPage } from "./pages/OrderViewPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/view-page" element={<ViewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
