import React from "react"

import { Input as AntdInput } from "antd"
import { InputProps } from "antd/es/input/Input"

export const Input: React.FC<InputProps> = ({ children, ...props }) => <AntdInput {...props}>{children}</AntdInput>
