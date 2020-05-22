import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliderSection from "../components/sliderSection"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <SliderSection
          message="Lehte ei eleitud :((("
          btnMessage="Tagasi esilehele"
          btnHref="/"
        />
  </Layout>
)

export default NotFoundPage
