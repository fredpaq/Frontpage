import React from "react"
import Scene from '../components/babylon/scene'
import Content from '../components/screen/content'
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Scene />
    <Content />
  </>

)

export default IndexPage
