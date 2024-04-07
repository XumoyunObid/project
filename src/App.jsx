import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import AllProducts from "./Pages/AllProducts/AllProducts";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
