import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import InitialPage from './pages/InitialPage/InitialPage';
import CardDetailPage from './pages/CardDetailPage/CardDetailPage';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Rotas Públicas (acessíveis sem login) */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rotas Protegidas (exigem login) */}
      {/* Envolve as rotas que você quer proteger com ProtectedRoute */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<InitialPage />} />
        <Route path="/cards/:id" element={<CardDetailPage />} />
      </Route>

      {/* Opcional: Rota para 404 (página não encontrada) */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;