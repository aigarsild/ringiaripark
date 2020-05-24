import React, { Component } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

class StickyMessage extends Component {
  render() {
    const classNames = ' message d-lg-none'

    return (
      <section className={this.props.bottom ? 'fixed-bottom' + classNames: 'fixed-top' + classNames}>
        <button onKeyUp={() => scrollTo(this.props.btnHref)} onClick={() => scrollTo(this.props.btnHref)}>{this.props.message}</button>
      </section>
    )
  }
}

export default StickyMessage;
