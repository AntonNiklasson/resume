import React from 'react'
import styled from 'styled-components'
import emoji from 'node-emoji'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
  border-bottom: 1px solid ${p => p.theme.border};

  hgroup {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 2em;
    white-space: nobreak;

    @media (max-width: 700px) {
      font-size: 3em;
    }
  }

  .emoji {
    font-size: 2.2em;
  }
`
const MetaList = styled.ul`
  list-style: none;
  font-size: 0.9em;
  text-align: right;
  color: ${p => p.theme.textLight};
`

export default ({ title, contacts }) => (
  <Container>
    <hgroup>
      <h1>{title}</h1>
      <span className="emoji">{emoji.get('male-technologist')}</span>
    </hgroup>
    <MetaList>
      <li>antonniklasson.se</li>
      <li>github.com/antonniklasson</li>
      <li>linkedin.com/in/antonniklasson</li>
    </MetaList>
  </Container>
)
