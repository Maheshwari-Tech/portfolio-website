import React, { useEffect, useState } from 'react';
import './App.css';

const experiences = [
  {
    company: 'Microsoft',
    role: 'Software Engineer II',
    period: '2025 — Present',
    tone: 'lilac',
    summary: 'Building guardrails, health validation, and feedback loops for Azure Storage capacity services.',
    highlights: ['Service health validation', 'Automated alert feedback loops'],
    tags: ['Java', 'Azure', 'KQL', 'EV2']
  },
  {
    company: 'DP World',
    role: 'Software Engineer',
    period: '2023 — 2025',
    tone: 'peach',
    summary: 'Modernized logistics and billing platforms into reliable, high-performing Java microservices.',
    highlights: ['2 min to sub-500ms P95 APIs', 'Invoice, tax, and ledger services'],
    tags: ['Java', 'Spring Boot', 'SQL', 'Kafka']
  },
  {
    company: 'Amazon',
    role: 'SDE I',
    period: '2022',
    tone: 'yellow',
    summary: 'Designed backend automation and billing systems at customer scale.',
    highlights: ['RetroCharge billing redesign', 'MoveAndMerge automation'],
    tags: ['AWS', 'DynamoDB', 'SQS', 'SNS']
  },
  {
    company: 'Rakuten India',
    role: 'Software Developer',
    period: '2020 — 2022',
    tone: 'mint',
    summary: 'Built e-commerce microservices and mentored new engineers through hands-on collaboration.',
    highlights: ['Production microservices', 'Mentoring and code reviews'],
    tags: ['Java', 'Spring Boot', 'MongoDB', 'React']
  }
];

const timeline = [
  ['Jul 2025 — Present', 'Software Engineer II', 'Microsoft', 'Azure Storage capacity, service health checks, guardrails, and automated alerting.'],
  ['Jul 2023 — Jul 2025', 'Software Engineer', 'DP World', 'High-availability logistics, finance, and master-data services across global operations.'],
  ['Mar 2022 — Dec 2022', 'Software Development Engineer I', 'Amazon', 'Scalable billing adjustments and seller-account automation using AWS services.'],
  ['Jan 2020 — Jan 2022', 'Software Developer', 'Rakuten India', 'E-commerce microservices, internal innovation, and practical engineering mentorship.']
];

const technologies = [
  ['fa-brands fa-java', 'Java', 'lilac'],
  ['fa-solid fa-power-off', 'Spring Boot', 'mint'],
  ['fa-solid fa-diagram-project', 'Kafka', 'pink'],
  ['fa-solid fa-database', 'SQL', 'yellow'],
  ['fa-brands fa-aws', 'AWS', 'peach'],
  ['fa-solid fa-cloud', 'Azure', 'blue']
];

const notes = [
  {
    title: 'System Design Principles',
    description: 'Building scalable systems, trade-offs, and patterns that stay reliable under pressure.',
    image: '/images/system-design.jpg',
    tags: ['System Design', 'Architecture', 'Scalability']
  },
  {
    title: 'Building REST APIs',
    description: 'Hands-on guides and best practices for designing, building, and securing RESTful APIs.',
    image: '/images/rest-apis.jpg',
    tags: ['APIs', 'REST', 'Backend']
  },
  {
    title: 'Machine Learning with Python',
    description: 'A practical introduction to machine learning, useful models, and the Python ecosystem.',
    image: '/images/ml-python.jpg',
    tags: ['ML', 'Python', 'Data Science']
  },
  {
    title: 'API Design Patterns',
    description: 'Patterns for intuitive, maintainable interfaces between teams and services.',
    image: '/images/apigateway.jpg',
    tags: ['Patterns', 'Best Practices', 'Design']
  }
];

