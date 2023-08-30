import React from "react"

import { Typography } from "antd"
import { TextProps } from "antd/es/typography/Text"

const { Text: AntText } = Typography

export const Text: React.FC<TextProps> = ({ children, ...props }) => <AntText {...props}>{children}</AntText>
