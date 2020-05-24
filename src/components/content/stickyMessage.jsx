import React, { Component } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

class StickyMessage extends Component {
  render() {
    const classNames = ' message d-lg-none'

    return (
      <section onClick={() => scrollTo(this.props.btnHref)} className={this.props.bottom ? 'fixed-bottom' + classNames: 'fixed-top' + classNames}>
        <p>{this.props.message}</p>
      </section>
    )
  }
}

export default StickyMessage;
