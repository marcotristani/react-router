import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ErrorPage from "./pages/ErrorPage";

import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
        <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about_us" element={<AboutUs />} />

          <Route path="/products_list">
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
