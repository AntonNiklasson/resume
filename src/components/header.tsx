const Container = styled.header`
  margin: 0 0 1em 0;

  h1 {
    text-align: center;
    border-bottom: 1px solid ${p => p.theme.border};
  }

  p {
    margin: 1em 0;
    font-size: 0.9em;
    padding: 1em 2em;
    position: relative;
    border-radius: 5px;
  }
`

export function Header({ title, description }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
