import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import theme from "../theme.ts"
import { GlobalStyles } from "../globalStyles.tsx"
import { Header, Footer, Resume } from "../components/index.ts"

const Wrapper = styled.div`
  width: 100%;
  max-width: 21cm;
  margin: 1em auto;
  padding: 1em;
  background: ${p => p.theme.white};
  color: ${p => p.theme.text};

  a {
    text-decoration: none;
    color: ${p => p.theme.text};

    &:hover {
      color: ${p => p.theme.accent};
    }
  }

  @media (max-width: 21cm) {
    margin: 0;
    border: none;
    border-radius: unset;
  }
`

export default function App({ data }) {
  const content = data.allSrcYaml.edges[0].node

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <Wrapper>
        <Header {...content.meta} />
        <Resume {...content} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export const query = graphql`
  {
    allSrcYaml {
      edges {
        node {
          meta {
            title
            description
          }
          experiences {
            title
            organization
            logo
            time {
              from {
                month
                year
              }
              to {
                month
                year
              }
            }
            description
            tech
          }
          educations {
            title
            school
            time {
              from
              to
            }
          }
          skills {
            title
          }
          accounts {
            title
            url
          }
        }
      }
    }
  }
`
