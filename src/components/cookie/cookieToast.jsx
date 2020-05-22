import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class CookieToast extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: true
    }
  }

  closeModal() {
    this.setState({
      showForm: !this.state.showForm,

    });
  }

  render() {
    return (
      <>
        {this.state.showForm &&
          <div className="alert d-flex">
            <p>
              See veebileht kasutab küpsiseid. Tutvu meie <a href="#">privaatsuspoliitikaga.</a>
            </p>

            <Button onClick={this.closeModal.bind(this)} className="font-weight-bold" variant="outline-dark">
              <span>Selge</span>
            </Button>
          </div>
        }
      </>

    )
  }
}

export default CookieToast;
