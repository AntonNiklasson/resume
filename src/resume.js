import React, { Fragment } from "react"
import styled from "styled-components"
import Media from "react-media"
import {
  Header,
  EducationItem,
  ExperienceItem,
  AccountItem,
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
const ContentLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export default function Resume({
  meta,
  experiences,
  educations,
  skills,
  accounts
}) {
  return (
    <Fragment>
      <Wrapper>
        <Header {...meta} />
        <ContentLayout>
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
                    <SectionHeading>Links</SectionHeading>
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
        </ContentLayout>
      </Wrapper>
    </Fragment>
  )
}
