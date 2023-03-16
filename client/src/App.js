
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TeamBrainly from './Components/TeamBrainly/TeamBrainly'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route  path = "/about"  element={<About/>}/>
          <Route path = "/aboutUs" element={<TeamBrainly/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
