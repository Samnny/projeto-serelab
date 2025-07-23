import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
// import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ListCardsPage from './pages/ListCardsPage/ListCardsPage';
// import CardDetailPage from './pages/CardDetailPage/CardDetailPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cards" element={<ListCardsPage />} />
      {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/cards/:id" element={<CardDetailPage />} />
        <Route path="*" element={<NotFoundPage />} /> Rota para 404 */}
    </Routes>
  );
}

export default App;