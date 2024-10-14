import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import { adminPaths } from "./adminRoutes.js";
import { routeGenarator } from "../utils/routesGenarator.js";
import { facultyPaths } from "./facultyRoutes.js";
import { studentPaths } from "./studentRoutes.js";
import ProtectedRoute from "../components/layouts/ProtectedRoute.js";
import ChangePassword from "../pages/ChangePassword.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenarator(adminPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role="faculty">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenarator(facultyPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role="student">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenarator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/change-password',
    element: <ChangePassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
