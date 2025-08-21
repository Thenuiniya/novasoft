import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/components/Main"
import QrCodeDashboard from "./components/QrCodeDashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/qrcode" element={<QrCodeDashboard/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
