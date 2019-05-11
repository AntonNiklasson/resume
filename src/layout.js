import React from "react"
import Helmet from "react-helmet"
import styled, { ThemeProvider } from "styled-components"
import { ThemeEditor } from "~/components"
import theme from "./theme.js"
import GlobalStyles from "./globalStyles.js"

const LayoutContainer = styled.div`
  margin: 1em 0;
`

export default function Layout(props) {
  const ThemeWrapper =
    process.env.NODE_ENV === "production" ? ThemeProvider : ThemeEditor

  return (
    <ThemeWrapper theme={theme}>
      <LayoutContainer>
        <GlobalStyles />
        <Helmet>
          <title>{props.title}</title>
        </Helmet>
        {props.children}
      </LayoutContainer>
    </ThemeWrapper>
  )
}
