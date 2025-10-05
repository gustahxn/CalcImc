import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";
import "./App.css";

function App() {
  const [imc, setImc] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 transition-colors duration-300">
        <Header />
        <AppRoutes setImc={setImc} imc={imc} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
