import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
// import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path= "/" component = {LandingPage} />
        {/* <Route  exact path="/home" component={Home} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
