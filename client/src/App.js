
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import About from './Components/About';
import Form from "./Components/Form"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route  path = "/about"  element={<About/>}/>
          <Route  path = "/form"  element={<Form/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
