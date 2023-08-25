import React from "react"

import { Checkbox as AntCheckbox } from "antd"
import { CheckboxProps } from "antd/es/checkbox/Checkbox"

export const Input: React.FC<CheckboxProps> = ({ children, ...props }) => (
  <AntCheckbox {...props}>{children}</AntCheckbox>
)
