import React from "react"
import { ExperienceItem, Section } from "./index.ts"

export function Resume({ experiences }) {
  return (
    <div>
      <Section>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </Section>
    </div>
  )
}
