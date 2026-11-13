<template>
  <header class="site-header">
    <div class="site-header-inner">
      <div style="display:flex;gap:1.25rem;flex-flow:column;">
        <div>
          <h1 class="site-title">Hi, I'm Yukie!</h1>
          <p class="site-title-meta">
            <span style="font-weight: 800;">Frontend Designer / Developer</span>
            <span class="site-title-meta-detail site-title-meta-blurb">✦ Collector of tiny trinkets &amp; exotic plants</span>
          </p>
        </div>
        <p class="site-title-helper">I work in the overlap between design and code, turning complex user flows into clean, shipped products.</p>
      </div>
      <nav class="site-nav">
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#about">About Me</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="site-main">
    <section id="work" class="projects-section" aria-labelledby="work-title">
        <h4 class="eyebrow">Selected works</h4>
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
  </main>       
  <footer class="site-footer">
    <p>✦ Crafted with care ✦</p>
  </footer>
</template>

<style>
  .site-header {
    margin: 2rem 0 0;
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
    color: #7d7d7d;
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

  .projects-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 100%;
    font-size:14px;
  }

  .projects-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
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

  @media (min-width: 64rem) {
    .projects-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .project-card:first-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    .site-header-inner {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      gap: 2rem;
    }

    .site-title-meta {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .site-title-meta-blurb {
      font-size: .9rem;
    }

    .site-nav ul {
      justify-content: flex-start;
      margin: 0;
    }

    .site-nav {
      margin-top: 0;
    }

    .site-footer {
      text-align: center;
    }

    .skills-section {
      flex-direction: column;
    }

    .skills-list-group {
      width: 100%;
    }

  }
</style>