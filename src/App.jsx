import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";




function App() {
  return (
    <div className="flex-container ">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>

  );
}

export default App;
