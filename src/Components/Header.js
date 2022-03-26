import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: null,
    };
  }

  componentDidMount() {
    fetch("https://zenquotes.io/api/today")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result,
          });
          console.log("this right here-> ", result);
          
        },
        (error) => {
          console.log("The error is: ", error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    // if (this.props.isLoaded) return (<h3>{this.state.result[0]["q"]}</h3>);

    const GetDescription = () => {
      if (this.state.isLoaded == true) {
        return (<div> <h4>{this.state.result[0]["q"]} - {this.state.result[0]["a"]}</h4><br/></div>);
      }
      return <p>Loading...</p>;
    }


    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Wahome Gichuki</h1>
            </Fade>
            <Fade bottom duration={1200}>
            <h3>Passionate sofware, machine learning and cloud engineer. Ask me about anything</h3>
              <GetDescription/>
              
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="https://www.linkedin.com/in/wahome-gichuki-b124b914b/" className="button btn project-btn">
                  <i className="fa fa-book"></i>LinkedIn
                </a>
                <a href="https://github.com/evans123456" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
