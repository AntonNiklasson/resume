export function Section({ title, children }) {
  return (
    <section
      css={`
        margin: 0 0 1em 0;
        padding: 1em;
        page-break-inside: avoid;
        border-bottom: 1px solid #aaa;
      `}
    >
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}
