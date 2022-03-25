import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import OurMenu from "./pages/OurMenu";
import Error from "./pages/Error";
function App() {
  return (
    <CssBaseline>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ourMenu" element={<OurMenu />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </CssBaseline>
  );
}

export default App;
