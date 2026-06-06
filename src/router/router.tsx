import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/layout/DashboardPage";
import RegisterDashboard from "../components/register/RegisterDashboard";
import LoginDashboard from "../components/login/LoginDashboard";
import ProtectedRoute from "../Auth";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginDashboard /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  { path: "/register", element: <RegisterDashboard /> },
]);
