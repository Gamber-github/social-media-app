// import "./i18n"

import { ConfigProvider } from "antd"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { router } from "./routes/router"
import { MockedStoreContextProvider } from "./store/storeProvider"
import { theme, styledConfig } from "./styles/theme"

export const App = () => {
  return (
    <MockedStoreContextProvider>
      <ThemeProvider theme={theme}>
        <ConfigProvider theme={styledConfig}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </ThemeProvider>
    </MockedStoreContextProvider>
  )
}
