import React from "react"
import styled from "styled-components"

const Link = styled.a`
  background: ${p => p.theme.background};
  color: ${p => p.theme.text};

  &:hover {
    color: ${p => p.theme.accent};
  }
`

export function DownloadButton({ children, file }) {
  return <Link href={file}>{children}</Link>
}
