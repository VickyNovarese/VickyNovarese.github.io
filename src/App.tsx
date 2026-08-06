import manualTestingDossierUrl from "./assets/manual-testing-dossier.pdf?url";

const automationProjects = [
  {
    code: "PW",
    eyebrow: "UI + API AUTOMATION",
    title: "Playwright Projects",
    description: "Suites en TypeScript con cobertura E2E, API, interceptación de red y ejecución multibrowser.",
    tags: ["Playwright", "TypeScript", "POM", "GitHub Actions", "Allure"],
    highlights: ["DemoQA y SauceDemo", "JSONPlaceholder", "Chromium y Firefox"],
    href: "https://github.com/VickyNovarese/Playwright-Proyectos",
    accent: "teal",
  },
  {
    code: "CY",
    eyebrow: "END-TO-END TESTING",
    title: "Cypress Portfolio",
    description: "Automatización web en JavaScript con escenarios positivos, negativos y de límites, fixtures y Page Object Model.",
    tags: ["Cypress", "JavaScript", "Faker", "Fixtures", "POM"],
    highlights: ["Practice Form", "Login y accesos", "Widgets interactivos"],
    href: "https://github.com/VickyNovarese/Cypress-Portfolio",
    accent: "green",
  },
  {
    code: "API",
    eyebrow: "REST API TESTING",
    title: "Postman API Portfolio",
    description: "Colecciones con flujos CRUD, autenticación, variables dinámicas y assertions JavaScript sobre APIs públicas.",
    tags: ["Postman", "REST", "Newman", "CRUD", "Authentication"],
    highlights: ["Trello", "DemoQA Book Store", "Petstore y OpenAI"],
    href: "https://github.com/VickyNovarese/API-Testing-Portfolio-Postman",
    accent: "orange",
  },
];

const bugFields = [
  ["Bug ID", "Identificador único"],
  ["Title / Summary", "Descripción corta y precisa"],
  ["Environment", "QA, navegador, SO y versión"],
  ["Preconditions", "Estado previo necesario"],
  ["Steps to Reproduce", "Pasos exactos para reproducir"],
  ["Actual Result", "Comportamiento observado"],
  ["Expected Result", "Comportamiento esperado"],
  ["Severity", "Impacto del defecto"],
  ["Priority", "Urgencia para el negocio"],
  ["Evidence", "Capturas, video, logs o responses"],
  ["Test Data", "Datos utilizados en la prueba"],
  ["Status", "Open, Fixed, Retest, Closed o Reopened"],
];

const skillGroups = [
  { number: "01", title: "Automation", skills: ["Playwright", "Cypress", "TypeScript", "JavaScript", "POM", "Fixtures"] },
  { number: "02", title: "API Testing", skills: ["Postman", "REST", "Newman", "CRUD", "Bearer Auth", "JSON assertions"] },
  { number: "03", title: "Manual & Database", skills: ["Gherkin", "Test design", "Exploratory testing", "Boundary values", "SQL", "Evidence"] },
  { number: "04", title: "Quality Engineering", skills: ["GitHub Actions", "Coverage.py", "Flake8", "Jenkins", "JMeter", "Allure"] },
];

const process = [
  ["01", "Analizar", "Entender requerimientos, contexto y riesgos."],
  ["02", "Diseñar", "Traducir riesgos en escenarios verificables."],
  ["03", "Ejecutar", "Validar UI, APIs, datos y reglas de negocio."],
  ["04", "Reportar", "Documentar hallazgos de forma reproducible."],
  ["05", "Evidenciar", "Convertir resultados en información accionable."],
];

