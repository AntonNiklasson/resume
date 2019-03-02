import React from "react"
import styled from "styled-components"
import Header from "./header"
import Experience from "./experienceItem"

const Section = styled.section`
  margin: 1em 0;
  & > h2 {
    padding-left: 0.5em;
    border-left: 5px solid forestgreen;
  }
`
const Item = styled.div`
  margin: 1em 0;
`

const Resume = ({ meta, experiences, educations }) => (
  <div className="wrapper">
    <Header {...meta} />
    <main>
      <Section>
        <h2>Experiences</h2>
        {experiences.map(experience => (
          <Experience {...experience} />
        ))}
      </Section>
      <Section>
        <h2>Education</h2>
        {educations.map(education => (
          <Item key={education}>
            <h3>{education.title}</h3>
            <h4>
              {education.time.from} - {education.time.to}
            </h4>
          </Item>
        ))}
      </Section>
    </main>
  </div>
)

export default Resume
