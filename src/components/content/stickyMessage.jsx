import React, { Component } from 'react';

class StickyMessage extends Component {
  render() {
    const classNames = ' message d-lg-none'

    return (
      <section className={this.props.bottom ? 'fixed-bottom' + classNames: 'fixed-top' + classNames}>
        <p>{this.props.message}</p>
      </section>
    )
  }
}

export default StickyMessage;
