import React from "react"
import { graphql } from "gatsby"
import Layout from "~/layout.js"
import Resume from "~/resume.js"

export default function App(props) {
  const data = props.data.allSrcYaml.edges[0].node

  return (
    <Layout {...data.meta}>
      <Resume {...data} />
    </Layout>
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
            icon
          }
        }
      }
    }
  }
`
