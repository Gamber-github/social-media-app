import React, { ReactNode } from "react"

import { Button as AntdButton } from "antd"
import { ButtonProps } from "antd/es/button/button"

type AntdButtonProps = ButtonProps

export const Button: React.FC<AntdButtonProps & { children: ReactNode }> = ({ children, ...props }) => (
  <AntdButton type="primary" {...props}>
    {children}
  </AntdButton>
)
