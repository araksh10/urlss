import './App.css';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";

import {BrowserRouter as Brouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <Brouter>
      <div className="bg-stone-300 h-svh overflow-x-hidden">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/register" element={<Register/>} />
          </Routes>
          <Footer />
      </div>
    </Brouter>
  )
}

export default App
