import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import { adminPaths } from "./adminRoutes.js";
import { routeGenarator } from "../utils/routesGenarator.js";
import { facultyPaths } from "./facultyRoutes.js";
import { studentPaths } from "./studentRoutes.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenarator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenarator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenarator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
