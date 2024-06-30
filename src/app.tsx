import { StrictMode } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="bg-red-400">Hello World</h1>,
  },
]);

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
