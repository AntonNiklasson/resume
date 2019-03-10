import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  padding: 1em 0 2em 0;
  text-align: center;
  color: ${p => p.theme.textLight};
  font-size: 0.8em;

  a {
		color: ${p => p.theme.textLight};
  }
`

export default function Footer() {
  return (
    <Container>
      Icons from <a href="https://fontawesome.com/license">FontAwesome</a>
    </Container>
  )
}
