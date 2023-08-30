import React from "react"

import { Input } from "antd"
import { TextAreaProps } from "antd/es/input/TextArea"

const { TextArea: AntTextArea } = Input

export const TextArea: React.FC<TextAreaProps> = ({ children, ...props }) => (
  <AntTextArea showCount {...props}>
    {children}
  </AntTextArea>
)
