import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "./root/RootLayout";
import ProductsPage from "./root/pages/ProductsPage";
import ProductPage from "./root/pages/ProductPage";
import CreateProductPage from "./root/pages/CreateProductPage";
import EditProductPage from "./root/pages/EditProductPage";

const App = () => {
  return (
    
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/products/create" element={<CreateProductPage/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="/products/:id/edit" element={<EditProductPage/>}/>
        </Route>

      <Route path="*" element={<Navigate to="/products" replace />} />

      </Routes>
  );
};

export default App;
