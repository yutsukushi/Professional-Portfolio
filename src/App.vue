<template>
  <header class="site-header">
    <div class="site-header-inner">
      <div>
        <h1 class="site-title">Hi, I'm Yukie!</h1>
        <p class="site-title-helper">Frontend Designer/Developer</p>
        <p class="site-title-helper">some fun blurb about me</p>
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
    <section id="work" class="projects-section" aria-labelledby="work-title">
        <h4 class="eyebrow">Projects I've worked on</h4>
        <ul class="projects-list">
          <li class="project-card">
            <a class="project-card-link" href="">
              <div class="project-card-image"></div>
            </a>
          </li>
          <li class="project-card">
            <a class="project-card-link" href="">
              <div class="project-card-image"></div>
            </a>
          </li>
          <li class="project-card">
            <a class="project-card-link" href="">
              <div class="project-card-image"></div>
            </a>
          </li>
        </ul>
    </section>
  </main>       
</template>

<style>
  .site-header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-flow: row wrap;
  }
  .site-title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  .site-title-helper {
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
  }
  .site-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }
  .site-main {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
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
    display:flex;
    flex-flow: row wrap;
    gap: .5rem;
    font-size: .75rem;
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
      text-align: center;
      gap: .75rem;
    }

    .site-nav ul {
      justify-content: center;
      margin: 0;
    }

    .skills-section {
      flex-direction: column;
    }

    .skills-list-group {
      width: 100%;
    }
  }
</style>