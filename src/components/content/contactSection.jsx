import React, { Component } from 'react';
import backgroundImage from './../../images/ringi-aripark1.jpg';
import Logo from "./../../svg/logo-white.svg"
import Form from '../form/form'

class ContactSection extends Component {

  render() {
    return (
      <section id="kontakt" className="contact content-section dark min-vh-100" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center`
      }}>

        <Logo className="logo d-none d-lg-block" />

        <div
          className="content"
          data-sal="slide-left"
          data-sal-delay="500"
          data-sal-easing="ease"
          data-sal-duration="500">
          <h2 className="heading font-weight-bold">{this.props.message}</h2>
          <ul>
            <li>Martin Ellervee</li>
            <li>Stadium Real Estate OÜ</li>
            <li>martin@baltreal.ee</li>
            <li>+372 50 58 794</li>
          </ul>
          <Form />
        </div>
      </section>
    )
  }
}

export default ContactSection;
