import React from "react"
import styled from "styled-components"
import emoji from "node-emoji"

const Container = styled.header`
  margin: 0 0 1em 0;
  padding: 1em 0;
  text-align: center;

  h1 {
    font-size: 3em;
    white-space: nobreak;

    @media (max-width: 700px) {
      font-size: 3em;
    }
  }
`

export default ({ title, contacts }) => (
  <Container>
    <h1>
      {title}
      <span className="emoji">{emoji.get("male-technologist")}</span>
    </h1>
  </Container>
)
