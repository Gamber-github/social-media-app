import React from "react"

import { Typography } from "antd"
import { TitleProps } from "antd/es/typography/Title"

const { Title } = Typography

export const Header: React.FC<TitleProps> = ({ children, ...props }) => <Title {...props}>{children}</Title>
