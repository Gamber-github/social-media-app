import { UserOutlined } from "@ant-design/icons/lib/icons"
import Avatar from "antd/es/avatar/avatar"
import Badge from "antd/es/badge"
import { Header } from "antd/es/layout/layout"
import Space from "antd/es/space"

export const Navbar = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Space size={12}>
        <Badge count={0}>
          <Avatar
            shape="circle"
            icon={<UserOutlined />}
            size={48}
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          />
        </Badge>
      </Space>
    </Header>
  )
}
