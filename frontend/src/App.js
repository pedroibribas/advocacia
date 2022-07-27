import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Login } from "./pages/Login";
import { useAuth } from "./helpers/hooks/useAuth";
import { AuthProvider } from "./helpers/providers/AuthProvider";
import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import { LogoutButton } from './components/LogoutButton';

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={user ? <LogoutButton /> : <Login />} />
          <Route path="/login" element={user ? <LogoutButton /> : <Login />} />
        </Routes>
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;
