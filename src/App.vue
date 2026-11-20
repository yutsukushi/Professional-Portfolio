<script setup>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />

  <main class="site-main">
    <section id="work" class="projects-section" aria-labelledby="work-title">
        <h4 class="eyebrow">Selected works</h4>
        <ul class="projects-list">
          <li class="project-card">
            <a class="project-card-link" href="case-studies/material-procurement-workflow.html" aria-label="Material Procurement Workflow case study">
              <div class="project-card-image"></div>
            </a>
          </li>
          <li class="project-card">
            <a class="project-card-link" href="case-studies/promotions-authoring-system.html" aria-label="Promotions Authoring System case study">
              <div class="project-card-image"></div>
            </a>
          </li>
          <li class="project-card">
            <a class="project-card-link" href="case-studies/self-service-erp-data-translation.html" aria-label="Self-Service ERP Data Translation case study">
              <div class="project-card-image"></div>
            </a>
          </li>
        </ul>
    </section>
  </main>       
  <SiteFooter />
</template>

<style>
  .site-main {
    display: flex;
    flex-flow: column nowrap;
    gap: 2rem;
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

    .project-card:first-child .project-card-image {
      aspect-ratio: 2 / 1;
    }
  }

  @media (max-width: 600px) {
    .skills-section {
      flex-direction: column;
    }

    .skills-list-group {
      width: 100%;
    }

  }
</style>