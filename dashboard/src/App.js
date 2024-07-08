import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Order from "./Order";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
