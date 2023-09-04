import { useEffect, useState } from "react"

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

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const RegisterForm = () => {
  const [password, setPassword] = useState<string>("")
  const [validPassword, setValidPassword] = useState<boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false)

  const [matchPassword, setMatchPassword] = useState<string>("")
  const [validMatch, setvalidMatch] = useState<boolean>(false)
  const [matchPasswordFocus, setMatchPasswordFocus] = useState<boolean>(false)

  const [email, setEmail] = useState<string>("")
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [emailFocus, setEmailFocus] = useState<boolean>(false)

  const [matchEmail, setMatchEmail] = useState<string>("")
  const [validEmailMatch, setvalidEmailMatch] = useState<boolean>(false)

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password))
    setvalidMatch(password === matchPassword)
  }, [password, matchPassword])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
    setvalidEmailMatch(email === matchEmail)
  }, [email, matchEmail])

  const navigate = useNavigate()

  return (
    <FormContainer>
      <Title level={1}>Sign In</Title>

      <FormInputs>
        <Input placeholder={"First name"} prefix={<UserOutlined />} size={"large"} />
        <Input placeholder={"Last Name"} prefix={<UserOutlined />} size={"large"} />
        <Input
          size={"large"}
          placeholder={"Email"}
          prefix={<MailOutlined />}
          status={emailFocus && !validEmail ? "error" : ""}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <Input
          size={"large"}
          placeholder={"Confirm Email"}
          prefix={<MailOutlined />}
          status={validEmailMatch ? "" : "error"}
          onChange={(e) => setMatchEmail(e.target.value)}
        />
        <PasswordInput
          placeholder={"Password"}
          prefix={<LockOutlined />}
          status={passwordFocus && !validPassword ? "error" : ""}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        {passwordFocus && !validPassword ? (
          <Text type="danger" style={{ fontSize: 12 }}>
            4 to 24 characters. <br />
            Must begin with a letter. <br />
            Letters, numbers, underscores, hyphens allowed.
          </Text>
        ) : (
          <></>
        )}
        <PasswordInput
          placeholder={"Confirm Password"}
          prefix={<LockOutlined />}
          status={matchPasswordFocus && !validMatch ? "error" : ""}
          onChange={(e) => setMatchPassword(e.target.value)}
          onFocus={() => setMatchPasswordFocus(true)}
          onBlur={() => setMatchPasswordFocus(false)}
        />
        {matchPasswordFocus && !validMatch ? (
          <Text type="danger" style={{ fontSize: 12 }}>
            Must match the password.
          </Text>
        ) : (
          <></>
        )}
        <Button
          style={{ width: "100%", marginTop: 24 }}
          disabled={!validEmail || !validEmailMatch || !validPassword || !validMatch ? true : false}
        >
          Register
        </Button>
      </FormInputs>

      <Text>
        Already registered? <Link onClick={() => navigate("/login")}>Login</Link>
      </Text>
    </FormContainer>
  )
}

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
`
