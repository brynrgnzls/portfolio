import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Pages
import Root from "./pages/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
  },
]);

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
