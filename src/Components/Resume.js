import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //     </div>
    //   );
    // });

    

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    var data = [
      {
        name: "Web, software Development and Design",
        level:500
      },
      {
        name: "Data Science & Machine learning",
        level:450
      },
      {
        name: "Cloud Infrastructures",
        level:500
      },
      {
        name: "Linux",
        level:470
      },
      {
        name: "Databases",
        level:450
      },
      {
        name: "Natural Language processing and Chatbots",
        level:490
      },
      {
        name: "Genetic algorithms",
        level:450
      }
    ]

    const skills = data.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {/* {education} */}

                <div >
                  <h3 ><a href="https://www.surrey.ac.uk/postgraduate/data-science-msc"> University of Surrey</a> </h3>
                  <p className="info">
                    MSC. Data Science <span>&bull;</span>
                    <em className="date">2022</em>
                  </p>
                  <p>
                  
                  Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.
                  </p>
                </div>

                <div >
                  <h3><a href="https://computerscience.uonbi.ac.ke/"> University of Nairobi</a> </h3>
                  <p className="info">
                    BSC. Computer Science <span>&bull;</span>
                    <em className="date">2019</em>
                  </p>
                  <p>

                  Computer science is the study of computation, automation, and information. Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to practical disciplines (including the design and implementation of hardware and software). Computer science is generally considered an area of academic research and distinct from computer programming.[4]
                  </p>
                </div>


                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* {work} */}
              <div >
                <h3>Mclaren Applied</h3>
                <p className="info">
                  
                  Communications software engineer
                  <span>&bull;</span> <em className="date">March 2022 - Present</em>
                </p>
                <p>● Linux<br/> ● AWS<br/>● Python<br/></p>
              </div>

              <div >
                <h3>Bright Network</h3>
                <p className="info">
                  
                  
                    Technology Intern
                  <span>&bull;</span> <em className="date">Jun 2021</em>
                </p>
                <p>
                  - Took part in skills sessions with Google.<br/>
                  - Attended talks by Google, Amazon, Bloomberg, and Ey <br/>
                  - Completed sample work simulating a real-world Software development task.<br/>
                  <a href="https://www.brightnetwork.co.uk/certificates/internship-experience-uk-techn_pwnahukxm9fqej/"> see cert</a> 
                </p>
              </div>

              <div >
                <h3>Internet solutions</h3>
                <p className="info">
                  
                Technical Support Engineer
                  <span>&bull;</span> <em className="date">March 2022 - Present</em>
                </p>
                <p> Receive support queries through the available interaction channels, diagnose, identify, isolate and resolve issues that could be associated with WAN/LAN solution functionally such as network connectivity, mail application errors, cambium network radios, fiber switches,routers etc. 
                <br/>▪ Provide direct support for both Internet and assists customer in utilization of provided internet services, troubleshooting & support tools. <br/>
                ▪ Through defined periodic reviews, follow up and updates of tickets(service requests) within the client management system for assigned cases to ensure resolution within SLA(service level agreement). <br/>
                ▪ Provide qualitative unique, proprietary solutions and solutions support for all customer queries /complaints and meet aimed at achieving the defined quality assurance standards.<br/>
                 ▪ Work with internal/external networks & system engineering teams, senior support engineers and team leaders to identify and isolate root cause and support implementation of solutions that have not been solved.<br/>
                  ▪ Provide detailed incident/issue reports, and recommendations or any other feedback to internal and external clients on handled cases in a defined neat and timely manner.<br/>
                   ▪ Identify, pursue or recommend avenues for potential business or revenue generation in the course of customer interaction.</p>
              </div>

              <div >
                <h3>USAID/ Health IT</h3>
                <p className="info">
                  
                  Communications software engineer
                  <span>&bull;</span> <em className="date">March 2022 - Present</em>
                </p>
                <p>In a team of 4, we built web applications for the health IT project used by the Ministry of Health. The web application was to help combat the problems the Dhis2 (a system used to monitor health infrastructure and disease outbreaks in kenya) system was facing. The project was built using ReactJS and Redux with heavy use of APIs. The project was a Metadata Dictionary(provides more information on the existing information ) that helps the users of the dhis2 platform get access to information faster with a more user-friendly interface. As the live project is held within the system, the documentation of the product can be viewed from https://metadatadhis2.readthedocs.io/en/latest/ and the project repository is https://github.com/kanji-karanja/MetaDataDHIS2 . For this project, we relied heavily on open-source platforms such as Github to allow collaboration by the team members. <br/>Duties and Responsibilities:<br/> ● Use dhis2 API to fetch and edit data.<br/> ● React,Redux development<br/> ● APIs.</p>
              </div>
            
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
