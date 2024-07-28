import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
