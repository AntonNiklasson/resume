import Media from "react-media"
import {
  EducationItem,
  ExperienceItem,
  AccountItem,
  Section
} from "../components"

export function Resume({ experiences, educations, skills, accounts }) {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: auto 180px;
      `}
    >
      <Section>
        {experiences.map(experience => (
          <ExperienceItem key={experience} {...experience} />
        ))}
      </Section>
      <div>
        <Section title="Skills">
          <ul>
            {skills.map(skill => (
              <li key={skill.title}>{skill.title}</li>
            ))}
          </ul>
        </Section>
        <Section title="Education">
          {educations.map(education => (
            <EducationItem key={education.title} {...education} />
          ))}
        </Section>
        <Media query="print">
          {matches =>
            !matches ? (
              <Section title="Links">
                <ul className="no-style">
                  {accounts.map(account => (
                    <AccountItem key={account.url} {...account} />
                  ))}
                </ul>
              </Section>
            ) : null
          }
        </Media>
      </div>
    </div>
  )
}
