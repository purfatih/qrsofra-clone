import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

// PublicRoute.tsx
function PublicRoute() {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export { ProtectedRoute, PublicRoute };
