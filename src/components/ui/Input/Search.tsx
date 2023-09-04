import React from "react"

import { Input } from "antd"
import { SearchProps } from "antd/es/input/Search"

const { Search: AntSearch } = Input

export const Search: React.FC<SearchProps> = ({ children, ...props }) => <AntSearch {...props}>{children}</AntSearch>
