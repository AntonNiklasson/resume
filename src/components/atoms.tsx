import styled from 'styled-components'

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "sidebar main";
  grid-gap: 1em;
`
