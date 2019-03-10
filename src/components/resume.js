import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Media from 'react-media'
import Header from './header'
import Footer from './footer'
import Experience from './experienceItem'
import Education from './educationItem'
import Icon from './icon'

const theme = {
  white: '#FFF',
  text: '#333',
  textLight: '#666',
  border: '#DDD',
  accent: 'forestgreen',
  shadow: '#00000033',
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
const Section = styled.section`
  margin: 1em 0;
  grid-area: ${p => p.area};

  & > h2 {
    font-size: 1.2em;
    padding-left: 0.5em;
    border-left: 5px solid ${({ theme }) => theme.accent};
    text-transform: uppercase;
  }

  ul {
    margin: 1em;
    list-style: disc;

    &.no-style {
      list-style: none;
    }
  }
`
const ProfilePic = styled.img`
  display: block;
  width: 100%;
`
const Grid = styled.main`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'main sidebar';
  grid-gap: 1em;
`
const Sidebar = styled.aside`
  grid-area: 'sidebar';
  padding: 0 0 0 1em;
  border-left: 1px solid ${p => p.theme.border};

  section:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.border};
  }
`

const Resume = ({ meta, experiences, educations, skills, accounts }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Wrapper>
        <Header {...meta} />
        <Grid>
          <Section area="main">
            <h2>Experience</h2>
            {experiences.map(experience => (
              <Experience key={experience.title} {...experience} />
            ))}
          </Section>
          <Sidebar>
            {/*
					<Section area="sidebar">
						<ProfilePic src={profilePhoto} />
					</Section>
					*/}
            <Section>
              <h2>Skills</h2>
              <ul>
                {skills.map(skill => (
                  <li key={skill.title}>{skill.title}</li>
                ))}
              </ul>
            </Section>
            <Section area="sidebar">
              <h2>Education</h2>
              {educations.map(education => (
                <Education key={education.title} {...education} />
              ))}
            </Section>
            <Media query="print">
              {matches =>
                !matches ? (
                  <Section area="sidebar">
                    <ul className="no-style">
                      {accounts.map(account => (
                        <li key={account.url}>
													<a href={account.url} target="_blank" rel="noopener noreferrer">
                            {account.icon ? <Icon name={account.icon} /> : null}
                            {account.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Section>
                ) : null
              }
            </Media>
          </Sidebar>
        </Grid>
      </Wrapper>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
)

export default Resume
