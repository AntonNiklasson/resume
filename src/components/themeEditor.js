import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import _ from "lodash/fp"

const Editor = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background: #eee;

  @media print {
    display: none;
  }
`
const Field = styled.div`
  margin: 0.5em;
  padding: 0.5em;

  label {
    display: block;
  }
`
const ColorInput = styled.input`
  width: 1.5em;
  height: 1.5em;
  border: none;
  margin: 0.5em;
`

export default function ThemeEditor({ theme: initialTheme, children }) {
  const [folded, setFolded] = useState(false)
  const [theme, setTheme] = useState(initialTheme)
  const fields = _.pipe(
    _.toPairs,
    _.map(([label, value]) => ({ label, value }))
  )(theme)

  const onValueChange = label => event => {
    setTheme({
      ...theme,
      [label]: event.target.value
    })
  }

  const toggleFolded = () => {
    setFolded(!folded)
  }

  return (
    <>
      <Editor>
        <button onClick={toggleFolded}>{folded ? "Open" : "Close"}</button>
        {!folded && (
          <>
            {fields.map(field => (
              <Field key={field.label}>
                <label>{field.label}</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ColorInput
                    type="color"
                    defaultValue={field.value}
                    onChange={onValueChange(field.label)}
                  />
                  <input type="text" value={field.value} readOnly />
                </div>
              </Field>
            ))}
            <input value={JSON.stringify(theme)} />
          </>
        )}
      </Editor>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
