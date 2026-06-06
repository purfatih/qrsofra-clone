import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./index.css";
import { ContextProvider } from "./Context";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>,
);
