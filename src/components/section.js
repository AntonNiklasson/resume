export function Section({ title, children }) {
  return (
    <section
      css={`
        margin: 0 0 1em 0;
        padding: 1em;
        grid-area: ${p => p.area};
        page-break-inside: avoid;
      `}
    >
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}
