import "./App.css";
import profileImage from "./images/profile-image.png";
import researchRecommend from "./images/reno1.png";
import researchOptimizer from "./images/reno2.png";
import researchMap from "./images/reno3.png";
import researchSpeedTest from "./images/reno4.png";
import { useState } from "react";
import cvFile from "./K.G.N.Amanda CV(new).pdf";
import webDesignCertificate from "./Web_Design_for_Beginners_E-Certificate.pdf";
import frontendCertificate from "./Front-End_Web_Development_E-Certificate.pdf";
import pythonCertificate from "./Python for Beginners.pdf";
import cyberSecurityCertificate from "./Cyber Security course.pdf";
import isc2AccessControlCertificate from "./ISC2 Certificates/Access Control Concepts Certifcate.pdf";
import isc2NetworkSecurityCertificate from "./ISC2 Certificates/Network Security Certificate.pdf";
import isc2SecurityOperationsCertificate from "./ISC2 Certificates/Security Operations Certificate.pdf";

function ProjectDescription({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const canExpand = children.trim().length > 120;

  return (
    <>
      <p className={`project-description${isExpanded ? " is-expanded" : ""}`}>
        {children}
      </p>
      {canExpand && (
        <button
          className="project-more-button"
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      )}
    </>
  );
}

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">S.Engineer</div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <a
        href={cvFile}
        className="download-cv-button"
        download="Nipuni-Amanda-CV.pdf"
      >
        Download CV
      </a>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">HELLO, I'M</p>

          <h1>
            <span className="first-name">Nipuni</span> <span>Amanda</span>
          </h1>

          <h2>Software Engineer | Full-Stack Developer</h2>

          <p className="hero-description">
            BICT (Hons) Software Technology graduate with Second Upper Class
            Honours and professional experience in software engineering.
            Passionate about building modern web applications and exploring
            AI-powered solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

          <div className="social-links">
            <a href="#" target="_blank">
              GitHub
            </a>
            <a href="#" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="profile-card">
            <img
              src={profileImage}
              alt="Nipuni Amanda"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div>
            <p>
              I am a BICT (Hons) graduate specializing in Software Technology
              with a strong interest in software engineering, frontend
              development, full-stack development, and AI-powered applications.
            </p>

            <p>
              During my professional experience, I have worked with React,
              TypeScript, Java, Spring Boot, REST APIs, databases, cloud
              technologies, testing tools, and Agile development practices.
            </p>

            <p>
              I enjoy learning new technologies, solving technical problems,
              and creating reliable and user-focused software solutions.
            </p>
          </div>

          {/* <div className="about-card">
            <div>
              <span>01</span>
              <h3>Frontend</h3>
              <p>React & TypeScript</p>
            </div>

            <div>
              <span>02</span>
              <h3>Backend</h3>
              <p>Java & Spring Boot</p>
            </div>

            <div>
              <span>03</span>
              <h3>AI & Research</h3>
              <p>AI-powered solutions</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark-section">
        <div className="section-title">
          <p>MY TECHNICAL TOOLKIT</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <div className="tags">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Ant Design</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <div className="tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>C#</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <div className="tags">
              <span>MySQL</span>
              <span>SQL Server</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools & Cloud</h3>
            <div className="tags">
              <span>Git</span>
              <span>GitLab</span>
              <span>Jenkins</span>
              <span>AWS</span>
              <span>Kubernetes</span>
              <span>Postman</span>
              <span>Selenium</span>
              <span>Jira</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-title">
          <p>MY PROFESSIONAL JOURNEY</p>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <span className="date">APR 2025 — MAR 2026</span>

              <h3>Intern – Software Engineering</h3>

              <h4>Axiata Digital Labs</h4>

              <ul>
                <li>
                  Developed and enhanced customer-facing features for the CX Info (CXI) portal using React.js with TypeScript and Ant Design.
                </li>
                <li>
                  Built and integrated RESTful APIs using Java Spring Boot (Spring MVC, Spring Data JPA, Spring Security).
                </li>
                <li>
                  Worked within micro service architecture supporting prepaid, postpaid, and enterprise customer segments.
                </li>
                <li>
                  Implemented and fixed security enhancements including Content Security Policies (CSP) and sensitive data handling improvements.
                </li>
                <li>
                  Resolved production defects by analyzing logs via Kibana and validating API flows using Postman.
                </li>
                <li>
                  Improved code quality by addressing SonarQube Quality Gate issues, reducing code smells and vulnerabilities.
                </li>
                <li>Participated in backend integrations with Telco BSS systems via REST APIs.</li>
                <li>Collaborated in Agile/Scrum environment with cross-functional teams across multiple NBC phases. </li>
                <li>Gained exposure to AWS EKS, Kubernetes deployments (Rolling & Blue-Green) and CI/CD processes via Jenkins.</li>
                <li>Contributed to version control workflows using Git & GitLab branching strategies.</li>
                <li>Automation testing Via Selenium</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <span className="date">MAY 2026 — JUL 2026</span>

              <h3>Full Stack Developer</h3>

              <h4>CH Software Solutions</h4>

              <ul>
                <li>
                  Contributed to the development of the World's First Online Jewellery Customization and Instant Buying AI Platform.
                </li>
                <li>
                  Designed and developed full-stack web application features using modern web technologies. </li>
                <li>
                  Built and maintained both frontend and backend components of the platform.
                </li>
                <li>
                  Assisted in implementing AI-powered features for jewellery customization and instant purchasing. </li>
                <li>
                  Performed testing, debugging, and performance optimization to improve application quality and reliability. </li>
                <li>
                  Collaborated with the development team to deliver project milestones within the contract period. AI-powered features for jewelry customization and instant purchasing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section dark-section">
        <div className="section-title">
          <p>EXPERIENCE & SELECTED WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="project-group">
          <div className="project-group-heading">
            <span>01</span>
            <h3>Professional Experience</h3>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <h3>NBC CXI — Customer Experience Information Portal</h3>
              <p className="project-org">ADL Malaysia / CelcomDigi</p>
              <div className="tags">
                <span>React.js</span><span>TypeScript</span><span>Ant Design</span><span>Java</span><span>Spring Boot</span><span>Microservices</span><span>AWS EKS</span><span>Kubernetes</span><span>Jenkins</span>
              </div>
              <ProjectDescription>
                Developed customer-facing CXI portal features and REST APIs for
                prepaid, postpaid, and enterprise systems. Worked with
                microservices, security enhancements, production debugging,
                SonarQube, Git/GitLab, CI/CD, Kubernetes, and AWS EKS.
              </ProjectDescription>
            </article>

            <article className="project-card">
              <h3>AI Jewellery Customization Platform</h3>
              <p className="project-org">CH Software Solutions / CH Global</p>
              <div className="tags">
                <span>React.js</span><span>Node.js</span><span>AI</span><span>Full Stack</span>
              </div>
              <ProjectDescription>
                Contributed to an AI-powered jewellery customization and
                instant-buying platform, developing frontend and backend
                features while supporting testing, debugging, and performance
                improvements.
              </ProjectDescription>
            </article>
          </div>
        </div>

        <div className="project-group">
          <div className="project-group-heading">
            <span>02</span>
            <h3>University Projects</h3>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <h3>Medical Center Management System</h3>
              <p className="project-org">Group Project · 3rd Year</p>
              <div className="tags">
                <span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Tailwind CSS</span>
              </div>
              <ProjectDescription>
                A web-based medical center management system designed to support
                patient management, appointment scheduling, and medication
                tracking.
              </ProjectDescription>
            </article>

            <article className="project-card">
              <h3>Bus Fleet Management System</h3>
              <div className="tags">
                <span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>JWT</span><span>Git</span>
              </div>
              <ProjectDescription>
                Full-stack system for managing buses, drivers, routes,
                schedules, fuel, maintenance, authentication, CRUD operations,
                and PDF report generation.
              </ProjectDescription>
            </article>

            <article className="project-card">
              <h3>Student Registration Management System</h3>
              <p className="project-org">Individual Project</p>
              <div className="tags">
                <span>C#</span><span>Windows Forms</span><span>SQL Server</span><span>Visual Studio</span>
              </div>
              <ProjectDescription>
                Desktop-based student registration system featuring secure
                login, CRUD operations, student record management, and a
                modern Windows Forms interface.
              </ProjectDescription>
            </article>
          </div>
        </div>

        <div className="project-group">
          <div className="project-group-heading">
            <span>03</span>
            <h3>Machine Learning</h3>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <h3>Vibration Signal Classification & Heart Disease Prediction</h3>
              <div className="tags">
                <span>Python</span><span>Machine Learning</span><span>Random Forest</span><span>Data Preprocessing</span><span>Kaggle</span>
              </div>
              <ProjectDescription>
                Developed machine learning models using data preprocessing,
                feature engineering, and classification techniques. Implemented
                Random Forest for heart disease prediction with 86.67% accuracy.
              </ProjectDescription>
            </article>
          </div>
        </div>

        <div className="project-group">
          <div className="project-group-heading">
            <span>04</span>
            <h3>Web & Mini Projects</h3>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <h3>Quiz Application</h3>
              <div className="tags">
                <span>HTML</span><span>CSS</span><span>JavaScript</span>
              </div>
              <ProjectDescription>
                Interactive responsive quiz application with multiple-choice
                questions, answer validation, navigation, and customizable
                styling.
              </ProjectDescription>
            </article>

            <article className="project-card">
              <h3>Weather Application</h3>
              <div className="tags">
                <span>JavaScript</span><span>HTML</span><span>CSS</span><span>Weather API</span>
              </div>
              <ProjectDescription>
                Web application for displaying weather information using
                real-time API data.
              </ProjectDescription>
            </article>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="section">
        <div className="section-title">
          <p>RESEARCH & ACADEMIC WORK</p>
          <h2>Research</h2>
        </div>

        <div className="research-card">
          {/* <span className="research-label">ICIET 2026</span> */}

          <h3>
            Intelligent LTE Band Recommendation Using Crowdsourced
            Spatio-Temporal Analysis in Sri Lanka
          </h3>

          <p>
            Research project focused on analyzing LTE network performance
            measurements and using intelligent recommendations to help users
            identify suitable LTE bands based on location and network
            conditions.
          </p>
          {/* <h4>Research Highlights</h4>
          <ul>
            <li>Collected 1,000+ real-world LTE measurements.</li>
            <li>Analysed RSRP, RSRQ, SINR, speed, LTE band, operator, location, and time.</li>
            <li>Developed an Android application using Kotlin, Jetpack Compose, MVVM, and Hilt.</li>
            <li>Used Supabase/PostgreSQL for research data management.</li>
            <li>Integrated Qwen 3 32B via Groq Cloud for AI-assisted analysis.</li>
            <li>
              Used OpenStreetMap for location-based visualization.</li>
          </ul> */}
          
          <div className="research-gallery">
            <figure>
              <img src={researchRecommend} alt="LTE band recommendation screen" />
              <figcaption>Intelligent band recommendation</figcaption>
            </figure>
            <figure>
              <img src={researchOptimizer} alt="LTE optimizer dashboard showing signal metrics" />
              <figcaption>LTE optimizer dashboard</figcaption>
            </figure>
            <figure>
              <img src={researchMap} alt="Map showing cellular tower coverage across Sri Lanka" />
              <figcaption>Crowdsourced tower map</figcaption>
            </figure>
            <figure>
              <img src={researchSpeedTest} alt="Mobile speed test screens showing download and upload results" />
              <figcaption>Network speed testing</figcaption>
            </figure>
          </div>
          <div className="research-details">
            {/* <div>
              <strong>Paper ID</strong>
              <span>237</span>
            </div> */}

            <div>
              <strong>Platform</strong>
              <span>Android</span>
            </div>

            <div>
              <strong>Architecture</strong>
              <span>MVVM</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Qwen + Groq</span>
            </div>
          </div>
          </div>
      </section>

      {/* Education */}
      <section className="section dark-section">
        <div className="section-title">
          <p>MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <span className="date">2022 — 2026</span>

          <h3>BICT (Hons) in Software Technology</h3>

          <h4>University of Sri Jayewardenepura</h4>

          <p>
            Bachelor of Information and Communication Technology (Honours),
            specializing in Software Technology.
          </p>

          <div className="class-badge">
            Second Upper Class Honours
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="section">
        <div className="section-title">
          <p>CONTINUOUS LEARNING</p>
          <h2>Certificates</h2>
        </div>

        <div className="certificates-grid">
          <article className="certificate-card">
            <h3>Web Design for Beginners</h3>
            <p>Web Design</p>
            <a href={webDesignCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>

          <article className="certificate-card">
            <h3>Front-End Web Development</h3>
            <p>Frontend Development</p>
            <a href={frontendCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>

          <article className="certificate-card">
            <h3>Python for Beginners</h3>
            <p>Python</p>
            <a href={pythonCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>

          <article className="certificate-card">
            <h3>Cyber Security</h3>
            <p>Cybersecurity</p>
            <a href={cyberSecurityCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>

          <article className="certificate-card">
            <h3>Access Control Concepts</h3>
            <p>ISC2</p>
            <a href={isc2AccessControlCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>

          <article className="certificate-card">
            <h3>Network Security</h3>
            <p>ISC2</p>
            <a href={isc2NetworkSecurityCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>

          <article className="certificate-card">
            <h3>Security Operations</h3>
            <p>ISC2</p>
            <a href={isc2SecurityOperationsCertificate} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section dark-section contact-section">
        <div className="section-title">
          <p>LET'S CONNECT</p>
          <h2>Contact Me</h2>
        </div>

        <p className="contact-text">
          I'm open to opportunities in software engineering, frontend
          development, full-stack development and related technology roles.
        </p>

        <div className="contact-links">
          <a href="mailto:kgnipuniamanda513@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>

          <a href="https://www.linkedin.com/in/nipuni-amanda/" target="_blank">
            LinkedIn
          </a>

          <a href="https://github.com/KGNAmanda" target="_blank">
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Nipuni Amanda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;