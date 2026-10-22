<script setup>
const projects = [
  {
    number: '01',
    title: 'Relay',
    type: 'Product design · Engineering',
    description:
      'A coordination workspace that helps food-rescue teams get good food where it needs to go.',
    className: 'project-card--relay',
    label: 'Operations dashboard',
    metric: '12',
    metricLabel: 'pickups today',
    rows: ['Northside Market', 'Juniper Grocer', 'The Corner Co-op'],
  },
  {
    number: '02',
    title: 'Common Ground',
    type: 'Research · Product design',
    description:
      'A neighborhood hub for making plans, sharing useful things, and getting to know the people nearby.',
    className: 'project-card--ground',
    label: 'Community board',
    metric: 'This Saturday',
    metricLabel: 'garden day · 10:30 am',
    rows: ['Garden day', 'Tool library', 'Block dinner'],
  },
  {
    number: '03',
    title: 'Soft Landing',
    type: 'Product design · Design systems',
    description:
      'A gentle habit companion designed around real life, not perfect streaks.',
    className: 'project-card--landing',
    label: 'Your evening',
    metric: 'A little at a time',
    metricLabel: 'no streaks, just progress',
    rows: ['Put the kettle on', 'Leave your phone', 'Read a few pages'],
  },
  {
    number: '04',
    title: 'Material Procurement Workflow',
    type: 'Product design · Interactive concept',
    description:
      'A clearer path from a project’s material needs to a reviewed and approved purchase.',
    className: 'project-card--materials',
    label: 'Procurement workspace',
    metric: 'Request #1048',
    metricLabel: 'ready for review · 3 items',
    rows: ['Engineered oak flooring', 'Acoustic wall panels', 'Concrete mix'],
    href: './material-procurement-workflow.html',
  },
]

const skills = [
  'Product strategy',
  'User research',
  'Product design',
  'Prototyping',
  'Frontend engineering',
  'Design systems',
]
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <div class="site-shell">
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Alex Morgan, home">AM<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a class="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main id="main">
      <section id="top" class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot"></span> Product designer &amp; engineer</p>
          <h1 id="hero-title">Thoughtful products, <em>beautifully built.</em></h1>
          <p class="hero-intro">
            Hi, I’m Alex. I bring design and engineering together to make digital
            products feel clear, useful, and a little more human.
          </p>
          <a class="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="dashboard-window">
            <div class="dashboard-topbar">
              <span class="dashboard-brand"><span class="dashboard-brand-mark">a</span> atlas</span>
              <span class="dashboard-avatar">AM</span>
            </div>
            <div class="dashboard-body">
              <div class="dashboard-greeting">
                <span>MONDAY, OCTOBER 14</span>
                <strong>Good morning, Alex<span>.</span></strong>
              </div>
              <div class="dashboard-stats">
                <div><span>In progress</span><strong>08</strong></div>
                <div><span>Completed</span><strong>24</strong></div>
                <div><span>Focus time</span><strong>5.2h</strong></div>
              </div>
              <div class="dashboard-chart">
                <div class="chart-heading"><strong>Your week</strong><span>Last 7 days</span></div>
                <div class="chart-bars">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
                <div class="chart-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
              </div>
            </div>
          </div>
          <span class="art-caption">A little more clarity, every day.</span>
        </div>
      </section>

      <section id="work" class="work-section" aria-labelledby="work-title">
        <div class="section-heading">
          <div>
              <p class="eyebrow">A few things I’ve made</p>
              <h2 id="work-title">Selected work<span class="period">.</span></h2>
          </div>
          <span class="section-index">2022 — 2025</span>
        </div>

        <div class="project-grid">
          <article
            v-for="project in projects"
            :key="project.number"
            class="project-card"
            :class="project.className"
          >
            <div class="project-art">
              <div class="project-art-top">
                <span>{{ project.label }}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div class="product-preview" :class="`${project.className}__preview`">
                <div class="preview-heading">
                  <span class="preview-mark">{{ project.title.slice(0, 1) }}</span>
                  <span class="preview-title">{{ project.title }}</span>
                  <span class="preview-menu" aria-hidden="true">···</span>
                </div>
                <div class="preview-summary">
                  <span>{{ project.metric }}</span>
                  <small>{{ project.metricLabel }}</small>
                </div>
                <div class="preview-list">
                  <div v-for="(row, index) in project.rows" :key="row" class="preview-row">
                    <span class="preview-row-icon">{{ index === 0 ? '✓' : '○' }}</span>
                    <span>{{ row }}</span>
                    <span class="preview-row-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-meta">
              <div>
                <h3>
                  <a v-if="project.href" :href="project.href">{{ project.title }}</a>
                  <template v-else>{{ project.title }}</template>
                </h3>
                <p>{{ project.type }}</p>
              </div>
              <a
                v-if="project.href"
                class="project-arrow"
                :href="project.href"
                :aria-label="`View ${project.title} case study`"
              >↗</a>
              <span v-else class="project-arrow" aria-hidden="true">↗</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
          </article>
        </div>
      </section>

      <section id="about" class="about-section" aria-labelledby="about-title">
        <div class="about-heading">
          <p class="eyebrow">A little about me</p>
          <h2 id="about-title">Good work starts with <em>good questions.</em></h2>
        </div>
        <div class="about-content">
          <p>
            I like being involved from the first messy question to the final
            polished interaction. Working across research, interface design,
            and frontend engineering helps me make considered ideas real, and
            make the details work just as well as the big picture.
          </p>
          <div class="skills-block">
            <h3>Across the product lifecycle</h3>
            <ul class="skill-list">
              <li v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section" aria-labelledby="contact-title">
        <p class="eyebrow">Have a good one in mind?</p>
        <h2 id="contact-title">Let’s make it <em>useful.</em></h2>
        <a class="contact-link" href="mailto:hello@example.com">
          hello@example.com <span aria-hidden="true">↗</span>
        </a>
        <p class="contact-note">Currently available for select projects.</p>
      </section>
    </main>

    <footer class="site-footer">
      <a class="wordmark footer-wordmark" href="#top" aria-label="Back to top">AM<span>.</span></a>
      <p>Made with care, wherever I am.</p>
      <div class="social-links" aria-label="Social links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
      </div>
      <span class="copyright">© 2026 Alex Morgan</span>
    </footer>
  </div>
</template>
