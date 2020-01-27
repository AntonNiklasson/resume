import React from "react"
import Helmet from "react-helmet"
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme.js"
import GlobalStyles from "./globalStyles.js"
import { Footer } from "~/components"

const LayoutContainer = styled.div`
  margin: 1em 0;
`

export default function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <GlobalStyles />
        <Helmet>
          <title>{props.title}</title>
        </Helmet>
        {props.children}
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}
