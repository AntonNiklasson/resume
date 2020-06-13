const Container = styled.footer`
  padding: 1em 0 2em 0;
  text-align: center;
  color: ${p => p.theme.textLight};
  font-size: 0.7em;

  @media print {
    display: none;
  }

  a {
    color: ${p => p.theme.textSecondary};
  }
`

export default function Footer() {
  return <Container></Container>
}
