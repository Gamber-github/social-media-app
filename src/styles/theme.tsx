export const theme = {
    colors: {
      primary: "#2698d0",
      warning: "#D1A411",
      danger: "#D1623B",
      success: "#1BD1AB",
      white: "#ffffff",
      black: "#000000",
      sidebar: "#bbbbb7",
      grey: "#999999",
      pageBackground: "#F3F9FF",
      neutral_2: "#FAFAFA",
      neutral_5: "#D9D9D9",
      accentColor: "#009DDA",
    },
    breakpoints: {
      mobile: 480,
      tablet: 768,
      small: 1200,
    } as const,
    zIndexes: {
      sidebar: 2,
      navbar: 1,
      corner: 1,
    },
    dimentions: {
      SIDEBAR_WIDTH: "15rem",
      NAVBAR_HEIGHT: "5rem",
    },
  }

export type Breakpoint = keyof (typeof theme)["breakpoints"]

export const styledConfig = {
  token: {
    colorPrimary: theme.colors.primary,
    borderRadius: 0,
  },
}
