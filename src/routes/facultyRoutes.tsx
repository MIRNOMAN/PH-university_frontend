import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import FacultyOfferedCourse from "../pages/Faculty/FacultyOfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered courses",
    path: "offered-courses",
    element: <FacultyOfferedCourse />,
  },
];
