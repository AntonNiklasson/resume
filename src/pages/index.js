import React from "react"
import { graphql } from "gatsby"
import Resume from "../components/resume"

export default props => <Resume {...props.data.allSrcYaml.edges[0].node} />

export const query = graphql`
  {
    allSrcYaml {
      edges {
        node {
          meta {
            title
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
          }
          educations {
            title
            time {
              from
              to
            }
          }
        }
      }
    }
  }
`
