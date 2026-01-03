import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import BuyPage from "./pages/Buy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </>
  );
}

export default App;
