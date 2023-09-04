import { BellOutlined, HolderOutlined, UserOutlined } from "@ant-design/icons/lib/icons"
import Avatar from "antd/es/avatar/avatar"
import Badge from "antd/es/badge"
import Space from "antd/es/space"
import styled from "styled-components"

export const Settings = () => {
  return (
    <SettingContainer>
      <Space size={18}>
        <Badge>
          <Avatar
            shape="circle"
            icon={<HolderOutlined />}
            size={40}
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          />
        </Badge>

        <Badge count={12} size="small">
          <Avatar
            shape="circle"
            icon={<BellOutlined />}
            size={40}
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          />
        </Badge>
        <Badge>
          <Avatar
            shape="circle"
            icon={<UserOutlined />}
            size={40}
            style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
          />
        </Badge>
      </Space>
    </SettingContainer>
  )
}

const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`
