import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">NA.</div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

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
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              alt="Nipuni profile"
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

          <div className="about-card">
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
          </div>
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
                  Developed frontend features using React.js, TypeScript and
                  Ant Design.
                </li>
                <li>
                  Developed REST APIs using Java and Spring Boot.
                </li>
                <li>
                  Worked with microservice architecture and Telco BSS APIs.
                </li>
                <li>
                  Investigated production issues using Kibana and Postman.
                </li>
                <li>
                  Gained exposure to AWS EKS, Kubernetes and Jenkins CI/CD.
                </li>
                <li>
                  Participated in Agile/Scrum development and code reviews.
                </li>
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
                  Developed frontend and backend features for an AI-powered
                  jewellery customization platform.
                </li>
                <li>
                  Worked on testing, debugging and performance improvements.
                </li>
                <li>
                  Contributed to an AI-powered instant purchasing solution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section dark-section">
        <div className="section-title">
          <p>WHAT I HAVE BUILT</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Intelligent LTE Band Recommendation System</h3>

            <p>
              An intelligent Android application that analyzes crowdsourced
              spatio-temporal network performance data to recommend suitable
              LTE bands.
            </p>

            <div className="tags">
              <span>Kotlin</span>
              <span>Jetpack Compose</span>
              <span>Supabase</span>
              <span>PostgreSQL</span>
              <span>AI</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>

            <h3>AI Jewellery Customization Platform</h3>

            <p>
              An AI-powered platform for jewellery customization and instant
              purchasing, including frontend and backend development.
            </p>

            <div className="tags">
              <span>React</span>
              <span>AI</span>
              <span>Frontend</span>
              <span>Backend</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>

            <h3>NBC CXI Application</h3>

            <p>
              Customer experience application developed during my software
              engineering internship, integrating frontend features with
              backend Telco services.
            </p>

            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>AWS</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
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
          <span className="research-label">ICIET 2026</span>

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

          <div className="research-details">
            <div>
              <strong>Paper ID</strong>
              <span>237</span>
            </div>

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

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-title">
          <p>LET'S CONNECT</p>
          <h2>Contact Me</h2>
        </div>

        <p className="contact-text">
          I'm open to opportunities in software engineering, frontend
          development, full-stack development and related technology roles.
        </p>

        <div className="contact-links">
          <a href="mailto:your-email@example.com">
            Email
          </a>

          <a href="#" target="_blank">
            LinkedIn
          </a>

          <a href="#" target="_blank">
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