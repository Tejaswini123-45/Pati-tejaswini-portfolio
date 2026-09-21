const projects = [
  {
    name: 'Hackemics',
    type: 'Product contribution · Full-stack marketplace',
    description: 'Contributed to a micro-hackathon marketplace connecting companies with students through real-world challenges, time-bound sprints, XP, rankings and portfolio-ready work.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Product workflows'],
    links: [{ label: 'Live product ↗', href: 'https://www.hackemics.com/' }],
  },
  {
    name: 'Growth Hub AI',
    type: 'AI product · Multi-agent workflows',
    description: 'A business co-founder platform that combines FastAPI, CrewAI and Gemini for research, planning, content workflows and decision support.',
    stack: ['Python', 'FastAPI', 'CrewAI', 'Gemini'],
    links: [
      { label: 'Live demo ↗', href: 'https://kagglecapstoneproject-1.onrender.com' },
      { label: 'Repository ↗', href: 'https://github.com/Tejaswini123-45/KAGGLECAPSTONEPROJECT' },
    ],
  },
  {
    name: 'GST Sentinel',
    type: 'Data platform · Risk intelligence',
    description: 'A GST reconciliation and risk intelligence platform with ingestion, validation, anomaly detection, MongoDB, Neo4j and a Streamlit investigation dashboard.',
    stack: ['Python', 'scikit-learn', 'MongoDB', 'Neo4j'],
    links: [
      { label: 'Live dashboard ↗', href: 'https://gst-frontend-t20f.onrender.com' },
      { label: 'Repository ↗', href: 'https://github.com/Tejaswini123-45/GST_ML-' },
    ],
  },
  {
    name: 'ASTRA',
    type: 'Decision support · Full-stack system',
    description: 'A multi-hazard red-zone and relocation planning platform combining deterministic analysis, GIS-oriented workflows and constrained AI assistance.',
    stack: ['Next.js', 'TypeScript', 'GIS', 'AI'],
    links: [{ label: 'Repository ↗', href: 'https://github.com/Tejaswini123-45/astra-relocation-intelligence' }],
  },
  {
    name: 'CareSync',
    type: 'Application · Healthcare workflow',
    description: 'A Python and SQLite management application for structured patient records, appointments, prescriptions and reports.',
    stack: ['Python', 'SQLite', 'OOP'],
    links: [{ label: 'Repository ↗', href: 'https://github.com/Tejaswini123-45/Hospital-Management-System' }],
  },
]

export default function Home() {
  return <main>
    <nav className="nav"><a className="brand" href="#top">PT<span>.</span></a><div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><a className="navcta" href="https://github.com/Tejaswini123-45" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
    <section id="top" className="hero wrap"><div className="eyebrow"><span className="dot"/> Available for internships & freelance projects</div><h1>I build useful software<br/><em>with intelligent systems.</em></h1><p className="lead">I’m Tejaswini — an Information Technology student and developer working across full-stack applications, AI agents, data platforms and practical automation.</p><div className="actions"><a className="button primary" href="#work">Explore my work ↓</a><a className="button secondary" href="mailto:patitejaswinireddy@gmail.com">Let’s talk ↗</a></div><div className="herofoot"><span>Hyderabad, India</span><span>Python · TypeScript · AI</span></div></section>
    <section id="work" className="section wrap"><div className="sectionhead"><div><p className="kicker">Selected work</p><h2>Things I’ve built.</h2></div><p className="muted">A selection of products, systems and experiments. Open a live product when available or inspect the source code to understand the implementation.</p></div><div className="projects">{projects.map((p, i) => <article className="project" key={p.name}><div className="projecttop"><span className="number">{String(i + 1).padStart(2, '0')}</span><span className="projecttype">{p.type}</span></div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div><div className="projectlinks">{p.links.map(link => <a className="projectlink" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}</a>)}</div></article>)}</div></section>
    <section id="about" className="section about wrap"><div><p className="kicker">A little about me</p><h2>Curious by default.<br/>Practical by choice.</h2></div><div className="aboutcopy"><p>I enjoy taking an unclear problem, breaking it into systems, and turning it into something people can actually use. My current focus is the intersection of full-stack engineering, machine learning and agentic workflows.</p><p>I care about clear architecture, honest technical claims and interfaces that make complex work feel simple.</p><div className="facts"><span>9.25 CGPA</span><span>Hackathons · AI Projects</span><span>IT · CBIT</span></div></div></section>
    <section id="contact" className="contact wrap"><p className="kicker">Have a problem worth building?</p><h2>Let’s make something<br/><em>worth showing.</em></h2><a className="button primary" href="mailto:patitejaswinireddy@gmail.com">Get in touch ↗</a><div className="contactlinks"><a href="https://www.linkedin.com/in/pati-tejaswini-7a573b292" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Tejaswini123-45" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://leetcode.com/u/Pati_Tejaswini/" target="_blank" rel="noreferrer">LeetCode ↗</a></div></section>
    <footer className="footer wrap"><span>© 2026 Pati Tejaswini</span><span>Built with Next.js · Deployed with Vercel</span></footer>
  </main>
}
