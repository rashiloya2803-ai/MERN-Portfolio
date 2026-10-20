
import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import {
  Mail,
  ArrowDown,
  Sun,
  Moon,
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react";
import "./App.css";


import {
  ScanEye,
  BrainCircuit,
  Database,
  CarFront,
  ChevronRight,
  
  ArrowUpRight,
} from "lucide-react";
const projects = [
  {
    number: "01",
    icon: "scan-eye",
    title: "Accident Classification Under Low Illumination",
    category: "Computer Vision · LNMIIT LUSIP",
    description:
      "Applied RetinexFormer for low-light image enhancement and evaluated ResNet50 for image classification, achieving 93.03% accuracy on enhanced ExDark images.",
    technologies: ["Python", "PyTorch", "RetinexFormer", "ResNet50"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/rashiloya2803-ai/LUSIP",
      },
    ],
  },
  {
    number: "02",
    icon: "brain-circuit",
    title: "Fake News Detection",
    category: "Machine Learning",
    description:
      "A machine learning project for fake news detection using a dataset and a Jupyter Notebook.",
    technologies: ["Python", "Machine Learning", "Pandas", "Jupyter Notebook"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/rashiloya2803-ai/fake-news-detection",
      },
    ],
  },
  {
    number: "03",
    icon: "database",
    title: "DBMS Project",
    category: "Database Management",
    description:
      "Designed and developed a database event management system to organize, store, and manage structured data efficiently.",
    technologies: ["SQL", "DBMS"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/rashiloya2803-ai/DBMS",
      },
    ],
  },
  {
    number: "04",
    icon: "car-front",
    title: "Business Project",
    category: "Web Development",
    description:
      "Developed a business-focused project centered on the electric vehicle sector, exploring market opportunities, business challenges, and potential solutions to support EV adoption.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/rashiloya2803-ai/business",
      },
    ],
  },
];
const projectIcons = {
  "scan-eye": ScanEye,
  "brain-circuit": BrainCircuit,
  database: Database,
  "car-front": CarFront,
};
function App() {
   const [activeProject, setActiveProject] = useState(0);
const [selectedTechs, setSelectedTechs] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
const [displayedRole, setDisplayedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  
const roles = [
  "Computer Science Engineering Student",
  "Aspiring Web Developer",
  "Machine Learning Enthusiast",
  "Computer Vision Explorer",
];




const [contactForm, setContactForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [contactStatus, setContactStatus] = useState("");

const handleContactChange = (event) => {
  const { name, value } = event.target;

  setContactForm((previous) => ({
    ...previous,
    [name]: value,
  }));
};

const handleContactSubmit = async (event) => {
  event.preventDefault();
  setContactStatus("sending");

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setContactStatus("success");
    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    setContactStatus("error");
  }
};

useEffect(() => {
  const currentRole = roles[roleIndex];

  const timeout = setTimeout(() => {
    if (!deleting) {
      const nextText = currentRole.substring(
        0,
        displayedRole.length + 1
      );

      setDisplayedRole(nextText);

      if (nextText === currentRole) {
        setTimeout(() => setDeleting(true), 1200);
      }
    } else {
      const nextText = currentRole.substring(
        0,
        displayedRole.length - 1
      );

      setDisplayedRole(nextText);

      if (nextText === "") {
        setDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      }
    }
  }, deleting ? 45 : 80);

  return () => clearTimeout(timeout);
}, [displayedRole, deleting, roleIndex]);


  const sections = [
    "About",
     "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Contact",
  ];

 


<div className="project-showcase">
  <div className="project-selector">
    <p className="selector-label">EXPLORE PROJECTS</p>

    {projects.map((project, index) => {
      const Icon = projectIcons[project.icon] || Database;

      return (
        <button
          type="button"
          key={project.number}
          className={`project-selector-item ${
            activeProject === index ? "active" : ""
          }`}
          onClick={() => {
            setActiveProject(index);
            setSelectedTechs([]);
          }}
        >
          <span className="project-selector-icon">
            <Icon size={22} />
          </span>

          <span className="project-selector-info">
            <span className="project-selector-number">
              {project.number} / {project.category}
            </span>
            <span className="project-selector-title">
              {project.title}
            </span>
          </span>

          <ChevronRight size={19} />
        </button>
      );
    })}
  </div>

  <div className="project-detail">
    {(() => {
      const project = projects[activeProject];
      const Icon = projectIcons[project.icon] || Database;

      return (
        <>
          <div className="project-detail-top">
            <span className="project-detail-number">
              PROJECT {project.number}
            </span>
            <span className="project-detail-icon">
              <Icon size={30} />
            </span>
          </div>

          <p className="project-detail-category">
            {project.category}
          </p>

          <h3>{project.title}</h3>

          <p className="project-detail-description">
            {project.description}
          </p>

          <div className="project-detail-technologies">
            <p className="technology-heading">TECHNOLOGIES USED</p>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <button
                  type="button"
                  key={tech}
                  className={`project-tech-tag ${
                    selectedTechs.includes(tech) ? "selected" : ""
                  }`}
                  aria-pressed={selectedTechs.includes(tech)}
                  onClick={() =>
                    setSelectedTechs((previous) =>
                      previous.includes(tech)
                        ? previous.filter((item) => item !== tech)
                        : [...previous, tech]
                    )
                  }
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          
        </>
      );
    })()}
  </div>
</div>




  const education = [
    {
      period: "B.Tech",
      title: "JK Lakshmipat University",
      subtitle: "Computer Science Engineering · Jaipur",
      detail: "CGPA: 9.122 through the 4th semester",
    },
    {
      period: "Class XII",
      title: "Maheshwari International School",
      subtitle: "Kishangarh",
      detail: "83.4%",
    },
    {
      period: "Class X",
      title: "Maharaja Sumer Singh Public School",
      subtitle: "Kishangarh",
      detail: "92.5%",
    },
  ];

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio light"}>
      <header className="navbar">
        <a href="#home" className="logo" aria-label="Home">
          RL<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setDarkMode((previous) => !previous)}
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="icon-button mobile-menu"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation"
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="hero section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            
         




<motion.h1
  className="hero-title"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  }}
