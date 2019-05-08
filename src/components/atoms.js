import styled from "styled-components";

export const SectionHeading = styled.h3`
  font-size: 1em;
  padding-left: 0.5em;
  border-left: 0.3em solid ${({ theme }) => theme.accent};
  text-transform: uppercase;
`;

export const Section = styled.section`
  margin: 0 0 1em 0;
  grid-area: ${p => p.area};

  ul {
    margin: 1em;
    list-style: disc;

    &.no-style {
      list-style: none;
    }
  }
`;

export const MainGrid = styled.main`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-areas: "main sidebar";
  grid-gap: 1em;
`;

export const Sidebar = styled.aside`
  grid-area: "sidebar";
  padding: 0 0 0 1em;
  border-left: 1px solid ${p => p.theme.border};

  section:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.border};
  }
`;
