// import "./i18n"

import { ConfigProvider } from "antd"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { router } from "./routes/router"
import { theme, styledConfig } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={styledConfig}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App
