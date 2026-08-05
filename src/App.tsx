const projects = [
  {
    code: "PW",
    eyebrow: "UI + API AUTOMATION",
    title: "Playwright Projects",
    description:
      "Suites en TypeScript para aplicaciones públicas y una app Angular local, con cobertura E2E, API, interceptación de red y ejecución multibrowser.",
    tags: ["Playwright", "TypeScript", "POM", "GitHub Actions", "Allure"],
    highlights: ["DemoQA y SauceDemo", "JSONPlaceholder", "Chromium y Firefox"],
    href: "https://github.com/VickyNovarese/Playwright-Proyectos",
    action: "Explorar repositorio",
    accent: "teal",
  },
  {
    code: "CY",
    eyebrow: "END-TO-END TESTING",
    title: "Cypress Portfolio",
    description:
      "Automatización web en JavaScript con escenarios positivos, negativos y de límites, fixtures, Faker y Page Object Model.",
    tags: ["Cypress", "JavaScript", "Faker", "Fixtures", "Drag & Drop"],
    highlights: ["Practice Form", "Login y accesos", "Widgets interactivos"],
    href: "https://github.com/VickyNovarese/Cypress-Portfolio",
    action: "Explorar repositorio",
    accent: "green",
  },
  {
    code: "API",
    eyebrow: "REST API TESTING",
    title: "Postman API Portfolio",
    description:
      "Colecciones con flujos CRUD, autenticación, variables dinámicas y assertions JavaScript sobre APIs públicas.",
    tags: ["Postman", "REST", "Newman", "CRUD", "Authentication"],
    highlights: ["Trello", "DemoQA Book Store", "Petstore y OpenAI"],
    href: "https://github.com/VickyNovarese/API-Testing-Portfolio-Postman",
    action: "Explorar repositorio",
    accent: "orange",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Automatización",
    skills: ["Playwright", "Cypress", "TypeScript", "JavaScript", "Page Object Model", "Fixtures"],
  },
  {
    number: "02",
    title: "API Testing",
    skills: ["Postman", "REST", "Newman", "CRUD", "Bearer Auth", "JSON validation"],
  },
  {
    number: "03",
    title: "Quality Engineering",
    skills: ["Functional testing", "SQL", "Database testing", "JOINs", "Test design", "Evidence"],
  },
  {
    number: "04",
    title: "Entrega",
    skills: ["Git", "GitHub", "GitHub Actions", "HTML reports", "JUnit", "Allure"],
  },
];

const process = [
  ["01", "Analizar", "Entender requerimientos, contexto y riesgos."],
  ["02", "Diseñar", "Traducir riesgos en escenarios verificables."],
  ["03", "Automatizar", "Construir pruebas legibles y mantenibles."],
  ["04", "Ejecutar", "Validar UI, APIs y comportamientos críticos."],
  ["05", "Evidenciar", "Convertir resultados en información accionable."],
];

