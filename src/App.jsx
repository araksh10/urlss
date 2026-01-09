import './App.css';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {


  return (
    <>
      <div className="bg-stone-300 h-svh overflow-x-hidden">
          <Navbar />
        <Home />
          <Footer />
      </div>
    </>
  )
}

export default App
