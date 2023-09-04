import styled from "styled-components"

import { RegisterForm } from "../components/Register/RegisterForm"
import { VerticalBackground } from "../components/ui/Background/VerticalBackground"
import { TwoColumns } from "../components/ui/TwoColumns/TwoColumns"
import background from "../images/register_background.jpg"

export const Register = () => {
  return (
    <RegisterContainer>
      <TwoColumns left={<VerticalBackground source={background} />} right={<RegisterForm />} />
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 90vh;
  margin: auto auto;
  -webkit-box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
`
