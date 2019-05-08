import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import { andify } from "../utils";

const Container = styled.div`
  margin: 0 0 2em 0;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
  font-size: 1.1em;

  time {
    font-size: 0.8em;
    font-weight: bold;
    color: ${p => p.theme.textLight};
  }
`;
const Body = styled.div`
  margin: 0;
  font-size: 0.9em;

  p {
    margin: 0 0 1em 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const Tech = styled.div`
  margin: 0.5em 0;
  padding: 0.5em;
  background: ${p => p.theme.backgroundSecondary};
  border-radius: 4px;
  font-size: 0.9em;

  h3 {
    display: inline;
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    color: ${p => p.theme.textLight};
  }
`;

export default function ExperienceItem({
  title,
  organization,
  time,
  description,
  tech
}) {
  return (
    <Container>
      <Header>
        <h3>
          {title} at {organization}
        </h3>
        <time>
          {time.from.month}.{time.from.year}
          {time.to ? ` - ${time.to.month}.${time.to.year}` : " -"}
        </time>
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
  );
}
