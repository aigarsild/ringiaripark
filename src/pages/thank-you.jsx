import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SliderSection from "../components/content/sliderSection"

class ThankYou extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Ringi äripark" description="Üürida uued A-klassi nähtavusega build-to-suite kaubandus- ja teenindus-pinnad Jüri ringil" />
        <SliderSection
          message="Aitäh kirjutamast, võtame peatselt ühendust!"
          btnMessage="Tagasi esilehele"
          btnHref="/"
        />
      </Layout>
    )
  }
}

export default ThankYou;
