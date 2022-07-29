import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Login } from "./pages/Login";
import { Dashboard } from './pages/Dashboard';
import { useAuth } from "./helpers/hooks/useAuth";
import { AuthProvider } from "./helpers/providers/AuthProvider";
import { ClientsProvider } from './helpers/providers/ClientsProvider';

// Styles
import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useAuth();

  return (
    <ClientsProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Login />} />
            <Route path="/login" element={user ? <Dashboard /> : <Login />} />
          </Routes>
          <GlobalStyle />
          <ToastContainer />
        </Router>
      </AuthProvider>
    </ClientsProvider>
  );
}

export default App;
