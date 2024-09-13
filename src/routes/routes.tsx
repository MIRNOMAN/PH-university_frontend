import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
