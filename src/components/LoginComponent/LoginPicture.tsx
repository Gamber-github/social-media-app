import styled from "styled-components"

import background from "./login_background.jpg"

export const LoginPicture = () => {
  return <BackgroundContainer></BackgroundContainer>
}

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
`
