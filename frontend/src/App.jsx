import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <ProtectedRoute>  <Dashboard /> </ProtectedRoute> }/>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/history" element={ <ProtectedRoute> <History /> </ProtectedRoute>} />

        <Route path="/profile" element={<ProtectedRoute> <Profile />  </ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />

        <Route path="/result" element={<ProtectedRoute>  <Result /> </ProtectedRoute>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;