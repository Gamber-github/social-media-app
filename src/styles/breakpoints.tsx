import { CSSObject, FlattenSimpleInterpolation, css } from "styled-components"

import { theme } from "./theme"

type Styles = FlattenSimpleInterpolation | CSSObject

export const desktopSmall = (styles: Styles) => css`
  @media screen and (max-width: ${theme.breakpoints.small + "px"}) {
    ${styles};
  }
`

export const tablet = (styles: Styles) => css`
  @media screen and (max-width: ${theme.breakpoints.tablet + "px"}) {
    ${styles};
  }
`

export const mobile = (styles: Styles) => css`
  @media screen and (max-width: ${theme.breakpoints.mobile + "px"}) {
    ${styles};
  }
`
