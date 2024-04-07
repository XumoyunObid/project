import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import AllProducts from "./Pages/AllProducts/AllProducts";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import QuranBooks from "./Pages/QuranBooks/QuranBooks";
import PrayerMats from "./Pages/PrayerMats/PrayerMats";
import IslamicGifts from "./Pages/IslamicGifts/IslamicGifts";
import Policies from "./Pages/Policies/Policies";
import RefundPolicy from "./Pages/Policies/RefundPolicy";
import TermsOfService from "./Pages/Policies/TermsOfService";
import ContactInformation from "./Pages/Policies/ContactInformation";
import LegalNotice from "./Pages/Policies/LegalNotice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="quran-books" element={<QuranBooks />} />
          <Route path="prayer-mat" element={<PrayerMats />} />
          <Route path="islamic-gifts" element={<IslamicGifts />} />
          <Route path="policies" element={<Policies />}>
            <Route path="/policies/refund-policy" element={<RefundPolicy />} />
            <Route
              path="/policies/terms-of-service"
              element={<TermsOfService />}
            />
            <Route
              path="/policies/contact-information"
              element={<ContactInformation />}
            />
            <Route path="/policies/legal-notice" element={<LegalNotice />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
