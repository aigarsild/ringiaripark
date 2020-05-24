import React, { Component } from 'react';

import Layout from "../components/layout"

import SEO from "../components/seo"
import SliderSection from "../components/content/sliderSection"
import DetailSection from "../components/content/detailSection"
import ContactSection from "../components/content/contactSection"
import StickyMessage from "../components/content/stickyMessage"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Ringi äripark" description="Üürida uued A-klassi nähtavusega build-to-suite kaubandus- ja teenindus-pinnad Jüri ringil"/>

        <SliderSection 
        message={<span>Üürida uued A-klassi nähtavusega <i>build-to-suite</i> kaubandus- ja teenindus-pinnad Jüri ringil</span>} 
        btnMessage="Eelmüük alanud – võta ühendust!"
        btnHref="#kontakt"
        />
        <DetailSection message="Detailiinfo" />
        <ContactSection message="Võta ühendust!" />

      </Layout>
    )
  }
}

export default IndexPage;