function navigateTo(path, setRoute) {
  window.history.pushState({}, '', path);
  setRoute(window.location.pathname);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Header({ route, setRoute }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="/" onClick={(event) => { event.preventDefault(); navigateTo('/', setRoute); }}>Shalini Thebaria</a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          <a href="/#about" onClick={() => setOpen(false)}>About</a>
          <a href="/#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="/#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="/#skills" onClick={() => setOpen(false)}>Skills</a>
          <a className={route === '/beyond-tech' ? 'active' : ''} href="/beyond-tech" onClick={(event) => { event.preventDefault(); setOpen(false); navigateTo('/beyond-tech', setRoute); }}>Beyond Tech</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <i className="fa-solid fa-download" aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ number, children }) {
  return <p className="section-label">{number} / {children}</p>;
}

function ButtonLink({ href, children, secondary = false, icon = 'fa-arrow-right', external = false }) {
  return (
    <a className={secondary ? 'button button-secondary' : 'button'} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      {children}<i className={`fa-solid ${icon}`} aria-hidden="true" />
    </a>
  );
}

function HomePage({ setRoute }) {
  return (
    <main>
      <section className="hero shell" id="about">
        <div className="hero-copy">
          <SectionLabel number="01">I BUILD — ABOUT</SectionLabel>
          <p className="eyebrow">Software Engineer · Backend · Cloud</p>
          <h1>I build <span>reliable systems</span> that scale.</h1>
          <p className="hero-intro">I design and deliver backend systems, cloud-native applications, and data-driven solutions that power real-world impact. I’ve worked with <strong>Microsoft, DP World, Amazon,</strong> and <strong>Rakuten India</strong> to build systems that are reliable, efficient, and built to grow.</p>
          <div className="button-row">
            <ButtonLink href="#experience">Explore my work</ButtonLink>
            <ButtonLink href="/resume.pdf" secondary icon="fa-download">View resume</ButtonLink>
          </div>
          <dl className="hero-facts">
            <div><dt><i className="fa-solid fa-location-dot" aria-hidden="true" /> Based in</dt><dd>Bangalore</dd></div>
            <div><dt><i className="fa-solid fa-briefcase" aria-hidden="true" /> Experience</dt><dd>5+ years</dd></div>
            <div><dt><i className="fa-regular fa-clock" aria-hidden="true" /> Availability</dt><dd>Open to opportunities</dd></div>
          </dl>
        </div>
        <div className="portrait-frame">
          <img src="/images/profilePic.jpg" alt="Shalini Thebaria" />
          <div className="portrait-note"><strong>Systems thinker</strong><span>Reliable · Scalable · Human</span></div>
        </div>
      </section>

      <section className="whole-picture section-block">
        <div className="shell">
          <SectionLabel number="02">THE WHOLE PICTURE</SectionLabel>
          <h2>I like the <span>whole</span> picture.</h2>
          <div className="whole-grid">
            <p>From architecture and APIs to data, cloud, and the user experience — I enjoy connecting the dots and shipping systems that make a difference.</p>
            <p>I’m curious by nature and thrive on solving complex problems. I enjoy learning, collaborating across functions, and turning ambitious ideas into practical, scalable solutions.</p>
            <p>Beyond engineering, I care about mentoring, teaching, badminton, and staying grounded in the communities that shaped me.</p>
          </div>
        </div>
      </section>

      <section className="technologies section-block" id="skills">
        <div className="shell technology-layout">
          <div className="technology-copy">
            <SectionLabel number="03">TECHNOLOGIES</SectionLabel>
            <h2>Technologies I work with to craft <span>dependable systems.</span></h2>
            <p>A practical toolkit for designing, building, shipping, and operating software at scale.</p>
            <aside className="learning-note"><i className="fa-solid fa-bullseye" aria-hidden="true" /><span><strong>Always learning, always iterating.</strong> Exploring better ways to build, ship, and operate.</span></aside>
          </div>
          <div className="technology-cloud" aria-label="Core technologies">
            <div className="tech-core"><i className="fa-solid fa-code" aria-hidden="true" /><span>Core systems</span></div>
            {technologies.map(([icon, label, tone]) => (
              <div className={`tech-item ${tone}`} key={label}><i className={icon} aria-hidden="true" /><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="selected-experience section-block" id="experience">
        <div className="shell">
          <SectionLabel number="04">SELECTED WORK EXPERIENCE</SectionLabel>
          <div className="section-heading-row"><h2>Engineering in <span>practice.</span></h2><p>Selected systems and teams where reliability, scale, and care translated into measurable impact.</p></div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className={`experience-card ${experience.tone}`} key={experience.company}>
                <div className="card-top"><h3>{experience.company}</h3><span>{experience.period}</span></div>
                <p className="role">{experience.role}</p>
                <p>{experience.summary}</p>
                <div className="impact"><strong>Impact highlights</strong>{experience.highlights.map(item => <span key={item}><i className="fa-solid fa-check" aria-hidden="true" />{item}</span>)}</div>
                <div className="tag-row">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section section-block">
        <div className="shell">
          <SectionLabel number="05">EXPERIENCE TIMELINE</SectionLabel>
          <div className="timeline-layout">
            <aside className="timeline-summary"><div className="years-badge"><i className="fa-solid fa-briefcase" aria-hidden="true" /><strong>5+ years</strong><span>Building scalable backend systems</span></div></aside>
            <div className="timeline-list">
              {timeline.map(([period, role, company, description], index) => (
                <article className="timeline-item" key={company}>
                  <time>{period}</time><span className={`timeline-dot dot-${index}`} aria-hidden="true" />
                  <div><h3>{role} <em>· {company}</em></h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-notes section-block" id="projects">
        <div className="shell projects-layout">
          <div className="projects-copy">
            <SectionLabel number="06">PERSONAL PROJECTS & NOTES</SectionLabel>
            <h2>My lab for what I <span>learn, build,</span> and <span>teach.</span></h2>
            <p>A living space for ideas, experiments, and notes. I write about engineering concepts, system design, and patterns that solve real problems.</p>
            <div className="profile-links">
              <a href="https://github.com/thebaria04" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true" /><span><strong>GitHub</strong>Explore code</span><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
              <a href="https://youtube.com/@shalinithebaria" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube" aria-hidden="true" /><span><strong>YouTube</strong>Explore videos</span><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="notes-grid">
            {notes.map(note => (
              <article className="note-card" key={note.title}>
                <img src={note.image} alt="" />
                <div><h3>{note.title}</h3><p>{note.description}</p><div className="tag-row">{note.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-block" id="contact">
        <div className="shell">
          <SectionLabel number="07">LET'S BUILD & CONNECT</SectionLabel>
          <div className="contact-layout">
            <div><h2>Let’s build something <span>meaningful.</span></h2><p>I’m open to interesting problems and collaborative work.</p></div>
            <div className="contact-links">
              <a href="mailto:shalinithebaria.work@gmail.com"><i className="fa-regular fa-envelope" aria-hidden="true" />shalinithebaria.work@gmail.com<i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
              <a href="https://linkedin.com/in/shalini-thebaria" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true" />linkedin.com/in/shalini-thebaria<i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
              <a href="https://github.com/thebaria04" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true" />github.com/thebaria04<i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
            </div>
            <div className="contact-actions"><ButtonLink href="mailto:shalinithebaria.work@gmail.com">Get in touch</ButtonLink><ButtonLink href="/resume.pdf" secondary icon="fa-download">View resume</ButtonLink></div>
          </div>

          <a className="beyond-teaser" href="/beyond-tech" onClick={(event) => { event.preventDefault(); navigateTo('/beyond-tech', setRoute); }}>
            <img src="/images/badminton-hero.png" alt="Badminton racket and shuttlecock" />
            <span><small>BEYOND TECH</small><strong>Beyond the code</strong><em>Badminton, beginnings, and the Navodayan kid at heart.</em></span>
            <b>Step beyond tech <i className="fa-solid fa-arrow-right" aria-hidden="true" /></b>
          </a>
        </div>
      </section>
    </main>
  );
}

function BeyondTechPage({ setRoute }) {
  return (
    <main className="beyond-page">
      <section className="beyond-hero shell">
        <a className="back-link" href="/" onClick={(event) => { event.preventDefault(); navigateTo('/', setRoute); }}><i className="fa-solid fa-arrow-left" aria-hidden="true" />Back to portfolio</a>
        <div className="beyond-hero-grid">
          <div><p className="section-label">BEYOND TECH</p><h1>A Navodayan <span>kid at heart.</span></h1><p>The curiosity, community, and resilience I grew up with still shape how I learn, build, and show up today.</p></div>
          <img src="/images/badminton-hero.png" alt="A badminton racket and shuttlecock on a court" />
        </div>
      </section>

      <section className="badminton-story section-block">
        <div className="shell badminton-grid">
          <div><p className="section-label">ON COURT, OFF COURT</p><h2>Badminton <span>keeps me moving.</span></h2><p>Badminton is my reset button. It teaches me to stay light on my feet, think ahead, and respond with clarity.</p><p>Every rally is a lesson — focus in the moment, consistency over time, and the ability to recover after a mistake.</p><p>More than the score, I love the joy of play, the satisfaction of a well-earned point, and the energy that comes from showing up again and again.</p></div>
          <img src="/images/badminton-court.png" alt="An empty badminton court in morning light" />
        </div>
      </section>

      <section className="values-section section-block">
        <div className="shell">
          <p className="section-label centered">THE PRINCIPLES I CARRY</p><h2 className="centered">What stays <span>with me.</span></h2>
          <div className="values-grid">
            <article><i className="fa-solid fa-magnifying-glass" aria-hidden="true" /><div><h3>Curiosity</h3><p>I ask questions, explore deeply, and love turning curiosity into meaningful solutions.</p></div></article>
            <article><i className="fa-solid fa-people-group" aria-hidden="true" /><div><h3>Community</h3><p>I believe in lifting others up, sharing knowledge, and building spaces where we grow together.</p></div></article>
            <article><i className="fa-solid fa-mountain-sun" aria-hidden="true" /><div><h3>Resilience</h3><p>I stay grounded through challenges, learn from setbacks, and keep moving forward with purpose.</p></div></article>
          </div>
          <blockquote><span>“</span>Always a<br />Navodayan kid at heart.</blockquote>
        </div>
      </section>

      <section className="beyond-contact section-block">
        <div className="shell beyond-contact-grid"><div><p className="section-label">LET'S STAY IN TOUCH</p><h2>Let’s connect <span>beyond the code.</span></h2><p>Whether it’s a conversation, a collaboration, or just sharing ideas, I’d love to hear from you.</p></div><div className="stacked-actions"><ButtonLink href="mailto:shalinithebaria.work@gmail.com">Get in touch</ButtonLink><a className="button button-secondary" href="https://linkedin.com/in/shalini-thebaria" target="_blank" rel="noreferrer">Connect on LinkedIn<i className="fa-brands fa-linkedin" aria-hidden="true" /></a><a className="button button-secondary" href="/" onClick={(event) => { event.preventDefault(); navigateTo('/', setRoute); }}><i className="fa-solid fa-arrow-left" aria-hidden="true" />Back to my work</a></div></div>
      </section>
    </main>
  );
}

function Footer() {
  return <footer><div className="shell footer-inner"><span>© 2026 Shalini Thebaria. All rights reserved.</span><span>Built with clarity, care, and conviction.</span><div><a href="https://linkedin.com/in/shalini-thebaria" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a><a href="https://github.com/thebaria04" aria-label="GitHub"><i className="fa-brands fa-github" /></a><a href="https://youtube.com/@shalinithebaria" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a></div></div></footer>;
}

function App() {
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(() => {
    const onPopState = () => { setRoute(window.location.pathname); window.scrollTo(0, 0); };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return <div className="App"><Header route={route} setRoute={setRoute} />{route === '/beyond-tech' ? <BeyondTechPage setRoute={setRoute} /> : <HomePage setRoute={setRoute} />}<Footer /></div>;
}

export default App;
