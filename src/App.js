import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Patient from "./components/Profile/Patient";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/demo/demo.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-patient" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
