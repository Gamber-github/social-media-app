import styled from "styled-components"

import { LoginForm } from "../components/LoginComponent/LoginForm"
import { LoginPicture } from "../components/LoginComponent/LoginPicture"
import { TwoColumns } from "../components/ui/TwoColumns/TwoColumns"

export const Login = () => {
  return (
    <LoginContainer>
      <TwoColumns left={<LoginForm />} right={<LoginPicture />}></TwoColumns>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  width: 600px;
  height: 90vh;
  margin: auto auto;
  -webkit-box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
`