export default function Home() {
  return (
    <main id="inicio">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark" aria-hidden="true">MV</span>
          <span>María Virginia</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#competencias">Competencias</a>
          <a href="#metodologia">Metodología</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>
        <a className="header-cta" href="https://github.com/VickyNovarese" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="contenido">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span /> QA AUTOMATION &amp; SOFTWARE QUALITY</p>
            <h1 id="hero-title">Calidad construida con <em>estrategia,</em> automatización y evidencia.</h1>
            <p className="hero-lead">
              Transformo requerimientos y riesgos en pruebas claras, mantenibles y verificables — desde la interfaz y la API hasta la base de datos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">Ver proyectos <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://github.com/VickyNovarese" target="_blank" rel="noreferrer">Explorar GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <ul className="hero-proof" aria-label="Áreas de especialidad">
              <li><strong>UI</strong><span>End-to-end</span></li>
              <li><strong>API</strong><span>REST &amp; CRUD</span></li>
              <li><strong>SQL</strong><span>Database testing</span></li>
              <li><strong>QA</strong><span>Manual &amp; strategy</span></li>
            </ul>
          </div>

          <div className="quality-console" aria-label="Resumen visual de capacidades">
            <div className="console-top">
              <span className="console-label">QUALITY / OVERVIEW</span>
              <span className="live-dot">ACTIVE</span>
            </div>
            <div className="console-title-row">
              <div>
                <span className="micro-label">TEST STRATEGY</span>
                <h2>Confianza en cada capa</h2>
              </div>
              <span className="shield" aria-hidden="true">✓</span>
            </div>
            <div className="test-stack">
              <div className="stack-row"><span className="stack-icon teal">UI</span><div><strong>Browser automation</strong><small>Playwright · Cypress</small></div><span className="status">READY</span></div>
              <div className="stack-row"><span className="stack-icon orange">API</span><div><strong>Service validation</strong><small>Postman · REST</small></div><span className="status">READY</span></div>
              <div className="stack-row"><span className="stack-icon blue">DB</span><div><strong>Database validation</strong><small>SQL · Sakila</small></div><span className="status">READY</span></div>
              <div className="stack-row"><span className="stack-icon green">TC</span><div><strong>Test case design</strong><small>Manual · Evidence</small></div><span className="status">READY</span></div>
            </div>
            <div className="console-flow">
              <span>RISK</span><i /><span>DESIGN</span><i /><span>EXECUTE</span><i /><span>EVIDENCE</span>
            </div>
          </div>
        </section>

        <section className="projects section-shell" id="proyectos" aria-labelledby="projects-title">
          <div className="section-heading">
            <div>
              <p className="kicker"><span /> TRABAJO DESTACADO</p>
              <h2 id="projects-title">Proyectos con contexto, código y evidencia.</h2>
            </div>
            <p>Cada proyecto aborda una capa distinta de la calidad: interfaz, servicios y diseño manual de pruebas.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top">
                  <span className="project-code">{project.code}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="highlight-list">
                  {project.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  {project.action} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

          <article className="case-study">
            <div className="case-preview">
              <img src="/assets/buggycars-cover.png" alt="Portada del reporte de pruebas Buggy Cars" />
              <span className="document-chip">PDF · 19 PÁGINAS</span>
            </div>
            <div className="case-content">
              <div className="case-meta"><span>CASO DE ESTUDIO · TESTING MANUAL</span><span className="historical-status">7 CASOS DOCUMENTADOS</span></div>
              <h3>Buggy Cars — registro de usuarios</h3>
              <p>
                Diseño y ejecución manual de escenarios positivos, negativos y de validación para el formulario de registro. El reporte conserva precondiciones, datos, pasos y resultados esperados.
              </p>
              <div className="case-columns">
                <ul>
                  <li>Registro con datos válidos</li>
                  <li>Campos requeridos vacíos</li>
                  <li>Contraseñas y confirmación</li>
                </ul>
                <ul>
                  <li>Caracteres especiales y números</li>
                  <li>Cancelación del registro</li>
                  <li>Limpieza de campos completos</li>
                </ul>
              </div>
              <p className="case-note">Estado histórico del reporte: siete casos marcados como PASSED.</p>
              <a className="button button-dark" href="/assets/Buggycars.pdf" target="_blank" rel="noreferrer">Ver reporte PDF <span aria-hidden="true">↗</span></a>
            </div>
          </article>

          <article className="case-study database-case">
            <div className="case-preview">
              <img src="/assets/sakila-cover.png" alt="Portada de los reportes de pruebas SQL sobre la base de datos Sakila" />
              <span className="document-chip">SQL · 4 REPORTES</span>
            </div>
            <div className="case-content">
              <div className="case-meta"><span>CASO DE ESTUDIO · DATABASE TESTING</span><span className="historical-status">28 CASOS PASSED</span></div>
              <h3>Sakila — validaciones SQL y reglas de negocio</h3>
              <p>
                Diseño y ejecución de pruebas sobre la base de datos Sakila para validar integridad, trazabilidad y reglas de negocio mediante consultas SQL y relaciones entre tablas.
              </p>
              <div className="case-columns">
                <ul>
                  <li>Login exitoso y validaciones negativas</li>
                  <li>Registro de staff y nueve reglas de negocio</li>
                </ul>
                <ul>
                  <li>Trazabilidad de alquileres entre tablas</li>
                  <li>Clasificación y conteo de películas por rating</li>
                </ul>
              </div>
              <div className="database-stats" aria-label="Resumen del proyecto Sakila">
                <span><strong>5</strong> login</span><span><strong>9</strong> staff</span><span><strong>6</strong> rental</span><span><strong>8</strong> rating</span>
              </div>
              <div className="report-links">
                <a href="/assets/sakila-login.pdf" target="_blank" rel="noreferrer">Login ↗</a>
                <a href="/assets/sakila-staff.pdf" target="_blank" rel="noreferrer">Staff ↗</a>
                <a href="/assets/sakila-rental.pdf" target="_blank" rel="noreferrer">Alquileres ↗</a>
                <a href="/assets/sakila-rating.pdf" target="_blank" rel="noreferrer">Ratings ↗</a>
              </div>
            </div>
          </article>
        </section>

        <section className="skills section-shell" id="competencias" aria-labelledby="skills-title">
          <div className="section-heading compact">
            <div>
              <p className="kicker light"><span /> COMPETENCIAS</p>
              <h2 id="skills-title">Un perfil de calidad de punta a punta.</h2>
            </div>
            <p>Herramientas y prácticas aplicadas en proyectos reales de aprendizaje y portfolio.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="method section-shell" id="metodologia" aria-labelledby="method-title">
          <div className="section-heading">
            <div>
              <p className="kicker"><span /> METODOLOGÍA</p>
              <h2 id="method-title">De la incertidumbre a una señal clara.</h2>
            </div>
            <p>La automatización es una parte del sistema. El objetivo es producir información útil para decidir.</p>
          </div>
          <ol className="process-list">
            {process.map(([number, title, copy]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about section-shell" id="sobre-mi" aria-labelledby="about-title">
          <div className="about-monogram" aria-hidden="true"><span>MV</span><small>QUALITY</small></div>
          <div className="about-copy">
            <p className="kicker light"><span /> SOBRE MÍ</p>
            <h2 id="about-title">Calidad con mirada crítica y vocación de mejora.</h2>
            <p>
              Soy María Virginia Novarese, profesional orientada a software quality y automatización. Me interesa transformar requerimientos y riesgos en pruebas claras, mantenibles y verificables.
            </p>
            <p>
              Trabajo con automatización web, pruebas de API, diseño manual de casos y generación de evidencia para facilitar decisiones de calidad.
            </p>
            <div className="values" aria-label="Valores profesionales">
              <span>Pensamiento crítico</span><span>Trazabilidad</span><span>Atención al detalle</span><span>Mejora continua</span>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contacto" aria-labelledby="contact-title">
          <p className="kicker"><span /> CONTACTO</p>
          <h2 id="contact-title">Construyamos software con más confianza.</h2>
          <p>Conocé el código, los escenarios y la evolución de cada proyecto en GitHub.</p>
          <a className="button button-primary" href="https://github.com/VickyNovarese" target="_blank" rel="noreferrer">Visitar mi GitHub <span aria-hidden="true">↗</span></a>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <div><strong>María Virginia Novarese</strong><span>QA Automation &amp; Software Quality</span></div>
        <p>Portfolio profesional · <span>2026</span></p>
      </footer>
    </main>
  );
}
