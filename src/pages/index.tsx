import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { Resume } from "../components/index.ts"

export default function App({ data }) {
  const content = data.allSrcYaml.edges[0].node

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <div className="max-w-lg mx-auto">
        <header className="py-4">
          <h1 className="text-2xl">Anton Niklasson | Resume</h1>
        </header>
        <Resume {...content} />
      </div>
    </>
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
