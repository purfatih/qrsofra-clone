import { createBrowserRouter } from "react-router-dom";

import RegisterDashboard from "../components/register/register-dashboard";
import LoginDashboard from "../components/login/login-dashboard";
import ProtectedRoute from "../auth/Auth";
import LandingPage from "../pages/layout/landing-page";
import CreateRestaurant from "../pages/restaurant/create-restaurant";
import DashboardLayout from "../pages/layout/dashboard-layout";
import Dashboard from "../pages/dashboard/Dashboard";
import HomePage from "../pages/home/home-page";
import Branch from "../components/side-navigation/Branch";
import Category from "../components/side-navigation/Category";
export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginDashboard /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "create-restaurant",
            element: <CreateRestaurant />,
          },
          {
            element: <HomePage />,
            children: [
              {
                path: "branches/list",
                element: <Branch />,
              },
              {
                path: "categories/list",
                element: <Category />,
              },
            ],
          },
        ],
      },
    ],
  },

  { path: "/register", element: <RegisterDashboard /> },
]);
