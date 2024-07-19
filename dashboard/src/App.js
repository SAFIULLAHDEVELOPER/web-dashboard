import Sidebar from "./screens/sidebar/Sidebar";
import Home from "./screens/home/Home";
import Order from "./screens/order/Order";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
