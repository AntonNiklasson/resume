import React from "react"

export function Section({ title, children }) {
  return (
    <section>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}
