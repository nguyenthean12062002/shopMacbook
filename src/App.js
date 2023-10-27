import React from "react";
import "./App.scss";

import { Container } from "react-bootstrap";
import { Header, Footer, Login } from "./Component/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home.js";
import Store from "./Component/Pages/Store/store.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <div className="main__container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
