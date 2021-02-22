import { ExperienceItem, Section } from "./index.ts"

export function Resume({ experiences }) {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 1fr;
      `}
    >
      <Section>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </Section>
    </div>
  )
}
