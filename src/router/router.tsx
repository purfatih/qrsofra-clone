import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/register/RegisterPage";
import Login from "../pages/login/LoginPage";
import Dashboard from "../pages/layout/DashboardPage";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);
