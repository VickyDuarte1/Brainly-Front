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
import Comments from './Components/Comentarios/Coments';
<<<<<<< HEAD
=======
import PaymentForm from './Components/MpForm/PaymentForm';
import UserCloudinary from './Components/UserCloudinary/UserCloudinary';

>>>>>>> c4f7b80d7b0cf51d9353d663f4c381c45d28214b

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
          <Route  path = "/about"  element={<About/>}/>
          <Route  path = "/form"  element={<Form/>}/>
          <Route path = "/aboutUs" element={<TeamBrainly/>}/>
          <Route path = "/signin" element={<SignIn/>}/>
          <Route path = "/comments" element={<Comments/>}/>
<<<<<<< HEAD
=======
          <Route path='/payment' element={<PaymentForm />} />
          <Route path = '/images' element={<UserCloudinary/>}/>
>>>>>>> c4f7b80d7b0cf51d9353d663f4c381c45d28214b
        </Routes>
      </div>
    </BrowserRouter>
  );
}
