import StudentDashboard from "../pages/Student/StudentDashboard";
import StudentOfferedCourse from "../pages/Student/StudentOfferedCourse";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered courses",
    path: "offered-courses",
    element: <StudentOfferedCourse />,
  },
];
