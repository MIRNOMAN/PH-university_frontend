import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/adminRoutes";
import { SidebarGenaretor } from "../../utils/sidebarItemGenaretor";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";
import { useAppSelector } from "../../redux/hooks";
import { Tuser, useCurentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const token = useAppSelector(useCurentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as Tuser)!.role) {
    case userRole.ADMIN:
      sidebarItems = SidebarGenaretor(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = SidebarGenaretor(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = SidebarGenaretor(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
