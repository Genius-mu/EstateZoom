import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import BuyPage from "./pages/Buy";
import RentPage from "./pages/Rent";
import SellPage from "./pages/Sell";
import SavedHomesPage from "./pages/Saved";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/savedHomes" element={<SavedHomesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
