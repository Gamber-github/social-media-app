import { useState } from "react"

import { SearchOutlined } from "@ant-design/icons/lib/icons"
import styled from "styled-components"

import { Search } from "../../ui/Input/Search"

export const SearchBar = () => {
  return (
    <SearchContainer>
      <div>Logo</div>
      <Search placeholder="Search in application" size="middle" style={{ height: 30, width: 200 }} />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`
