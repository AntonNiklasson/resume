import React from 'react'
import styled from 'styled-components'
import emoji from 'node-emoji'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
	padding: 0 0 .5em 0;
  border-bottom: 1px solid ${p => p.theme.border};

  h1 {
    font-size: 2em;
		white-space: nowrap;
  }

	@media (max-width: 16cm) {
		flex-direction: column;
		align-items: center;
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
    <h1>{title}</h1>
    <MetaList>
      <li>www.antn.se</li>
    </MetaList>
  </Container>
)
