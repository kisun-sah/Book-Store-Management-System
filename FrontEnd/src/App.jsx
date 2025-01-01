import React, { Profiler } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allbooks from "./pages/Allbooks";
import About from "./pages/About";
import Profile from "./pages/profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-books" element={<Allbooks />} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
