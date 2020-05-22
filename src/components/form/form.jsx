import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from "react-google-recaptcha";

class Form extends Component {

  render() {

    return (
      <>
        <form name="ringi-kontakt" method="POST" netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha="true" action="/thank-you">
          <input type="hidden" name="form-name" value="ringi-kontakt" />
          <p>
            <input type="text" required name="name" placeholder="Nimi*" />
          </p>
          <p>
            <input type="tel" required name="telephone" placeholder="Telefon*" />
          </p>
          <p>
            <input type="email" required name="email" placeholder="E-post*" />
          </p>
          <p>
            <textarea name="message" required placeholder="Küsimused, soovid, ettepanekud*"></textarea>
          </p>
          <div>
            <p className="small-paragraph">
              Kasutame isikuandmeid kliendi päringule vastamiseks.
              Me ei edasta isikuandmeid kolmandetele osapooltele ega
              lisa isikuandmeid reklaami eesmärgiga andmebaasidesse.
              <u>Tutvu meie privaatsuspoliitikaga.</u>
            </p>
            <p className="recaptcha">
              <ReCAPTCHA sitekey="6LdqhPoUAAAAANKoaS2fpJcsg2L4kou4A2yBT2Uf" />
            </p>
            <Button type="submit" className="font-weight-bold action" variant="danger">
              <span>Saada!</span>
            </Button>
          </div>
        </form>
      </>
    )
  }
}

export default Form;
