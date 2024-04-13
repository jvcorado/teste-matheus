import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Person from "./pages/person";
import Error from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/person/:name",
    element: <Person />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export { router };
