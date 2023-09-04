import { Col, Row } from "antd"
import { Header } from "antd/es/layout/layout"

import { SearchBar } from "./SearchBar"
import { Settings } from "./Settings"

export const Navbar = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Row gutter={16}>
        <Col span={8}>
          <SearchBar />
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <Settings />
        </Col>
      </Row>
    </Header>
  )
}
