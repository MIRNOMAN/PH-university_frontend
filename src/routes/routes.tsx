import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import AdminDashboard from "../pages/Admin/AdminDashboard.js";
import CreateStudent from "../pages/Admin/CreateStudent.js";
import CreateAdmin from "../pages/Admin/CreateAdmin.js";
import CreateFaculty from "../pages/Admin/CreateFaculty.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
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
