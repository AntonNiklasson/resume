import React from "react"
import styled from "styled-components"
import { DownloadButton } from "./downloadButton"

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1em 0;
  padding: 0 0 0.5em 0;
  border-bottom: 1px solid ${p => p.theme.border};

  h1 {
    flex: 1;
    font-size: 2em;
    white-space: nowrap;
  }
`

export default function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <DownloadButton file="anton.pdf">Download pdf</DownloadButton>
    </Container>
  )
}