export default function App() {
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
          <a href="#manual-testing">Manual QA</a>
          <a href="#competencias">Competencias</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>
        <a className="header-cta" href="https://github.com/VickyNovarese" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <div id="contenido">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span /> QA AUTOMATION &amp; SOFTWARE QUALITY</p>
            <h1 id="hero-title">Calidad construida con <em>estrategia,</em> automatización y evidencia.</h1>
            <p className="hero-lead">Transformo requerimientos y riesgos en pruebas claras y verificables: UI, APIs, testing manual y validación de datos.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">Ver portfolio <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://github.com/VickyNovarese" target="_blank" rel="noreferrer">Explorar GitHub <span aria-hidden="true">↗</span></a>
            </div>
            <ul className="hero-proof" aria-label="Áreas de especialidad">
              <li><strong>UI</strong><span>Automation</span></li>
              <li><strong>API</strong><span>REST &amp; CRUD</span></li>
              <li><strong>SQL</strong><span>Database</span></li>
              <li><strong>QA</strong><span>Manual</span></li>
            </ul>
          </div>

          <div className="quality-console" aria-label="Resumen visual de capacidades">
            <div className="console-top"><span className="console-label">QUALITY / OVERVIEW</span><span className="live-dot">ACTIVE</span></div>
            <div className="console-title-row"><div><span className="micro-label">TEST STRATEGY</span><h2>Confianza en cada capa</h2></div><span className="shield" aria-hidden="true">✓</span></div>
            <div className="test-stack">
              <div className="stack-row"><span className="stack-icon teal">UI</span><div><strong>Browser automation</strong><small>Playwright · Cypress</small></div><span className="status">READY</span></div>
              <div className="stack-row"><span className="stack-icon orange">API</span><div><strong>Service validation</strong><small>Postman · REST</small></div><span className="status">READY</span></div>
              <div className="stack-row"><span className="stack-icon blue">DB</span><div><strong>Database validation</strong><small>SQL · Sakila</small></div><span className="status">READY</span></div>
              <div className="stack-row"><span className="stack-icon green">QA</span><div><strong>Manual testing</strong><small>Strategy · Design · Evidence</small></div><span className="status">READY</span></div>
            </div>
            <div className="console-flow"><span>RISK</span><i /><span>DESIGN</span><i /><span>EXECUTE</span><i /><span>REPORT</span></div>
          </div>
        </section>

        <section className="projects section-shell" id="proyectos" aria-labelledby="projects-title">
          <div className="section-heading">
            <div><p className="kicker"><span /> TRABAJO DESTACADO</p><h2 id="projects-title">Automatización, APIs y calidad con contexto.</h2></div>
            <p>Proyectos técnicos con código, escenarios verificables y evidencia de ejecución.</p>
          </div>

          <div className="project-grid">
            {automationProjects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-top"><span className="project-code">{project.code}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="highlight-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="tag-list" aria-label={`Tecnologías de ${project.title}`}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Explorar repositorio <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>

          <article className="manual-entry">
            <div className="manual-entry-index">MANUAL<br />QA</div>
            <div>
              <p className="project-eyebrow">TEST STRATEGY · TEST DESIGN · SQL · DEFECT MANAGEMENT</p>
              <h3>Manual Testing &amp; Quality Assurance</h3>
              <p>Experiencia profesional construyendo QA manual desde cero, además de estrategia, diseño y ejecución de casos, testing de base de datos, reporte de bugs y evidencia.</p>
              <div className="tag-list"><span>Gherkin</span><span>QA desde cero</span><span>Functional</span><span>Regression</span><span>SQL</span><span>Bug Reporting</span></div>
            </div>
            <a className="manual-entry-link" href="#manual-testing">Explorar Manual Testing <span aria-hidden="true">↓</span></a>
          </article>
        </section>

        <section className="manual-qa" id="manual-testing" aria-labelledby="manual-title">
          <div className="section-shell">
            <div className="manual-hero">
              <div><p className="kicker light"><span /> MANUAL TESTING &amp; QUALITY ASSURANCE</p><h2 id="manual-title">Calidad antes, durante y después de ejecutar un test.</h2></div>
              <p>Mi enfoque combina experiencia profesional creando QA desde cero, planificación, diseño de pruebas, ejecución, validación de datos y comunicación clara de defectos.</p>
            </div>

            <article className="qa-professional">
              <div className="qa-professional-copy">
                <span className="panel-number">EXPERIENCIA PROFESIONAL / QA DESDE CERO</span>
                <h3>Construcción del proceso de testing manual desde cero</h3>
                <p>En una de las empresas en las que trabajé asumí el desafío de estructurar el testing manual desde el inicio: definí procesos y estándares de calidad, diseñé la estrategia de pruebas y acompañé la calidad del producto durante todo el ciclo de desarrollo.</p>
                <ul className="clean-list">
                  <li>Diseño y documentación de 120 casos de prueba en Gherkin</li>
                  <li>Creación de planes de prueba y ejecución de testing exploratorio</li>
                  <li>Pruebas funcionales sobre aplicaciones web y desktop</li>
                  <li>Validaciones de API con Postman y Swagger</li>
                  <li>Consultas SQL, validación de datos y seguimiento de defectos</li>
                  <li>Participación activa en ceremonias y planificación Scrum</li>
                </ul>
              </div>
              <div className="qa-professional-metric" aria-label="120 casos de prueba escritos en Gherkin">
                <strong>120</strong>
                <span>casos de prueba</span>
                <b>GHERKIN</b>
              </div>
            </article>

            <div className="qa-strategy-grid">
              <article className="qa-panel strategy-panel">
                <span className="panel-number">01 / QA STRATEGY</span>
                <h3>Planificación basada en riesgo</h3>
                <p>Plan QA anual documentado con controles diferentes según criticidad, smoke tests como quality gate y regresión periódica.</p>
                <div className="strategy-stats">
                  <span><strong>18</strong> sitios VIP</span>
                  <span><strong>~250</strong> sitios non-VIP</span>
                  <span><strong>250</strong> casos de regresión</span>
                </div>
                <ul className="clean-list"><li>Smoke tests sobre flujos críticos</li><li>Regresión mensual</li><li>Gestión de defectos por severidad</li><li>Métricas y mejora continua</li></ul>
              </article>

              <article className="qa-panel design-panel">
                <span className="panel-number">02 / TEST DESIGN</span>
                <h3>Diseño con intención</h3>
                <p>Selección de datos y escenarios para cubrir comportamiento válido, inválido y condiciones límite sin duplicar pruebas.</p>
                <div className="technique-list">
                  <span><b>EP</b> Particiones de equivalencia</span>
                  <span><b>BVA</b> Valores límite</span>
                  <span><b>NEG</b> Negative testing</span>
                  <span><b>REG</b> Regression testing</span>
                </div>
                <p className="panel-note">Aplicado en formularios de registro, filtros de productos y reglas de negocio.</p>
              </article>
            </div>

            <div className="manual-evidence-grid">
              <article className="evidence-card">
                <span className="panel-number">03 / FUNCTIONAL TESTING</span>
                <h3>Casos ejecutados y trazables</h3>
                <p>Escenarios con precondiciones, datos, pasos, resultados esperados y estado de ejecución.</p>
                <div className="evidence-metrics"><span><strong>7</strong> Buggy Cars</span><span><strong>7</strong> OLX Web</span></div>
                <ul className="clean-list dark"><li>Registro y validaciones de formulario</li><li>Filtros, navegación y breadcrumbs</li><li>Escenarios positivos y negativos</li></ul>
                <div className="evidence-links">
                  <a href={manualTestingDossierUrl} download="manual-testing-dossier.pdf">Descargar dossier completo PDF ↓</a>
                </div>
              </article>

              <article className="evidence-card database-evidence">
                <span className="panel-number">04 / DATABASE TESTING</span>
                <h3>SQL &amp; Sakila Database</h3>
                <p>Validaciones de integridad, trazabilidad y reglas de negocio utilizando consultas SQL y relaciones entre tablas.</p>
                <div className="db-total"><strong>28</strong><span>casos SQL documentados · PASSED</span></div>
                <div className="db-breakdown"><span>5 Login</span><span>9 Staff</span><span>6 Rental</span><span>8 Rating</span></div>
                <ul className="clean-list dark"><li>JOINs y trazabilidad entre tablas</li><li>Validación de reglas de negocio</li><li>Clasificación y conteo de películas</li></ul>
              </article>
            </div>

            <section className="bug-report" aria-labelledby="bug-title">
              <div className="bug-heading">
                <div><p className="kicker"><span /> BUG REPORTING &amp; DEFECT MANAGEMENT</p><h2 id="bug-title">Un buen bug se puede entender, reproducir y priorizar.</h2></div>
                <p>Reportar un defecto también es trabajo de calidad: la información correcta reduce ambigüedad y acelera el diagnóstico.</p>
              </div>

              <div className="bug-layout">
                <div className="bug-fields">
                  {bugFields.map(([name, description]) => <div key={name}><strong>{name}</strong><span>{description}</span></div>)}
                </div>

                <article className="bug-example">
                  <div className="bug-example-top"><span>BUG REPORT · EXAMPLE</span><span className="bug-open">OPEN</span></div>
                  <p className="bug-id">BUG-014</p>
                  <h3>Registration accepts an invalid email</h3>
                  <div className="bug-priority"><span><small>SEVERITY</small><strong>HIGH</strong></span><span><small>PRIORITY</small><strong>HIGH</strong></span></div>
                  <dl>
                    <div><dt>Environment</dt><dd>QA · Chrome</dd></div>
                    <div><dt>Precondition</dt><dd>User is on Registration page.</dd></div>
                    <div><dt>Steps</dt><dd>Complete valid user data, enter <code>maria@</code> as email and submit.</dd></div>
                    <div><dt>Expected</dt><dd>Registration is rejected and validation is displayed.</dd></div>
                    <div><dt>Actual</dt><dd>Account is created successfully.</dd></div>
                  </dl>
                  <p className="example-note">Ejemplo ilustrativo de estructura de reporte.</p>
                </article>
              </div>

              <div className="severity-callout">
                <strong>Severity ≠ Priority</strong>
                <p><b>Severity</b> representa el impacto técnico o funcional. <b>Priority</b> representa qué tan urgente es resolverlo para el negocio.</p>
              </div>

              <div className="bug-flow" aria-label="Ciclo de vida de un defecto">
                <span>Detected</span><i>→</i><span>Reported</span><i>→</i><span>Fixed</span><i>→</i><span>Retest</span><i>→</i><span>Regression</span><i>→</i><span>Closed / Reopened</span>
              </div>
            </section>
          </div>
        </section>

        <section className="skills section-shell" id="competencias" aria-labelledby="skills-title">
          <div className="section-heading compact"><div><p className="kicker light"><span /> COMPETENCIAS</p><h2 id="skills-title">Un perfil de calidad de punta a punta.</h2></div><p>Herramientas y prácticas organizadas por el valor que aportan al ciclo de calidad.</p></div>
          <div className="skills-grid">{skillGroups.map((group) => <article className="skill-group" key={group.title}><span className="skill-number">{group.number}</span><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
        </section>

        <section className="method section-shell" id="metodologia" aria-labelledby="method-title">
          <div className="section-heading"><div><p className="kicker"><span /> METODOLOGÍA</p><h2 id="method-title">De la incertidumbre a una señal clara.</h2></div><p>La herramienta cambia según el problema. El objetivo es siempre producir información confiable para decidir.</p></div>
          <ol className="process-list">{process.map(([number, title, copy]) => <li key={number}><span>{number}</span><strong>{title}</strong><p>{copy}</p></li>)}</ol>
        </section>

        <section className="about section-shell" id="sobre-mi" aria-labelledby="about-title">
          <div className="about-monogram" aria-hidden="true"><span>MV</span><small>QUALITY</small></div>
          <div className="about-copy"><p className="kicker light"><span /> SOBRE MÍ</p><h2 id="about-title">Calidad con mirada crítica y vocación de mejora.</h2><p>Soy María Virginia Novarese, profesional orientada a software quality y automatización. Me interesa transformar requerimientos y riesgos en pruebas claras, mantenibles y verificables.</p><p>Trabajo con automatización web, pruebas de API, testing manual, validación SQL y generación de evidencia para facilitar decisiones de calidad.</p><div className="values"><span>Pensamiento crítico</span><span>Trazabilidad</span><span>Atención al detalle</span><span>Mejora continua</span></div></div>
        </section>

        <section className="contact section-shell" id="contacto" aria-labelledby="contact-title"><p className="kicker"><span /> CONTACTO</p><h2 id="contact-title">Construyamos software con más confianza.</h2><p>Conocé el código, los escenarios y la evolución de cada proyecto en GitHub.</p><a className="button button-primary" href="https://github.com/VickyNovarese" target="_blank" rel="noreferrer">Visitar mi GitHub <span aria-hidden="true">↗</span></a></section>
      </div>

      <footer className="site-footer section-shell"><div><strong>María Virginia Novarese</strong><span>QA Automation &amp; Software Quality</span></div><p>Portfolio profesional · <span>2026</span></p></footer>
    </main>
  );
}
