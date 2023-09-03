import styled from "styled-components"

export const VerticalBackground = (props: { source: string }) => {
  return <BackgroundContainer $src={`${props.source}`} />
}

const BackgroundContainer = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$src});
  background-size: cover;
`
