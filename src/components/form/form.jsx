import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class Form extends Component {
   
  render() {
    
    return (
      <>
        <form name="contact" id="form" method="POST" netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha= "true">
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
            <textarea name="message" required placeholder="Küsimused, soovid, ettepanekud*" ></textarea>
          </p>
          <div>
            <p className="small-paragraph">
              Kasutame isikuandmeid kliendi päringule vastamiseks.
              Me ei edasta isikuandmeid kolmandetele osapooltele ega
              lisa isikuandmeid reklaami eesmärgiga andmebaasidesse.
              <u>Tutvu meie privaatsuspoliitikaga.</u>
            </p>
            <p className="recaptcha" data-netlify-recaptcha="true"></p>
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
