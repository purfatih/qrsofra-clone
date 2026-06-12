import { createBrowserRouter } from "react-router-dom";

import RegisterDashboard from "../components/register/register-dashboard";
import LoginDashboard from "../components/login/login-dashboard";
import { ProtectedRoute, PublicRoute } from "../auth/Auth";
import LandingPage from "../pages/layout/landing-page";
import CreateRestaurant from "../pages/restaurant/create-restaurant";
import DashboardLayout from "../pages/layout/dashboard-layout";
import Dashboard from "../pages/dashboard/Dashboard";
import HomePage from "../pages/home/home-page";
import Branch from "../components/side-navigation/Branch";
import Category from "../components/side-navigation/Category";
import NewBranch from "../components/create/new-branch";
import BranchEdit from "../components/edit/branch-edit";
import NewCategory from "../components/create/new-category";
import CategoryEdit from "../components/edit/category.edit";
export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },

  {
    element: <PublicRoute />,
    children: [
      { path: "/register", element: <RegisterDashboard /> },
      { path: "/login", element: <LoginDashboard /> },
    ],
  },
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
                path: "branches/new",
                element: <NewBranch />,
              },
              {
                path: "branches/edit/:id",
                element: <BranchEdit />,
              },
              {
                path: "categories/list",
                element: <Category />,
              },
              {
                path: "categories/new",
                element: <NewCategory />,
              },
              {
                path: "categories/edit/:id",
                element: <CategoryEdit />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
