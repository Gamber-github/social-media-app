// import React from "react"

import Layout from "antd/es/layout/layout"

import { Content } from "../components/Dashboard/Content/Content"
import { Navbar } from "../components/Dashboard/Navbar/Navbar"

export const Dashboard = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Content />
      </Layout>
    </>
  )
}
