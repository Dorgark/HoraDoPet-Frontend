import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div className="p-10 font-bold">Tela de Login / Cadastro (Sprint 19/11)</div>} />
        <Route path="/dashboard" element={<div className="p-10 font-bold">Dashboard do Tutor (Sprint 19/11)</div>} />
        <Route path="/meus-pets" element={<div className="p-10 font-bold">Meus Pets (Sprint 19/11)</div>} />
        <Route path="/agendar" element={<div className="p-10 font-bold">Wizard de Agendamento (Sprint 19/11)</div>} />
      </Routes>
    </BrowserRouter>
  );
}