import React, { Component } from 'react';

import Layout from "../components/layout"

import SEO from "../components/seo"
import SliderSection from "../components/sliderSection"
import DetailSection from "../components/detailSection"
import ContactSection from "../components/contactSection"
import StickyMessage from "../components/stickyMessage"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Ringi äripark" description="Üürida uued A-klassi nähtavusega build-to-suite kaubandus- ja teenindus-pinnad Jüri ringil"/>

        <StickyMessage message="Eelmüük alanud - võta ühendust!" bottom="true"/>
        <SliderSection />
        <DetailSection message="Detailiinfo" />
        <ContactSection message="Võta ühendust!" />

      </Layout>
    )
  }
}

export default IndexPage;
