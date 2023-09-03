import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons/lib/icons"
import Space from "antd/es/space"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import { FormContainer } from "../../styles/form"
import { Button } from "../ui/Button/Button"
import { Input } from "../ui/Input/Input"
import { PasswordInput } from "../ui/Input/PasswordInput"
import { Link } from "../ui/Typography/Link"
import { Text } from "../ui/Typography/Text"
import { Title } from "../ui/Typography/Title"

export const RegisterForm = () => {
  const isPasswordValid = true
  const isConfirmPasswordValid = true
  const isEmailValid = true
  const isConfirmEmailValid = true

  const navigate = useNavigate()

  return (
    <FormContainer>
      <Title level={1}>Register</Title>
      <Space direction="vertical">
        <Text>Here is a text about register to a portal</Text>
        <FormInputs>
          <Input placeholder={"First name"} prefix={<UserOutlined />} />
          <Input placeholder={"Last Name"} prefix={<UserOutlined />} />
          <Input placeholder={"Email"} prefix={<MailOutlined />} status={isEmailValid ? "" : "error"} />
          <Input placeholder={"Confirm Email"} prefix={<MailOutlined />} status={isConfirmEmailValid ? "" : "error"} />
          <PasswordInput placeholder={"Password"} prefix={<LockOutlined />} status={isPasswordValid ? "" : "error"} />
          <PasswordInput
            placeholder={"Confirm Password"}
            prefix={<LockOutlined />}
            status={isConfirmPasswordValid ? "" : "error"}
          />
          <Button style={{ width: "100%" }}>Register</Button>
        </FormInputs>
      </Space>

      <Text>
        Already registered? <Link onClick={() => navigate("/login")}>Login</Link>
      </Text>
    </FormContainer>
  )
}

const FormInputs = styled.div`
  display: grid;
  grid-gap: 8px;
  width: 100%;
`
