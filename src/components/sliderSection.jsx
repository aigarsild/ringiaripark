import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import backgroundImage from './../images/ringi-aripark1.jpg';
import ArrowIcon from './../svg/chevron_big_right.svg'

class SliderSection extends Component {
  render() {
    return (
      <section className="slider content-section d-flex align-content-end flex-wrap min-vh-100" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center`,
        backgroundColor: `#a79aa7`
      }}>
        <div className="content">
          <h1 className="slogan text-center w-75 font-weight-bold">{this.props.message}</h1>
          <Button href={this.props.btnHref} className="action d-none d-lg-block font-weight-bold" variant="danger">
            <span>{this.props.btnMessage}</span>
          </Button>
        </div>
        <ArrowIcon className="arrow-icon" />
      </section>
    )
  }
}

export default SliderSection;
