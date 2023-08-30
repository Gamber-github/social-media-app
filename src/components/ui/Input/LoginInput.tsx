import React from "react"

import { UserOutlined } from "@ant-design/icons/lib/icons"
import { Input as AntdInput } from "antd"
import { InputProps } from "antd/es/input/Input"

export const LoginInput: React.FC<InputProps> = ({ children, ...props }) => (
  <AntdInput placeholder="Username" prefix={<UserOutlined />} {...props}>
    {children}
  </AntdInput>
)
