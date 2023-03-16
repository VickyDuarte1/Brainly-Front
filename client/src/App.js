
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import UsersDetails from './Components/UsersDetails';
import Users from './Components/Users';
import Doctors from './Components/Doctors'
import DoctorsDetails from './Components/DoctorsDetails';
=======
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TeamBrainly from './Components/TeamBrainly/TeamBrainly'
>>>>>>> 8f3ab4e974702cfaf5eeb556d0f338f55bdb5f3c

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
<<<<<<< HEAD
          <Route path="/users/:id" element={<UsersDetails/>} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
=======
          <Route  path = "/about"  element={<About/>}/>
          <Route path = "/aboutUs" element={<TeamBrainly/>}/>
>>>>>>> 8f3ab4e974702cfaf5eeb556d0f338f55bdb5f3c
        </Routes>
      </div>
    </BrowserRouter>
  );
}
