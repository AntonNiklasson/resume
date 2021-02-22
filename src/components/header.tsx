const Container = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0 0 1em 0;

  p {
    margin: 1em;
    font-size: 0.9em;
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
