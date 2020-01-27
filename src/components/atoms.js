import styled from "styled-components"

export const SectionHeading = styled.h3`
  font-size: 1em;
  text-transform: uppercase;
`

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "sidebar main";
  grid-gap: 1em;
`

export const Section = styled.section`
  margin: 0 0 1em 0;
  padding: 1em;
  grid-area: ${p => p.area};
  page-break-inside: avoid;
`

export const Sidebar = styled.aside`
  grid-area: "sidebar";
  border-left: 1px solid ${p => p.theme.border};

  section:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.border};
  }
`
