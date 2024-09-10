import * as React from "react"
import GlobalStyle from "../styles/global-styles"
import Header from "../components/header-footer"
import Equations from "../components/input"
import OutputSection from "../components/output"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <Equations />
        <OutputSection />
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Too Many Equations</title>
