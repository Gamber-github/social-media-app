import { Content as AntContent } from "antd/es/layout/layout"
import Skeleton from "antd/es/skeleton"
import styled from "styled-components"

export const Content = () => {
  return (
    <AntContent className="site-layout" style={{ padding: "0 50px" }}>
      <ContentContainer>
        <Wall>
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
        </Wall>
      </ContentContainer>
    </AntContent>
  )
}

const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Wall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Card = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 250px;
  background-color: #e8e8e8;
  padding: 8px;
`
