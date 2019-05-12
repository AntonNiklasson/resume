import React from "react"
import styled from "styled-components"

const Item = styled.div`
  margin: 1em 0;
  font-size: 14px;

  h4 {
    color: ${p => p.theme.textSecondary};
  }
`

export default function EducationItem({ title, school }) {
  return (
    <Item>
      <h3>{title}</h3>
      <h4>{school}</h4>
    </Item>
  )
}
