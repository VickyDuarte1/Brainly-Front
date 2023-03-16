
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import UsersDetails from './Components/UsersDetails';
import Users from './Components/Users';
import Doctors from './Components/Doctors'
import DoctorsDetails from './Components/DoctorsDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<UsersDetails/>} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
