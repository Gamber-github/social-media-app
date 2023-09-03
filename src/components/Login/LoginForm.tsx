import Checkbox from "antd/es/checkbox/Checkbox"
import Space from "antd/es/space"
import { useNavigate } from "react-router-dom"

import { FormContainer } from "../../styles/form"
import { Button } from "../ui/Button/Button"
import { LoginInput } from "../ui/Input/LoginInput"
import { PasswordInput } from "../ui/Input/PasswordInput"
import { Link } from "../ui/Typography/Link"
import { Text } from "../ui/Typography/Text"
import { Title } from "../ui/Typography/Title"

export const LoginForm = () => {
  const navigate = useNavigate()

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
        <Text>
          Dont have an account? <Link onClick={() => navigate("/register")}>Register</Link>
        </Text>
      </Space>
    </FormContainer>
  )
}
