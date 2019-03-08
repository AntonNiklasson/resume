import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'

const Container = styled.div`
  margin: 1em 0;
`
const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;

  time {
		font-size: .9em;
    color: ${p => p.theme.textLight};
  }
`
const Body = styled.div`
	margin: 0;
  font-size: 0.9em;
`

export default ({ title, organization, time, description }) => (
  <Container>
    <Header>
      <h3>
        {title} at {organization}
      </h3>
      <time>
        {time.from.month}.{time.from.year}
        {time.to ? ` - ${time.to.month}.${time.to.year}` : ' - Present'}
      </time>
    </Header>
    <Body>
      <Markdown source={description} />
    </Body>
  </Container>
)
