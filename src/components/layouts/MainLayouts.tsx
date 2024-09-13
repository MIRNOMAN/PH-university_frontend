import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: "Use Management",
    label: "Use Management",
    children: [
      {
        key: "Create admin",
        label: <NavLink to="/admin/create-admin">Create admin</NavLink>,
      },
      {
        key: "Create student",
        label: <NavLink to="/admin/create-student">Create student</NavLink>,
      },
      {
        key: "create faculty",
        label: <NavLink to="/admin/create-faculty">create faculty</NavLink>,
      },
    ],
  },
];

const MainLayouts = () => {
  return (
    <Layout style={{ height: "100vh" }}>
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
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;
