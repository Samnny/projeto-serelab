import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import InitialPage from './pages/InitialPage/InitialPage';
import CardDetailPage from './pages/CardDetailPage/CardDetailPage';
import ProtectedRoute from '../src/components/ProtectedRoute/ProtectedRoute';
import DiagramPage from './pages/DiagramPage/DiagramPage';
import SuccessCasesPage from './pages/SuccessCasesPage/SuccessCasesPage';
import StorytellingPage from './pages/StorytellingPage/StorytellingPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';

function App() {
  return (
    <Routes>
      {/* Rotas Públicas (acessíveis sem login) */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Rotas Protegidas (exigem login) */}
      {/* Envolve as rotas que você quer proteger com ProtectedRoute */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<InitialPage />} />
        <Route path="/cards/:id" element={<CardDetailPage />} />
        <Route path="/diagram" element={<DiagramPage />} />
        <Route path="/storytelling" element={<StorytellingPage />} />
        <Route path="/success-cases" element={<SuccessCasesPage />} />
      </Route>

      {/* Opcional: Rota para 404 (página não encontrada) */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;