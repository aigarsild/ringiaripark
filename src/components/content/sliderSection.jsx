import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import backgroundImage from './../../images/ringi-aripark1.jpg';
import ArrowIcon from './../../svg/chevron_big_right.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

class SliderSection extends Component {
  render() {

    var buttonLink;
    if (this.props.isLink === 'true') {

      buttonLink =
        <Button href={this.props.btnHref} className="action font-weight-bold" variant="danger">
          <span>{this.props.btnMessage}</span>
        </Button>;

    } else {

      buttonLink =
        <Button onKeyUp={() => scrollTo(this.props.btnHref)} onClick={() => scrollTo(this.props.btnHref)} className="action d-none d-lg-block font-weight-bold" variant="danger">
          <span>{this.props.btnMessage}</span>
        </Button>;
    }

    return (
      <>
        <section className="slider content-section d-flex align-content-end flex-wrap min-vh-100" style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: `center`,
          backgroundColor: `#a79aa7`
        }}>
          <div className="content">
            <h1 className="slogan text-center w-75 font-weight-bold">{this.props.message}</h1>
            {buttonLink}
          </div>
          <ArrowIcon onKeyUp={() => scrollTo('#detail')} onClick={() => scrollTo('#detail')} className="arrow-icon" />
        </section>
      </>
    )
  }
}

export default SliderSection;
