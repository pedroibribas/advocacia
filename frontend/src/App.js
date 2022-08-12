import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { AuthProvider, useAuth } from "./helpers/providers/AuthProvider";
import { ClientsProvider } from './helpers/providers/ClientsProvider';
import { Client } from './pages/Client';
import { Edit } from './pages/Edit';
import { Login } from "./pages/Login";
import { Home } from './pages/Home';

// Styles
import { GlobalStyle } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import { Create } from './pages/Create';

function App() {
  const { user } = useAuth();

  return (
    <ClientsProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/create" element={<Create />} />
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
