import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/adminRoutes";
import { constSidebarGenaretor } from "../../utils/sidebarItemGenaretor";

const { Sider } = Layout;

const role = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
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
        items={constSidebarGenaretor(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
