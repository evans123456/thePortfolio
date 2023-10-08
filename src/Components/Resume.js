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
        level:700
      },
      {
        name: "Data Science & Machine learning",
        level:450
      },
      {
        name: "Cloud Infrastructures (AWS)",
        level:600
      },
      {
        name: "Linux",
        level:570
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
        name: "Monitoring Tools (Grafana, Icinga)",
        level:450
      },
      {
        name: "Networking, Routers and Switches",
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
                  <h3 ><a target="_blank" href="https://www.surrey.ac.uk/postgraduate/data-science-msc"> University of Surrey</a> </h3>
                  <p className="info">
                    MSC. Data Science <span>&bull;</span>
                    <em className="date">2022</em>
                  </p>
                  <p>
                  
                  Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.
                  </p>
                </div>

                <div >
                  <h3><a target="_blank" href="https://computerscience.uonbi.ac.ke/"> University of Nairobi</a> </h3>
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
                  
                  Associate Communications software engineer
                  <span>&bull;</span> <em className="date">March 2022 - Present</em>
                </p>
                <p>
                Implemented a backup system for customer telemetry from AWS Timestream to S3, accessible via a Node app on AWS Apprunner, with infrastructure maintained using Terraform. Led the automation of on-train network device configurations, including firmware updates and Linux networking. Developed live Grafana dashboards to monitor train antenna status, Icinga dashboards for client SLAs, and addressed modem telemetry with a transition from MNQMI checks to modem manager. Contributed to upgrading the product to Debian 11, developed GitLab CI/CD pipelines for various tools, and designed a captive portal for WiFi access. Implemented VPN traffic routing solutions, created Linux cronjobs for VPN resource checks, and contributed to training materials and company presentations. Addressed security concerns, including hiding SSH banner information, and implemented a systemd fix for VM time synchronization.
                </p>
              
              </div>

              <div >
                <h3>Bright Network</h3>
                <p className="info">
                  
                  
                    Technology Intern
                  <span>&bull;</span> <em className="date">Jun 2021</em>
                </p>
                <p>
                  - Participated in a comprehensive software development project facilitated by Bright Network UK, emulating real-world scenarios and utilizing Google technologies. This task focused on creating functions akin to those employed in YouTube's operations. Additionally, I had the opportunity to attend skills sessions conducted by industry giants such as Google, Amazon, Vodafone, Bloomberg, and Ey, enhancing my knowledge and expertise in various areas of interest.<br/>
                  <a target="_blank" href="https://www.brightnetwork.co.uk/certificates/internship-experience-uk-techn_pwnahukxm9fqej/"> see cert</a> 
                </p>
              </div>

              <div >
                <h3>Freelance, Fullstack Developer</h3>
                <p className="info">
                  
                  
                    Technology Intern
                  <span>&bull;</span> <em className="date">Jun 2021</em>
                </p>
                <p>
                  ● Developed full-stack applications, leveraging React.js for the frontend and Django for the backend, demonstrating a comprehensive understanding of both client-side and server-side operations.Expertise in managing data with PostgreSQL databases, ensuring efficient data storage, retrieval, and manipulation.<br/>
                  ● Engineered robust, scalable applications features such as video call functionalities, Incorporated payment gateways, streamlining online transactions through 3rd party payment platforms such as iPay, Flutterwave,Jenga and Mpesa APIs and enhancing user convenience. <br/>
                  ● Implemented secure user authentication and authorization systems, including login/logout functionalities, resulting in enhanced data protection and user management. Designed and maintained social network features such as posting and commenting, fostering user interaction and engagement.Managed diverse user roles and permissions, facilitating tailored user experiences based on their assigned roles.<br/>
                  ● Integrated AI models into applications, enabling advanced features and improving user experiences i.e added a mood tracker for sentiment analysys on the posts done by users. Developed comprehensive invoicing and contract management systems, ensuring accurate financial tracking and legal compliance.

                  <a target="_blank" href="https://mkodisha.com"> latest app </a> 
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

              {/* <h6>Python, R, Django,Flask, ReactJS, Redux, Data visualization, Node, REST APIs, SQL, NoSQL,Telegraf Grafana,Icinga, Docker, Auth0, InfluxDB, Terraform, CI/CD pipelines , Cloud computing i.e AWS (Lambda, S3, AppRunner, VPNs, IAM, Route53, Timestream, IOT, DynamoDB, EC2),GCP, Salt, Machine learning, Web scraping, RASA,Git, Genetic algorithms, Data analysis, Natural language processing, Bash and Linux Scripting, Linux Networking, Cisco, Lantech and Oring switches, Eltech APs</h6> */}

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
