<template>
  <header class="site-header">
    <div class="site-header-inner">
      <div style="display:flex;gap:1rem;flex-flow:column;">
        <h1 class="site-title">Hi, I'm Yukie!</h1>
        <p class="site-title-meta">
          <span>Frontend Designer/Developer</span>
          <span class="site-title-meta-detail site-title-meta-separator">✦</span>
          <span class="site-title-meta-detail site-title-meta-blurb">Collector of tiny trinkets &amp; exotic plants</span>
        </p>
        <p class="site-title-helper">I work in the overlap between design and code, turning complex user flows into clean, shipped products.</p>
      </div>
      <nav class="site-nav">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#about">About Me</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="site-main">
    <section id="work" class="projects-section" aria-labelledby="work-title">
        <h4 class="eyebrow">Projects I've worked on</h4>
        <ul class="projects-list">
          <li class="project-card">
            <a class="project-card-link" href="pages/material-procurement-workflow.html" aria-label="Material Procurement Workflow case study">
              <div class="project-card-image"></div>
            </a>
          </li>
          <li class="project-card">
            <a class="project-card-link" href="pages/promotions-authoring-system.html" aria-label="Promotions Authoring System case study">
              <div class="project-card-image"></div>
            </a>
          </li>
          <li class="project-card">
            <a class="project-card-link" href="pages/self-service-erp-data-translation.html" aria-label="Self-Service ERP Data Translation case study">
              <div class="project-card-image"></div>
            </a>
          </li>
        </ul>
    </section>
    <section id="skills" class="skills-section" aria-labelledby="skills-title">
      <div class="skills-list-group">
        <h4 class="skills-eyebrow">Tech Stack</h4>
        <ul class="skills-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <div class="skills-list-group">
        <h4 class="skills-eyebrow">Skills</h4>
        <ul class="skills-list">
          <li>Responsive Design</li>
          <li>User Research</li>
          <li>Prototyping</li>
          <li>Requirements Gathering</li>
          <li>UI/UX Design</li>
          <li>Agile Development</li>
          <li>AI-assisted Design & Development</li>
        </ul>
      </div>
    </section>
    
  </main>       
  <footer class="site-footer">
    <p>✦ Crafted with care ✦</p>
  </footer>
</template>

<style>
  .site-header {
    margin-bottom: 1rem;
  }

  .site-header-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-flow: row wrap;
    gap: 1rem;
  }
  .site-title {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.2;
    margin: 0;
  }
  .site-title-helper {
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
  }
  .site-title-meta {
    display: flex;
    flex-flow: row wrap;
    gap: .5rem;
    margin: 0;
    align-items: center;
  }
  .site-title-meta-detail {
    color: #636363;
  }
  .site-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    line-height: 1.2;
  }

  .site-nav {
    margin-top: .6rem;
  }

  .site-nav a {
    display: inline-block;
    border-radius: 4px;
    transition: color 180ms ease, text-shadow 180ms ease;
  }

  .site-nav a:hover,
  .site-nav a:focus-visible {
    color: var(--accent);
    text-shadow: 0 0 12px rgb(200 93 64 / 35%);
  }

  .site-main {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
  }
  .site-footer {
    margin-top: auto;
    padding: 1.5rem 0 .5rem;
    text-align: center;
  }
  .site-footer p {
    margin: 0;
    color: var(--muted);
    font-size: .75rem;
    font-weight: 400;
  }
  .skills-section {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    flex-flow: row nowrap;
  }
  .skills-list-group {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .skills-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: .5rem;
    font-size: .75rem;
    width: 100%;
  }
  .skills-list li {
    background-color: #f0f0f0;
    padding: .25rem .5rem;
    border-radius: 4px;
    display:flex;
  }

  .projects-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
  }

  .projects-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
    gap: 1.25rem;
    width: min(100%, 75rem);
  }

  .project-card {
    min-width: 0;
  }

  .project-card-link {
    display: block;
    height: 100%;
  }

  .project-card-image {
    width: 100%;
    aspect-ratio: 16 / 10;
    min-height: 12rem;
    border-radius: 6px;
    background-color: #b7b7b7;
    transition: transform 180ms ease;
  }

  .project-card-link:hover .project-card-image {
    transform: translateY(-3px);
  }

  .project-card-link:focus-visible {
    outline-offset: 4px;
  }
  
  @media (max-width: 600px) {
    .site-header-inner {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 2rem;
    }

    .site-title-meta {
      flex-direction: column;
      justify-content: center;
    }

    .site-title-meta-separator {
      display: none;
    }

    .site-title-meta-blurb {
      font-size: .9rem;
    }

    .site-nav ul {
      justify-content: center;
      margin: 0;
    }

    .site-nav {
      margin-top: 0;
    }

    .skills-section {
      flex-direction: column;
    }

    .skills-list-group {
      width: 100%;
    }

  }
</style>