<script setup>
import tableNewBrowser from '../assets/images/table-visuals/table-new-browser.png'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader />

  <main class="site-main">
    <section id="work" class="projects-section" aria-labelledby="work-title">
      <h4 id="work-title" class="eyebrow">Selected works</h4>
      <ul class="projects-list">
        <li class="project-card">
          <RouterLink
            class="project-card-link"
            to="/case-studies/material-procurement-workflow"
            aria-label="Material Procurement Workflow case study"
          >
            <div class="project-card-image">
              <img class="case-study-image" :src="tableNewBrowser" alt="Material Procurement Workflow" />
              <span class="project-card-overlay">
                <span class="project-card-title">Turning a Project Table into a Material Workspace</span>
              </span>
            </div>
          </RouterLink>
        </li>
        <li class="project-card">
          <RouterLink
            class="project-card-link"
            to="/case-studies/promotions-authoring-system"
            aria-label="Promotions Authoring System case study"
          >
            <div class="project-card-image">
              <span class="project-card-overlay">
                <span class="project-card-title">Promotions Authoring System</span>
              </span>
            </div>
          </RouterLink>
        </li>
        <li class="project-card">
          <RouterLink
            class="project-card-link"
            to="/case-studies/self-service-erp-data-translation"
            aria-label="Self-Service ERP Data Translation case study"
          >
            <div class="project-card-image">
              <span class="project-card-overlay">
                <span class="project-card-title">Self-Service ERP Data Translation</span>
              </span>
            </div>
          </RouterLink>
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
  font-size: 14px;
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
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #eef1e9;
  transition: transform 180ms ease;
}
.case-study-image {
  width: 82%;
  height: 82%;
  object-fit: contain;
  object-position: center;
  display: block;
}
.project-card-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgb(32 39 32 / 82%) 0%,
    rgb(32 39 32 / 80%) 18%,
    rgb(32 39 32 / 76%) 35%,
    rgb(32 39 32 / 72%) 40%,
    rgb(32 39 32 / 54%) 50%,
    rgb(32 39 32 / 34%) 65%,
    rgb(32 39 32 / 17%) 80%,
    rgb(32 39 32 / 5%) 92%,
    rgb(32 39 32 / 0%) 100%
  );
  opacity: 0;
  transition: opacity 180ms ease;
}
.project-card-title {
  position: absolute;
  top: 25%;
  right: 1.5rem;
  left: 1.5rem;
  transform: translateY(-50%);
  color: #fff;
  font-size: clamp(1.1rem, 2vw, 1.75rem);
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}
.project-card-link:hover .project-card-image {
  transform: translateY(-3px);
}
.project-card-link:hover .project-card-overlay,
.project-card-link:focus-visible .project-card-overlay {
  opacity: 1;
}
.project-card-link:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}
@media (prefers-reduced-motion: reduce) {
  .project-card-image,
  .project-card-overlay {
    transition: none;
  }
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
