import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/evans123456/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("this-> ", result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
      
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My public repositories.</h1>
 
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {/* {projects} */}
                {/* {console.log("Our Items: ",this.state.items)} */}
                <div>
                  {this.state.isLoaded === true ? (
                    <div>
                      {this.state.items.slice(0,12).map((item) => (
                         <a href={item.clone_url} > 
                        <div key={id++} className="columns portfolio-item"> 
                          <div className="item-wrap">
                            <Zmage alt={item.name} src={item.owner.avatar_url} />
                            <div style={{ textAlign: "center" }}>{item.name}</div>
                           
                          </div>
                        </div> </a>))}
                    </div>)
                    :null}

                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
