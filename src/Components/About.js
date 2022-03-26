import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://avatars.githubusercontent.com/u/29792815?v=4"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>Completed Masters in Data Science, University Of Surrey. Hard-working full stack developer and Data Scientist with a flair for creating elegant solutions in the least amount of time possible. Experienced and specialized in Data Analysis, Machine Learning, Software architecture, Web design, and development using Python and Javascript frameworks, Postgres, git, etc. Also knowledgeable in other technologies such as AWS, GCP, Linux, etc.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    
                    <span>
                      37 Hamilton Drive
                      <br />
                      Guildford, Surrey, Uk
                    </span>
                
                    <br />
                    <span>evansgichuki656@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
