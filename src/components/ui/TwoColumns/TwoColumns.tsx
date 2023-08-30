import React from "react"

import styled, { css } from "styled-components"

import { tablet } from "../../../styles/breakpoints"

type TwoColumnsProps = {
  left: React.ReactNode
  right: React.ReactNode
}

export const TwoColumns: React.FC<TwoColumnsProps> = ({ left, right }) => (
  <Wrapper>
    <Column>{left}</Column>
    <Column>{right}</Column>
  </Wrapper>
)

const desktopStyles = css`
  grid-template-columns: 1fr;
  grid-template-rows: 2;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  height: 100%;
  ${tablet(desktopStyles)};
`

const Column = styled.div``
