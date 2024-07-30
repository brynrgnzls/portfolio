import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { v4 as uuidv4 } from "uuid";

// Pages
import Root from "./pages/Root.tsx";

// Fonts
import Test from "./pages/Test.tsx";
import "~/@fontsource/syne";

if (!localStorage.getItem("cookieId"))
  localStorage.setItem("cookieId", uuidv4());

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(<RouterProvider router={router} />);