>
  <motion.span
    className="hero-line"
    variants={{
      hidden: { opacity: 0, y: 25 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
  >
    Building for today.
  </motion.span>

  <motion.span
    className="hero-line hero-accent"
    variants={{
      hidden: { opacity: 0, y: 25 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
  >
    Exploring what's next.
  </motion.span>
</motion.h1>

{/* Animated typing box comes next */}
<motion.p
  className="hero-role"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
>
  {displayedRole}
  <span className="typing-cursor">|</span>
</motion.p>

{/* Your name comes below the box */}
<motion.h2
  className="hero-name-heading"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1 }}
>
  Hi, I'm <span>Rashi Loya.</span>
</motion.h2>
<motion.p
  className="hero-description"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.2 }}
>
  I'm a Computer Science Engineering student passionate about web development,
   machine learning, computer vision and building practical solutions. I enjoy exploring new
  technologies and turning ideas into meaningful projects.
</motion.p>




            

<div className="resume-downloads">
  <a
    href={`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/cv/pdf`}
    className="resume-btn"
    download
  >
    Download CV (PDF) ↓
  </a>

  <a
    href={`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/cv/docx`}
    className="resume-btn resume-btn-outline"
    download
  >
    Download CV (Word) ↓
  </a>
</div>


            
<div className="social-links">
  <a
    href="https://github.com/rashiloya2803-ai"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/rashiloya"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn ↗
  </a>
</div>

          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            

<motion.img
  src="/Images/rashi.jpeg"
  alt="Rashi Loya"
  className="hero-photo"
  initial={{ opacity: 0, scale: 0.92, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
    ease: "easeOut",
  }}
  style={{
    width: "380px",
    height: "460px",
    objectFit: "cover",
    borderRadius: "24px",
  }}
/>
<div className="hero-photo-actions">
  <a href="#projects" className="hero-action-primary">
    <ExternalLink size={17} />
    <span>View Projects</span>
  </a>

  <a href="#contact" className="hero-action-secondary">
    <Mail size={17} />
    <span>Contact Me</span>
  </a>
</div>





          </motion.div>
        </section>

{/* About */}
<section id="about" className="section content-section">
  <p className="eyebrow">A LITTLE ABOUT ME</p>
  <h2>Curiosity drives what I build.</h2>

  <motion.div
    className="about-grid"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <div className="about-text">
      <p className="about-intro">
        Hi, I'm <strong>Rashi Loya</strong> — a Computer Science
        Engineering student at JK Lakshmipat University, Jaipur,
        passionate about technology and practical problem-solving.
      </p>

      <p>
        From exploring machine learning and computer vision to
        developing software projects, I enjoy learning how technology
        can turn ideas into useful solutions. My project experience
        includes low-light accident classification, fake news detection,
        database systems, and data analysis.
      </p>

      <div className="about-details">
        <div className="about-detail-item">
          <span className="about-detail-label">EDUCATION</span>
          <p>B.Tech — Computer Science Engineering</p>
        </div>

        <div className="about-detail-item">
          <span className="about-detail-label">LOCATION</span>
          <p>Jaipur, India</p>
        </div>

        <div className="about-detail-item">
          <span className="about-detail-label">AREAS OF INTEREST</span>
          <p>Web Development · Machine Learning · Computer Vision</p>
        </div>

        <div className="about-detail-item">
          <span className="about-detail-label">CURRENTLY</span>
          <p>Learning, building projects, and exploring opportunities</p>
        </div>
      </div>
    </div>

    <motion.div
      className="about-highlight"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <div className="about-highlight-icon">
        <GraduationCap size={30} />
      </div>

      <p className="about-highlight-label">ACADEMIC HIGHLIGHT</p>
      <p className="highlight-number">9.122</p>
      <p className="about-highlight-caption">CGPA</p>
      <div className="about-highlight-divider" />
      <span>Through 4th semester</span>
      <span>JK Lakshmipat University</span>
    </motion.div>
  </motion.div>
</section>
{/* Skills Section */}
{/* Skills */}
<section id="skills" className="section content-section">
  <p className="eyebrow">WHAT I WORK WITH</p>
  <h2>Skills & Technologies.</h2>
  <p className="skills-intro">
    Tools and technologies I use to learn, build projects, and solve problems.
  </p>

  <div className="skills-grid">
    <motion.div
      className="skill-category"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="skill-card-heading">
        <span className="skill-card-number">01</span>
        <h3>Frontend Development</h3>
      </div>
      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
      </div>
    </motion.div>

    <motion.div
      className="skill-category"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="skill-card-heading">
        <span className="skill-card-number">02</span>
        <h3>Programming & Backend</h3>
      </div>
      <div className="skill-tags">
        <span>Python</span>
        <span>C</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>
    </motion.div>

    <motion.div
      className="skill-category"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="skill-card-heading">
        <span className="skill-card-number">03</span>
        <h3>AI & Data</h3>
      </div>
      <div className="skill-tags">
        <span>Machine Learning</span>
        <span>Deep Learning</span>
        <span>Computer Vision</span>
        <span>PyTorch</span>
        <span>Data Analysis</span>
      </div>
    </motion.div>

    <motion.div
      className="skill-category"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="skill-card-heading">
        <span className="skill-card-number">04</span>
        <h3>Tools & Core Concepts</h3>
      </div>
      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
      </div>
    </motion.div>
  </div>
</section>


        {/* Projects */}
        <section id="projects" className="section content-section">
          <p className="eyebrow">WHAT I'VE WORKED ON</p>
          <h2>Selected Projects<span>.</span></h2>
          <p className="section-description">
            A selection of academic and machine learning projects.
          </p>

         
<div className="project-showcase">
  <div className="project-selector">
    <p className="selector-label">EXPLORE PROJECTS</p>

    {projects.map((project, index) => {
      const Icon = projectIcons[project.icon] || Database;

      return (
        <button
          type="button"
          key={project.number}
          className={`project-selector-item ${
            activeProject === index ? "active" : ""
          }`}
          onClick={() => {
            setActiveProject(index);
            setSelectedTechs([]);
          }}
        >
          <span className="project-selector-icon">
            <Icon size={22} />
          </span>

          <span className="project-selector-info">
            <span className="project-selector-number">
              {project.number} / {project.category}
            </span>
            <span className="project-selector-title">
              {project.title}
            </span>
          </span>

          <ChevronRight size={19} />
        </button>
      );
    })}
  </div>

  <div className="project-detail">
    {(() => {
      const project = projects[activeProject];
      const Icon = projectIcons[project.icon] || Database;

      return (
        <>
          <div className="project-detail-top">
            <span className="project-detail-number">
              PROJECT {project.number}
            </span>
            <span className="project-detail-icon">
              <Icon size={30} />
            </span>
          </div>

          <p className="project-detail-category">
            {project.category}
          </p>

          <h3>{project.title}</h3>

          <p className="project-detail-description">
            {project.description}
          </p>

          <div className="project-detail-technologies">
            <p className="technology-heading">TECHNOLOGIES USED</p>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <button
                  type="button"
                  key={tech}
                  className={`project-tech-tag ${
                    selectedTechs.includes(tech) ? "selected" : ""
                  }`}
                  aria-pressed={selectedTechs.includes(tech)}
                  onClick={() =>
                    setSelectedTechs((previous) =>
                      previous.includes(tech)
                        ? previous.filter((item) => item !== tech)
                        : [...previous, tech]
                    )
                  }
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className="project-detail-footer">
            <span className="project-footer-caption">
              Interested in the implementation?
            </span>

            <div className="project-detail-links">
              {project.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-button"
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </>
      );
    })()}
  </div>
</div>

        </section>
         

{/* Certifications */}


<section id="certifications" className="section">
  <div className="section-heading">
    <p className="eyebrow certification-eyebrow">
      MY LEARNING JOURNEY
    </p>
    <h2 className="certification-heading">Certifications</h2>
    <p>
      Courses and achievements that reflect my continuous learning.
    </p>
  </div>

  <div className="certifications-grid">
    {[
      {
        title: "Anytime Investment",
        file: "/Certificates/Anytime_Invest.pdf",
        number: "01",
      },
      {
        title: "Infosys Springboard",
        file: "/Certificates/Infosys_Springboard.pdf",
        number: "02",
      },
      {
        title: "PS-I LUSIP 2026",
        file: "/Certificates/PS_LUSIP_2026.pdf",
        number: "03",
      },
      {
        title: "Red Hat",
        file: "/Certificates/Redhat.pdf",
        number: "04",
      },
    ].map((certificate) => (
      <article className="certification-card" key={certificate.number}>
        <div className="certification-card-top">
          <span className="certification-number">
            {certificate.number}
          </span>
          <span className="certification-label">
            CERTIFICATE
          </span>
        </div>

        <div className="certification-card-content">
          <h3>{certificate.title}</h3>
          
        </div>

        <div className="certification-card-footer">
          <span>View credential</span>
          <a
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certificate.title} certificate`}
            className="certificate-link"
            title="Open certificate"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path d="M14 3h7v7" />
              <path d="M10 14 21 3" />
              <path d="M21 14v7H3V3h7" />
            </svg>
          </a>
        </div>
      </article>
    ))}
  </div>
</section>





        {/* Education */}

<section id="education" className="section content-section">
  <p className="eyebrow">MY JOURNEY SO FAR</p>
  <h2>
    Education &amp; Experience<span>.</span>
  </h2>

  <div className="timeline">
    {[
      {
        period: "Summer 2026",
        title: "Undergraduate Summer Intern — LUSIP",
        subtitle: "LNMIIT, Jaipur",
        detail:
          "Accident Classification under Low Illumination",
      },
      ...education,
    ].map((item, index) => (
      <motion.article
        className="timeline-item"
        key={`${item.title}-${index}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.5,
          delay: index * 0.12,
        }}
      >
        <div className="timeline-marker" />

        <div className="timeline-card">
          <span className="timeline-period">
            {item.period}
          </span>

          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
          <strong>{item.detail}</strong>
        </div>
      </motion.article>
    ))}
  </div>
