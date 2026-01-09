import './App.css';
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {


  return (
    <>
      <div className="bg-stone-300 h-svh overflow-hidden">
          <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
