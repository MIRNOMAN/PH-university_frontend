import AcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/Admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/Admin/AcademicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAcademicDepartment from "../pages/Admin/AcademicManagement/CreateAcademicDepartment";
import CreateAdmin from "../pages/Admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/Admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/Admin/userManagement/CreateStudent";
import CreateAcademicFaculty from "../pages/Faculty/CreateAcademicFaculty";
import StudentData from "../pages/Admin/userManagement/StudentData";
import StudentDetails from "../pages/Admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/Admin/courseManagement/SemesterRegistration";
import RegisteredSemesters from "../pages/Admin/courseManagement/RegisteredSemesters";
import CreateCourse from "../pages/Admin/courseManagement/CreateCourse";
import Courses from "../pages/Admin/courseManagement/Courses";
import OfferCourse from "../pages/Admin/courseManagement/OfferCourse";
import OfferedCourses from "../pages/Admin/courseManagement/OfferedCourses";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create-Academic Semester",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semesters",
        element: <AcademicSemester />,
      },
      {
        name: "Create-Academic Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create-Academic Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: 'Students',
        path: 'students-data',
        element: <StudentData />,
      },
      {
        path: 'student-data/:studentId',
        element: <StudentDetails />,
      },
      {
        name: "Create admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
  {
    name: 'Course Management',
    children: [
      {
        name: 'Semester Registration',
        path: 'semester-registration',
        element: <SemesterRegistration />,
      },
      {
        name: 'Registered Semesters',
        path: 'registered-semesters',
        element: <RegisteredSemesters />,
      },
      {
        name: 'Create Course',
        path: 'create-course',
        element: <CreateCourse />,
      },
      {
        name: 'Courses',
        path: 'courses',
        element: <Courses/>,
      },
      {
        name: 'Offer Course',
        path: 'offer-course',
        element: <OfferCourse />,
      },
      {
        name: 'Offered Courses',
        path: 'offered-courses',
        element: <OfferedCourses />,
      },
    ],
  },
];

// export const newArray = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

// export const adminSideBarItem = adminPaths.reduce(
//   (acc: TSideBarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );
