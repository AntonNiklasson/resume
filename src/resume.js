import React from "react"
import styled from "styled-components"
import Media from "react-media"
import {
  Footer,
  Header,
  EducationItem,
  ExperienceItem,
  AccountItem,
  MainGrid,
  Section,
  SectionHeading,
  Sidebar
} from "~/components"

const Wrapper = styled.div`
  width: 100%;
  max-width: 21cm;
  margin: 1em auto;
  padding: 2em;
  background: ${p => p.theme.white};
  color: ${p => p.theme.text};

  a {
    font-weight: bold;
    text-decoration: underline;
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

const Resume = ({ meta, experiences, educations, skills, accounts }) => (
  <React.Fragment>
    <Wrapper>
      <Header {...meta} />
      <MainGrid>
        <Section area="main">
          {experiences.map(experience => (
            <ExperienceItem key={experience} {...experience} />
          ))}
        </Section>
        <Sidebar>
          <Section>
            <SectionHeading>Skills</SectionHeading>
            <ul>
              {skills.map(skill => (
                <li key={skill.title}>{skill.title}</li>
              ))}
            </ul>
          </Section>
          <Section area="sidebar">
            <SectionHeading>Education</SectionHeading>
            {educations.map(education => (
              <EducationItem key={education.title} {...education} />
            ))}
          </Section>
          <Media query="print">
            {matches =>
              !matches ? (
                <Section area="sidebar">
                  <ul className="no-style">
                    {accounts.map(account => (
                      <AccountItem key={account.url} {...account} />
                    ))}
                  </ul>
                </Section>
              ) : null
            }
          </Media>
        </Sidebar>
      </MainGrid>
    </Wrapper>
    <Footer />
  </React.Fragment>
)

export default Resume
