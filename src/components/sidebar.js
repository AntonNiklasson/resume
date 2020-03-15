export const Sidebar = styled.aside`
  grid-area: "sidebar";
  border-left: 1px solid ${p => p.theme.border};

  section:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.border};
  }
`
