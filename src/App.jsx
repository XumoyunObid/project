import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import AllProducts from "./Pages/AllProducts/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="all-products" element={<AllProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
