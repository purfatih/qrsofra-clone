import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./index.css";
import { ContextProvider as DataProvider } from "./context/data/data-context";
import { ContextProvider as StateProvider } from "./context/state/state-context";
import { ContextProvider as EventProvider } from "./context/func-event/event-context";

createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <DataProvider>
      <EventProvider>
        <RouterProvider router={router} />
      </EventProvider>
    </DataProvider>
  </StateProvider>,
);
