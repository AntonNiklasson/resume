import React from "react"
import styled from "styled-components"
import Markdown from "react-markdown"
import { andify } from "../utils"

const Container = styled.div`
  margin: 0 0 1.5em 0;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`
const Header = styled.header`
  h4,
  time {
    font-weight: bold;
    color: ${p => p.theme.textSecondary};
  }

  img {
    height: 2.5em;
  }
`
const Body = styled.div`
  margin: 0.5em 0;
  font-size: 0.875rem;

  p {
    margin: 0 0 1em 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
const Tech = styled.div`
  margin: 1em;
  padding: 0.5em;
  font-size: 0.9em;
  border-left: 3px solid ${p => p.theme.border};

  h3 {
    display: inline;
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    color: ${p => p.theme.textLight};
  }
`

export default function ExperienceItem({
  title,
  organization,
  time,
  logo,
  description,
  tech
}) {
  return (
    <Container>
      <Header>
        <h3>{title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>{organization}</h4>
          <time>
            {time.from.month}.{time.from.year}
            {time.to ? ` - ${time.to.month}.${time.to.year}` : " -"}
          </time>
        </div>
        {logo && <img src={require(`../logos/${logo}`)} />}
      </Header>
      <Body>
        <Markdown source={description} />
      </Body>
      {tech && (
        <Tech>
          <h3>Tech: </h3>
          {andify(tech)}
        </Tech>
      )}
    </Container>
  )
}