</section>

        {/* Contact */}
        
{/* Contact */}
<section id="contact" className="section content-section">
  <p className="eyebrow">LET'S CONNECT</p>
  <h2>Have an idea? Let's talk<span>.</span></h2>
  <p className="section-description">
    Interested in collaborating or discussing technology?
    Feel free to get in touch.
  </p>

  <form className="contact-form" onSubmit={handleContactSubmit}>
    <div className="form-group">
      <label htmlFor="contact-name">Your Name</label>
      <input
        id="contact-name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={contactForm.name}
        onChange={handleContactChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="contact-email">Email Address</label>
      <input
        id="contact-email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={contactForm.email}
        onChange={handleContactChange}
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Tell me about your idea..."
        rows="5"
        value={contactForm.message}
        onChange={handleContactChange}
        required
      />
    </div>

    <button className="button primary" type="submit" disabled={contactStatus === "sending"}>
      {contactStatus === "sending" ? "Sending..." : "Send Message"}
    </button>
    
{contactStatus === "sending" && (
  <p className="contact-feedback" role="status">
    Sending your message...
  </p>
)}


    {contactStatus === "success" && (
      <p className="contact-feedback success">
        Message sent successfully! Thank you for reaching out.
      </p>
    )}

    {contactStatus === "error" && (
      <p className="contact-feedback error">
        Unable to send your message. Please try again.
      </p>
    )}
  </form>

  <a
    className="button primary contact-email"
    href="mailto:rashiloya2803@gmail.com"
  >
    <Mail size={18} /> rashiloya2803@gmail.com
  </a>
</section>

      </main>

      <footer className="footer">
        <p>Designed and built by Rashi Loya</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
