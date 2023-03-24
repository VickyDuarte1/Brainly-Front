import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import UsersDetails from './Components/Users/UsersDetails';
import Users from './Components/Users/Users';
import Doctors from './Components/Doctors/Doctors'
import DoctorsDetails from './Components/Doctors/DoctorsDetails';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TeamBrainly from './Components/TeamBrainly/TeamBrainly'
import Form from "./Components/Form/Form";
import SignIn from './Components/SignIn/SignIn';
import UserCloudinary from './Components/UserCloudinary/UserCloudinary';
import PaymentForm from './Components/MpForm/PaymentForm';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/payment" element={<PaymentForm/>} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<UsersDetails/>} />
          <Route path="/users" element={<Users/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/doctors/:id" element={<DoctorsDetails/>}/>
          <Route  path = "/about"  element={<About/>}/>
          <Route  path = "/form"  element={<Form/>}/>
          <Route path = "/aboutUs" element={<TeamBrainly/>}/>
          <Route path = "/signin" element={<SignIn/>}/>
          <Route path ="/images" element ={<UserCloudinary/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
