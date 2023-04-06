import Atividade from "./pages/atividades/Atividade";
import { Route, Routes } from "react-router-dom";
import Cliente from "./pages/clientes/Cliente";
import ClienteForm from "./pages/clientes/ClienteForm";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import React from "react";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/atividade/*" element={<Atividade />} />
      <Route path="/atividade/:id/cliente" element={<Atividade />} />
      <Route path="/cliente/*" element={<Cliente />} />
      <Route path="/cliente/:id/atividade" element={<Atividade />} />
      <Route path="/cliente/detalhe/:id" element={<ClienteForm />} />
      <Route path="/cliente/detalhe/" element={<ClienteForm />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;