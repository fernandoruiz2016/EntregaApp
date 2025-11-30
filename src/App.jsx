import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

// pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register"
import { Home } from "./pages/Home"
<<<<<<< HEAD
import { Profile } from "./pages/Profile"
import { MonitoringOrder } from "./pages/MonitoringOrder"
import { ConfirmOrder } from "./pages/ConfirmOrder"
=======
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
<<<<<<< HEAD
        <Route path="profile" element={<Profile />} />
        <Route path="monitoring-order/:id" element={<MonitoringOrder />} />
        <Route path="confirm-order" element={<ConfirmOrder />} />
=======
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
      </Routes>
    </>
  );
}

export default App;
