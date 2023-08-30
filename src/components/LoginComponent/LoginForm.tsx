import Checkbox from "antd/es/checkbox/Checkbox"
import Space from "antd/es/space"
import styled from "styled-components"

import { Button } from "../ui/Button/Button"
import { LoginInput } from "../ui/Input/LoginInput"
import { PasswordInput } from "../ui/Input/PasswordInput"
import { Title } from "../ui/Typography/Title"

export const LoginForm = () => {
  return (
    <FormContainer>
      <Title level={1}>Login</Title>
      <Space direction="vertical">
        <LoginInput size="large" />
        <PasswordInput placeholder="Password" size="large" />

        <Checkbox>Renmeber me</Checkbox>
        <Button size="large" style={{ width: "100%" }}>
          Login
        </Button>
      </Space>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
