import './App.css';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
