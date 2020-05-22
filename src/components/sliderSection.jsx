import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import backgroundImage from './../images/ringi-aripark1.jpg';
import ArrowIcon from './../svg/chevron_big_right.svg'

class SliderSection extends Component {
  render() {
    return (
      <section className="slider content-section d-flex align-content-end flex-wrap min-vh-100" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center`
      }}>
        <div className="content">
          <h1 className="slogan text-center w-75 font-weight-bold">Üürida uued A-klassi nähtavusega <i>build-to-suite</i> kaubandus- ja teenindus-pinnad Jüri ringil</h1>
          <Button href="#kontakt" className="action d-none d-lg-block font-weight-bold" variant="danger">
            <span>Eelmüük alanud – võta ühendust!</span>
          </Button>
        </div>
        <ArrowIcon className="arrow-icon" />
      </section>
    )
  }
}

export default SliderSection;
