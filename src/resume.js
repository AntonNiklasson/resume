import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Media from "react-media"
import {
  Footer,
  Header,
  EducationItem,
  ExperienceItem,
  AccountItem
} from "./components"
import { MainGrid, Section, SectionHeading, Sidebar } from "./components/atoms"

const theme = {
  white: "#FFF",
  text: "#333",
  textLight: "#666",
  border: "#DDD",
  accent: "forestgreen",
  shadow: "#00000033",
  background: "#fff",
  backgroundSecondary: "#f6eaa5"
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 21cm;
  margin: 1em auto;
  padding: 2em;
  background: ${p => p.theme.white};
  border: 1px solid ${p => p.theme.border};
  border-radius: 5px;
  box-shadow: 0 10px 10px -8px ${p => p.theme.shadow};
  color: ${p => p.theme.text};

  a {
    font-weight: bold;
    text-decoration: underline;
    color: ${p => p.theme.text};
    &:hover {
      color: ${p => p.theme.accent};
    }
  }

  @media print {
    margin: 0 auto;
    padding: 0;
    border: none;
    box-shadow: none;

    a {
      font-weight: normal;
      text-decoration: none;
    }
  }

  @media (max-width: 21cm) {
    margin: 0;
    border: none;
    border-radius: unset;
  }
`

const Resume = ({ meta, experiences, educations, skills, accounts }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Wrapper>
        <Header {...meta} />
        <MainGrid>
          <Section area="main">
            {experiences.map(experience => (
              <ExperienceItem key={experience.title} {...experience} />
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
  </ThemeProvider>
)

export default Resume
