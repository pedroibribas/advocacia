import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { useAuth } from "./helpers/hooks/useAuth";
import { AuthProvider } from "./helpers/providers/AuthProvider";
import { ClientsProvider } from './helpers/providers/ClientsProvider';
import { Client } from './pages/Client';
import { Edit } from './pages/Edit';
import { Login } from "./pages/Login";
import { Home } from './pages/Home';
import { Register } from './pages/Register';

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
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/client/:id" element={<Client />} />
            <Route path="/client/edit/:id" element={<Edit />} />
          </Routes>
          <GlobalStyle />
          <ToastContainer />
        </Router>
      </AuthProvider>
    </ClientsProvider>
  );
}

export default App;
