import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import { lightTheme } from "../theme.js"
import { GlobalStyles } from "../globalStyles.js"
import { Footer, Resume } from "../components"

export default function App({ data }) {
  const content = data.allSrcYaml.edges[0].node

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <Resume {...content} />
      <Footer />
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
