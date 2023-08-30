import React from "react"

import { Typography } from "antd"
import { LinkProps } from "antd/es/typography/Link"

const { Link: AntLink } = Typography

export const Link: React.FC<LinkProps> = ({ children, ...props }) => <AntLink {...props}>{children}</AntLink>
