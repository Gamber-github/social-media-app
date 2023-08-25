import React from "react"

import { Layout } from "antd"

const { Header, Footer, Sider, Content } = Layout

function Login() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider />
        <Content>Siema</Content>
        <Sider />
      </Layout>
      <Footer />
    </Layout>
  )
}

export default Login
