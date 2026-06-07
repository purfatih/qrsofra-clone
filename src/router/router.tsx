import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/layout/DashboardPage";
import RegisterDashboard from "../components/register/RegisterDashboard";
import LoginDashboard from "../components/login/LoginDashboard";
import ProtectedRoute from "../auth/Auth";
import LandingPage from "../pages/layout/LandingPage";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginDashboard /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  { path: "/register", element: <RegisterDashboard /> },
]);
