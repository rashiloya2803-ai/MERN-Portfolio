
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

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
const roles = [
  "Computer Science Engineering Student",
  "Aspiring Web Developer",
  "Machine Learning Enthusiast",
  "Computer Vision Explorer",
];

const [roleIndex, setRoleIndex] = useState(0);
const [displayedRole, setDisplayedRole] = useState("");
const [deleting, setDeleting] = useState(false);

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

  const timeout = setTimeout(
    () => {
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
    },
    deleting ? 45 : 80
  );

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

  const projects = [
    
{
  number: "01",
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
  title: "DBMS Project",
  category: "Database Management",
  description:
    "Designed and developed a database event management system to organize, store, and manage structured data efficiently. Applied SQL concepts and database operations to maintain data accuracy and support efficient data retrieval.",
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
  title: "Business Project",
  category: "Web Development",
  description:
    "Developed a business-focused project centered on the electric vehicle (EV) sector, exploring market opportunities, business challenges, and potential solutions to support EV adoption.",
  technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/rashiloya2803-ai/business",
    },
  ],
},
  ];

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





<p className="hero-description">
  I'm a Computer Science Engineering student interested in
  web development, machine learning, and computer vision,
  with a passion for creating technology-driven solutions
  to real-world challenges.
</p>

            

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
      <p>
        Hi! I'm Rashi Loya, a Computer Science Engineering
        student at JK Lakshmipat University, Jaipur. I'm
        interested in software development, machine learning,
        and solving practical problems through technology.
      </p>

      <p>
        My project experience includes computer vision for
        low-light accident classification, fake news detection,
        database systems, and data analysis. I enjoy learning
        new technologies and turning ideas into practical
        solutions.
      </p>

      <div className="about-details">
        <p> <strong>Location:</strong> Jaipur, India</p>
        <p> <strong>Education:</strong> B.Tech in Computer Science Engineering</p>
        <p> <strong>Interests:</strong> Web Development, Machine Learning & Computer Vision</p>
        <p> <strong>Current status:</strong> Learning, building projects, and exploring opportunities</p>
      </div>
    </div>

    <motion.div
      className="about-highlight"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <GraduationCap size={28} />
      <p className="highlight-number">9.122</p>
      <p>CGPA through 4th semester</p>
      <span>JK Lakshmipat University</span>
    </motion.div>
  </motion.div>
</section>

{/* Skills Section */}
<section id="skills" className="section content-section">
  <p className="eyebrow">WHAT I WORK WITH</p>
  <h2>Skills & Technologies.</h2>
  <p className="skills-intro">
    Tools and technologies I use to learn, build projects, and solve problems.
  </p>

  <div className="skills-grid">
    <div className="skill-category">
      <h3>Frontend Development</h3>
      <div className="skill-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Programming & Backend</h3>
      <div className="skill-tags">
        <span>Python</span>
        <span>C</span>
        <span>Node.js</span>
        <span>MongoDB</span> 
      </div>
    </div>

    <div className="skill-category">
      <h3>AI & Data</h3>
      <div className="skill-tags">
        <span>Machine Learning</span>
        <span>Deep Learning</span>
        <span>Computer Vision</span>
        <span>PyTorch</span>
        <span>Data Analysis</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Tools & Core Concepts</h3>
      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
      </div>
    </div>
  </div>
</section>



        {/* Projects */}
        <section id="projects" className="section content-section">
          <p className="eyebrow">WHAT I'VE WORKED ON</p>
          <h2>Selected Projects<span>.</span></h2>
          <p className="section-description">
            A selection of academic and machine learning projects.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.number}
                
initial={{ opacity: 0, y: 30, scale: 0.98 }}
whileInView={{ opacity: 1, y: 0, scale: 1 }}
whileHover={{ y: -8, scale: 1.01 }}
viewport={{ once: true, amount: 0.15 }}
transition={{
  duration: 0.45,
  delay: index * 0.08,
  ease: "easeOut",
}}

              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                
                  <a
  href={project.links?.[0]?.url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`View ${project.title} on GitHub`}
  className="project-external-link"
>
  <ExternalLink size={20} />
</a>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  


                </div>
              </motion.article>
            ))}
          </div>
        </section>
         

{/* Certifications */}

<section id="certifications" className="section">
  <div className="section-heading">
    <p className="eyebrow certification-eyebrow">
      MY LEARNING JOURNEY
    </p>
    <h2 className="certification-heading">Certifications</h2>
    <p>Courses and achievements that reflect my continuous learning.</p>
  </div>

  <div className="certifications-grid">
    <div className="certification-card">
      <div className="certification-card-header">
        <h3>Anytime Investment</h3>
        <a
          href="/Certificates/Anytime_Invest.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Anytime Investment certificate"
          className="certificate-link"
        >
          <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            width="24" height="24" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />
            <path d="M21 14v7H3V3h7" />
          </svg>
        </a>
      </div>
    </div>

    <div className="certification-card">
      <div className="certification-card-header">
        <h3>Infosys Springboard</h3>
        <a
          href="/Certificates/Infosys_Springboard.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Infosys Springboard certificate"
          className="certificate-link"
        >
          <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            width="24" height="24" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />
            <path d="M21 14v7H3V3h7" />
          </svg>
        </a>
      </div>
    </div>

    <div className="certification-card">
      <div className="certification-card-header">
        <h3>PS-I LUSIP 2026</h3>
        <a
          href="/Certificates/PS_LUSIP_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View PS-I LUSIP 2026 certificate"
          className="certificate-link"
        >
          <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            width="24" height="24" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />
            <path d="M21 14v7H3V3h7" />
          </svg>
        </a>
      </div>
    </div>

    <div className="certification-card">
      <div className="certification-card-header">
        <h3>Red Hat</h3>
        <a
          href="/Certificates/Redhat.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Red Hat certificate"
          className="certificate-link"
        >
          <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            width="24" height="24" aria-hidden="true">
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />
            <path d="M21 14v7H3V3h7" />
          </svg>
        </a>
      </div>
    </div>
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
