import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    var socials = [
      {
        name:"LinkedIn",
        url:"https://www.linkedin.com/in/wahome-gichuki-b124b914b/",
        className: "fa fa-linkedin"
      },
      {
        name:"Github",
        url:"https://github.com/evans123456",
        className: "fa fa-github"
      }
    ]

    const networks = socials.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>



             
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
