import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './header'
import Experience from './experienceItem'

const theme = {
  white: '#FFF',
  text: '#333',
  textLight: '#666',
  border: '#AAA',

  accent: 'forestgreen',

  shadow: '#00000060',
}

const Wrapper = styled.div`
	width: 100%;
  max-width: 21cm;
  margin: 1em auto 3em auto;
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
  width: 80%;
  margin: 1em 0;

  & > h2 {
    font-size: 1.2em;
    padding-left: 0.5em;
    border-left: 5px solid ${({ theme }) => theme.accent};
    text-transform: uppercase;
  }
`
const Item = styled.div`
  margin: 1em 0;
`

const Resume = ({ meta, experiences, educations }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <div className="wrapper">
        <Header {...meta} />
        <main>
          <Section>
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
    </Wrapper>
  </ThemeProvider>
)

export default Resume
