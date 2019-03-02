import React from "react"
import Markdown from "react-markdown"
import styled from "styled-components"

export default = () => (
          <Item key={experience.title}>
            <h3>
              {experience.title} at {experience.organization}
            </h3>
            <h4>
              {experience.time.from.month}.{experience.time.from.year}
              {experience.time.to
                ? ` - ${experience.time.to.month}.${experience.time.to.year}`
                : " -"}
            </h4>
            <Markdown source={experience.description} />
          </Item>
)
