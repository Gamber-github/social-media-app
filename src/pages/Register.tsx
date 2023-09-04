import styled from "styled-components"

<<<<<<< HEAD
import { RegisterForm } from "../components/Register/RegisterForm"
import { VerticalBackground } from "../components/ui/Background/VerticalBackground"
import { TwoColumns } from "../components/ui/TwoColumns/TwoColumns"
import background from "../images/register_background.jpg"
=======
import background from "../../public/register_background.jpg"
import { RegisterForm } from "../components/Register/RegisterForm"
import { VerticalBackground } from "../components/ui/Background/VerticalBackground"
import { TwoColumns } from "../components/ui/TwoColumns/TwoColumns"
>>>>>>> main

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
<<<<<<< HEAD
  width: 800px;
=======
  width: 600px;
>>>>>>> main
  height: 90vh;
  margin: auto auto;
  -webkit-box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 40px -9px rgba(66, 68, 90, 1);
`
