import React from "react"

import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons/lib/icons"
import { Input as AntdInput } from "antd"
import { InputProps } from "antd/es/input/Input"

export const PasswordInput: React.FC<InputProps> = ({ children, ...props }) => (
  <AntdInput.Password
    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    prefix={<LockOutlined />}
    {...props}
  >
    {children}
  </AntdInput.Password>
)
