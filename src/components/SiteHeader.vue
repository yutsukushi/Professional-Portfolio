<script setup>
defineProps({
  variant: {
    type: String,
    default: 'home',
  },
})
</script>

<template>
  <header v-if="variant === 'home'" class="site-header site-header--home">
    <div class="site-header-inner">
      <div class="site-header-copy">
        <div>
          <h1 class="site-title">Hi, I'm Yukie!</h1>
          <p class="site-title-meta">
            <span class="site-title-meta-item">Frontend Designer / Developer</span>
            <span class="site-title-meta-detail site-title-meta-blurb">✦ Collector of tiny trinkets &amp; exotic plants</span>
          </p>
        </div>
        <p class="site-title-helper">I work in the overlap between design and code, turning complex user flows into clean, shipped products.</p>
      </div>
      <nav class="site-nav" aria-label="Primary navigation">
        <ul>
          <li><RouterLink :to="{ path: '/', hash: '#work' }">Work</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#resume' }">Resume</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#about' }">About Me</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <header v-else class="site-header site-header--case-study">
    <div class="site-header-inner">
      <RouterLink class="site-header-wordmark" to="/" aria-label="Yukie Kushibiki, home">Yukie Kushibiki<span>.</span></RouterLink>
      <nav class="site-nav" aria-label="Case study navigation">
        <ul>
          <li><RouterLink :to="{ path: '/', hash: '#work' }">Work</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#resume' }">Resume</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#about' }">About Me</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header--home,
.site-header--case-study {
  margin: 2rem 0 0;
}

.site-header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-flow: row wrap;
  gap: 1rem;
}

.site-header-copy {
  display: flex;
  gap: 1.25rem;
  flex-flow: column;
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
  gap: 0.5rem;
  margin: 0;
  align-items: center;
}

.site-title-meta-item {
  font-weight: 800;
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

/* .site-nav {
  margin-top: 0.6rem;
} */

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

.site-header-wordmark {
  font-size: 1.4rem;
  font-weight: 700;
  /* letter-spacing: -0.08em; */
}

.site-header-wordmark span {
  color: var(--accent);
}

@media (max-width: 600px) {
  .site-header-inner {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .site-title-meta {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .site-title-meta-blurb {
    font-size: 0.9rem;
  }

  .site-nav ul {
    justify-content: flex-start;
    margin: 0;
  }

  .site-nav {
    margin-top: 0;
  }
}
</style>
