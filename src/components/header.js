const Container = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0 0 1em 0;
  padding: 0 0 0.5em 0;
  border-bottom: 1px solid ${p => p.theme.border};

  h1 {
    flex: 1;
    font-size: 2em;
    white-space: nowrap;
  }

  h2 {
    font-size: 1.2em;
  }
`

export function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}
