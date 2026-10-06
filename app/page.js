import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <p className="hero-small">HELLO, I'M</p>

        <h1>Abhishek</h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="hero-description">
          I enjoy building things, solving problems, and learning new
          technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="section-title">
          <p>01</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I&apos;m a Computer Science Engineering student who enjoys building
            practical projects and learning how things work behind the scenes.
          </p>

          <p>
            I&apos;m currently exploring web development, JavaScript, Next.js
            and other technologies while working on projects that help me
            improve my problem-solving and development skills.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="section-title">
          <p>02</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML · CSS · JavaScript · Next.js</p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>C · JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git · GitHub · VS Code · Postman</p>
          </div>

          <div className="skill-card">
            <h3>Currently Learning</h3>
            <p>React · Backend Development · Databases</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="section-title">
          <p>03</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {/* BESCOM Project */}
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>BESCOM Electricity Bill Calculator</h3>

            <p>
              A web-based electricity bill calculator that calculates the
              estimated BESCOM bill based on electricity consumption and
              Karnataka tariff slabs.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/abhishekms2922-stack/bescom-bill-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* PG Complaint System */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>PG Complaint Management System</h3>

            <p>
              A complaint management system that allows PG residents to
              register complaints and manage them through a simple web
              interface.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Backend</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/abhishekms2922-stack/pg-complaint-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="education-section">
        <div className="section-title">
          <p>04</p>
          <h2>Education</h2>
        </div>

        <div className="education-content">
          <div className="education-card">
            <div>
              <p className="education-year">2025 — Present</p>

              <h3>Bachelor of Engineering</h3>

              <h4>Computer Science &amp; Engineering</h4>

              <p>Sahyadri College of Engineering &amp; Management</p>
            </div>

            <div className="education-score">
              <span>9.25</span>
              <p>SGPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-container">

          <div className="contact-heading">
            <p className="section-tag">CONTACT</p>

            <h2>Let&apos;s Work Together</h2>

            <p>
              Have a project, opportunity, or just want to connect?
              Feel free to reach out.
            </p>
          </div>

          <div className="contact-content">

            {/* Contact Information */}
            <div className="contact-info">
              <h3>Get in touch</h3>

              <p>
                I&apos;m always open to discussing new projects, ideas,
                internships, or opportunities.
              </p>

              <div className="contact-links">

                {/* Email */}
                <a
                  href="mailto:abhishekms2922@gmail.com"
                  className="contact-item"
                >
                  <span className="contact-icon">✉</span>

                  <div>
                    <span className="contact-label">Email</span>

                    <span className="contact-value">
                      abhishekms2922@gmail.com
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/abhishekms2922-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <span className="contact-icon">⌘</span>

                  <div>
                    <span className="contact-label">GitHub</span>

                    <span className="contact-value">
                      github.com/abhishekms2922-stack
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abhishek-m-sunkapur-b30b5a383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <span className="contact-icon">in</span>

                  <div>
                    <span className="contact-label">LinkedIn</span>

                    <span className="contact-value">
                      linkedin.com/in/abhishek-m-sunkapur-b30b5a383
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* Contact Form */}
            <form
              className="contact-form"
              action="https://formspree.io/f/xdeakovj"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-button">
                Send Message →
              </button>
            </form>

          </div>
        </div>
      </section>
    </main>
  );
}