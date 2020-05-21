import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import CloudIcon from './../svg/cloud_download_white.svg'

class DetailSection extends Component {
  render() {
    return (
      <section className="detail-wrap">
        <div className="detail-image content-section"></div>

        <section className="detail content-section">
          <h2 className="heading font-weight-bold">{this.props.message}</h2>
          <table>
            <tbody>
              <tr>
                <td>Tüüp</td>
                <td>100% ärimaa</td>
              </tr>
              <tr>
                <td>Brutopind</td>
                <td>29 000 m</td>
              </tr>
              <tr>
                <td>Hooneid</td>
                <td>Kuni 5</td>
              </tr>
              <tr>
                <td>Korruseid</td>
                <td>Kuni 5</td>
              </tr>
              <tr>
                <td>Hoonestus-kõrgus</td>
                <td>Kuni 20 m</td>
              </tr>
              <tr>
                <td>Kasutus-otstarve</td>
                <td>Kaubandus, teenindus, showroom, büroo, ladu, väiketootmine</td>
              </tr>
              <tr>
                <td>Parkimine</td>
                <td>Krundil, tasuta</td>
              </tr>
              <tr>
                <td>Energiamärgis</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Tehnovõrgud</td>
                <td>Vesi ja kanalisatsioon, gaas, elekter, side</td>
              </tr>
              <tr>
                <td>Valmimine</td>
                <td>Kuni 24 kuud</td>
              </tr>
            </tbody>
          </table>

          <Button className="font-weight-bold action" variant="danger">
            <CloudIcon /><span>PDF-esitlus</span>
          </Button>
        </section>
      </section>
    )
  }
}

export default DetailSection;
