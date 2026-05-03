import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import GroupPage from "./pages/GroupPage";
import CreateGroupPage from "./pages/CreateGroupPage";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/groups/:id"
        element={
          <PrivateRoute>
            <GroupPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" />} />
      <Route
        path="/groups/new"
        element={
          <PrivateRoute>
            <CreateGroupPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
