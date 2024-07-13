import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeuLogin from './Pages/Login';
import MeuRegistro from "./Pages/Registro";
import MeuHome from "./Pages/Home";
import React from "react";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MeuLogin />} />
                    <Route path="/registro" element={<MeuRegistro />} />
                    <Route path="/home" element={<MeuHome />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
