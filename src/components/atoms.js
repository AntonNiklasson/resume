import styled from "styled-components"

export const SectionHeading = styled.h3`
  font-size: 1em;
  text-transform: uppercase;
`

export const Section = styled.section`
  margin: 0 0 1em 0;
  grid-area: ${p => p.area};
`

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-areas: "main sidebar";
  grid-gap: 1em;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-areas: "main" "sidebar";
  }
`

export const Sidebar = styled.aside`
  grid-area: "sidebar";
  padding: 1em 2em;
  border-left: 1px solid ${p => p.theme.border};

  section:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.border};
  }
`
