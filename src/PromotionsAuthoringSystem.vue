<script setup>
const decisions = [
  {
    number: '01',
    title: 'Keeping the Entire Promotion Visible',
    summary:
      'Authors needed visibility into the entire promotion because important decisions were distributed across multiple interconnected areas.',
    paragraphs: [
      'Rather than separating configuration into a sequence of steps, the promotion editor was organized into independent cards representing concerns such as discount configuration, duration, access, assignments, messaging, and promotion rules.',
      'This allowed authors to review the complete promotion while editing any section in any order, making it easier to understand how different decisions worked together.',
    ],
  },
  {
    number: '02',
    title: 'Designing Around Rule Dependencies',
    summary:
      'The interface needed to make relationships between rules visible instead of forcing users to discover them through trial and error.',
    paragraphs: [
      'Many promotion settings depended on decisions made elsewhere in the configuration. One example involved promotion advertising. Advertising settings were configured in the rules section, but whether advertising was allowed depended on product assignment settings located elsewhere.',
      'Rather than silently disabling functionality, the interface surfaced contextual explanations where users were actively working so the relationship between rules remained visible.',
    ],
  },
  {
    number: '03',
    title: 'Supporting Flexible Authoring',
    summary:
      'Users needed the freedom to combine rules in whatever way the promotion required rather than following a prescribed workflow.',
    paragraphs: [
      'Different promotions required different combinations of targeting, discounting, eligibility, and access rules. Keeping all configuration areas available allowed authors to build and refine promotions without navigating through rigid steps or predefined paths.',
      'This approach prioritized flexibility while still maintaining a clear structure for understanding the final configuration.',
    ],
  },
  {
    number: '04',
    title: 'Designing for Multiple Audiences',
    summary:
      'The same promotion needed to communicate different information to different groups of people.',
    paragraphs: [
      'Each audience required different information and context. Separate fields ensured each message could be tailored to its intended audience without compromising the needs of others.',
    ],
    listLabel: 'The system supported separate messaging for:',
    items: [
      'Storefront customers',
      'Internal processing teams',
      'Invoice recipients',
      'Terms and conditions',
    ],
  },
  {
    number: '05',
    title: 'Measuring Promotions After Launch',
    summary:
      'Creating a promotion was only half the problem; users also needed to understand whether it was working.',
    paragraphs: [
      'Alongside the authoring experience, I created the promotion management application used to track performance. The focus shifted from understanding how a promotion was configured to understanding whether it was performing as expected and what it was costing the business.',
    ],
    listLabel: 'The management application tracked:',
    items: ['Redemption', 'Net sales', 'Promotional spend', 'Status', 'Date ranges'],
  },
]

const tradeoffs = [
  {
    title: 'Visibility Over Guided Workflows',
    summary:
      'Understanding relationships between rules proved more valuable than simplifying configuration into a sequence of steps.',
    detail:
      'A wizard could have reduced the amount of information displayed at once, but it would also have hidden dependencies between promotion settings and made existing promotions more difficult to review and edit.',
  },
  {
    title: 'Deferred Validation Over Immediate Feedback',
    summary: 'Users needed the freedom to build a promotion before being evaluated against every rule.',
    detail:
      'Validation was deferred until save rather than triggered continuously. This allowed authors to work through interconnected configuration areas without receiving errors from sections they had not yet completed.',
  },
  {
    title: 'Explicit Constraints Over Silent Restrictions',
    summary: 'Users needed to understand why a rule was unavailable rather than simply being prevented from using it.',
    detail:
      'When business rules restricted a configuration choice, the interface surfaced contextual explanations rather than silently disabling functionality.',
  },
]

const reflectionAreas = [
  'Promotion summaries that describe the final offer in plain language.',
  'Better visibility into relationships between rules and their downstream effects.',
  'Scenario-based validation using representative customer and order examples.',
  'Stronger measurement around adoption and authoring effectiveness.',
]
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <div class="promotions-page">
    <header class="promotions-header">
      <a class="promotions-wordmark" href="./index.html" aria-label="Yukie Kushibiki, home">YK<span>.</span></a>
      <nav aria-label="Case study navigation">
        <a href="./index.html#work">Selected work</a>
        <a class="promotions-contact-link" href="./index.html#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>

    <main id="main">
      <section class="promotions-hero" aria-labelledby="case-title">
        <a class="promotions-back-link" href="./index.html#work">
          <span aria-hidden="true">←</span> Selected work
        </a>
        <div class="promotions-hero-copy">
          <p class="promotions-eyebrow"><span></span> Product design · Frontend engineering</p>
          <h1 id="case-title">Promotions <em>Authoring System</em></h1>
          <p class="promotions-intro">
            A flexible workspace for creating, understanding, and measuring highly targeted promotions.
          </p>
          <div class="promotions-tags" aria-label="Technologies">
            <span>Vue</span>
            <span>TypeScript</span>
            <span>ASP.NET MVC</span>
            <span>SQL Server</span>
          </div>
        </div>

        <figure class="promotions-visual">
          <div class="promotions-window">
            <div class="promotions-window-bar">
              <span><i></i> PROMOTION EDITOR</span>
              <span class="promotions-saved"><i></i> Draft saved</span>
            </div>
            <div class="promotions-window-body">
              <div class="promotions-product-heading">
                <div><small>SPRING CAMPAIGN / PROMOTION 0248</small><strong>Spring refresh · 20% off</strong></div>
                <span>Active</span>
              </div>
              <div class="promotions-card-grid">
                <article><span>01</span><strong>Discount</strong><small>20% off selected items</small><b>✓</b></article>
                <article><span>02</span><strong>Duration</strong><small>Apr 01 – Apr 30</small><b>✓</b></article>
                <article><span>03</span><strong>Assignments</strong><small>Spring collection</small><b>✓</b></article>
                <article class="promotions-card-highlight"><span>04</span><strong>Eligibility</strong><small>Members · 2+ items</small><b>✓</b></article>
                <article><span>05</span><strong>Messaging</strong><small>3 audiences</small><b>✓</b></article>
                <article><span>06</span><strong>Rules</strong><small>Review dependencies</small><b>i</b></article>
              </div>
              <div class="promotions-context-note"><span>i</span> Advertising requires eligible product assignments.</div>
            </div>
          </div>
          <figcaption>Independent configuration cards keep promotion rules visible together.</figcaption>
        </figure>
      </section>

      <section class="promotions-story-section promotions-problem" aria-labelledby="problem-title">
        <div class="promotions-section-heading">
          <p class="promotions-eyebrow">01 / The problem</p>
          <h2 id="problem-title">Complex rules, <em>one clear workspace.</em></h2>
        </div>
        <div class="promotions-section-copy">
          <p class="promotions-lede">
            Sales teams needed the flexibility to create highly targeted promotions, but supporting that flexibility introduced a growing set of dependencies between discounts, assignments, eligibility requirements, and business rules.
          </p>
          <p>
            Promotions could vary by discount type, catalog assignment, customer eligibility, quantity thresholds, date ranges, usage limits, stacking behavior, redemption restrictions, and more. Each rule was valuable on its own, but the real complexity emerged when those rules were combined.
          </p>
          <p>
            The challenge wasn't implementing promotion logic. It was creating an authoring experience that gave sales teams the freedom to build highly specific promotions while helping them understand how decisions in one area affected another.
          </p>
          <p>
            A wizard simplified creation, but promotion configuration wasn't a linear process. Authors frequently needed to move between assignments, eligibility, discounts, messaging, and rules while understanding how those decisions worked together. Most real-world usage involved revisiting and modifying promotions that already existed rather than creating new ones from scratch.
          </p>
          <p class="promotions-callout">
            My role included both interaction design and implementation, contributing <strong>326 of 727 commits</strong> across the feature.
          </p>
        </div>
      </section>

      <section class="promotions-story-section" aria-labelledby="decisions-title">
        <div class="promotions-section-heading">
          <p class="promotions-eyebrow">02 / Key decisions</p>
          <h2 id="decisions-title">Designing for <em>real-world complexity.</em></h2>
        </div>
        <div class="promotions-section-copy">
          <article v-for="decision in decisions" :key="decision.number" class="promotions-decision">
            <div class="promotions-decision-number">{{ decision.number }}</div>
            <div>
              <h3>{{ decision.title }}</h3>
              <p class="promotions-decision-summary">{{ decision.summary }}</p>
              <p v-if="decision.listLabel" class="promotions-list-label">{{ decision.listLabel }}</p>
              <ul v-if="decision.items" class="promotions-list">
                <li v-for="item in decision.items" :key="item">{{ item }}</li>
              </ul>
              <p v-for="paragraph in decision.paragraphs" :key="paragraph">{{ paragraph }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="promotions-story-section promotions-technical" aria-labelledby="technical-title">
        <div class="promotions-section-heading">
          <p class="promotions-eyebrow">03 / Technical considerations</p>
          <h2 id="technical-title">One system, <em>many dependencies.</em></h2>
        </div>
        <div class="promotions-section-copy">
          <p class="promotions-lede">
            Supporting flexible rule combinations required shared state and validation across the entire promotion.
          </p>
          <p>
            Although each card represented a distinct concern, many business rules introduced dependencies across sections. Supporting those relationships required shared state management and validation that extended beyond individual configuration areas.
          </p>
          <p>
            The editor was built using a reusable set of cards, inputs, labels, and form primitives that allowed twelve configuration areas to behave as a cohesive system rather than a collection of disconnected forms.
          </p>
          <p>
            Extensive test coverage, shared mock-store factories, and domain-specific fixtures helped ensure complex rule combinations behaved as expected.
          </p>
          <div class="promotions-technical-note">
            <span>12</span>
            <p><strong>configuration areas</strong><br />One cohesive authoring system, supported by reusable interface primitives.</p>
          </div>
        </div>
      </section>

      <section class="promotions-story-section" aria-labelledby="tradeoffs-title">
        <div class="promotions-section-heading">
          <p class="promotions-eyebrow">04 / Tradeoffs</p>
          <h2 id="tradeoffs-title">Clarity through <em>deliberate constraints.</em></h2>
        </div>
        <div class="promotions-section-copy">
          <div class="promotions-tradeoff-grid">
            <article v-for="tradeoff in tradeoffs" :key="tradeoff.title">
              <span class="promotions-tradeoff-mark" aria-hidden="true">↗</span>
              <h3>{{ tradeoff.title }}</h3>
              <p class="promotions-decision-summary">{{ tradeoff.summary }}</p>
              <p>{{ tradeoff.detail }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="promotions-story-section promotions-outcome" aria-labelledby="outcome-title">
        <div class="promotions-section-heading">
          <p class="promotions-eyebrow">05 / Outcome</p>
          <h2 id="outcome-title">Flexible by design, <em>clear in practice.</em></h2>
        </div>
        <div class="promotions-section-copy">
          <p class="promotions-lede">
            The final system balanced flexibility and clarity, allowing users to build complex promotions without hiding the relationships between rules.
          </p>
          <p>
            Authors could configure discounts, targeting, eligibility, assignments, messaging, and operational controls from a single workspace while maintaining visibility into how those decisions worked together.
          </p>
          <p>
            The result was a promotion authoring experience that supported highly specific promotional strategies without forcing users into a rigid configuration process.
          </p>
        </div>
      </section>

      <section class="promotions-story-section promotions-reflection" aria-labelledby="reflection-title">
        <div class="promotions-section-heading">
          <p class="promotions-eyebrow">06 / Reflection</p>
          <h2 id="reflection-title">Make the whole offer <em>easier to understand.</em></h2>
        </div>
        <div class="promotions-section-copy">
          <p class="promotions-lede">
            If revisiting the project today, I would focus on helping authors better understand the cumulative effect of increasingly complex promotion configurations.
          </p>
          <p>
            The card-based approach made individual concerns manageable, but promotions often combine discount logic, eligibility requirements, assignments, usage constraints, and business policies. As those relationships become more sophisticated, understanding the resulting promotion becomes just as important as configuring the individual rules.
          </p>
          <p class="promotions-list-label">Areas I would explore include:</p>
          <ul class="promotions-reflection-list">
            <li v-for="area in reflectionAreas" :key="area"><span aria-hidden="true">↗</span>{{ area }}</li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="promotions-footer">
      <a class="promotions-wordmark" href="./index.html" aria-label="Back to portfolio">YK<span>.</span></a>
      <a href="./index.html#work">Explore more work <span aria-hidden="true">↗</span></a>
      <span>© 2026 Yukie Kushibiki</span>
    </footer>
  </div>
</template>

<style scoped>
.promotions-page {
  width: min(100% - 96px, 1120px);
  margin-inline: auto;
  color: var(--ink);
}

.promotions-header,
.promotions-header nav,
.promotions-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.promotions-header {
  height: 92px;
  border-bottom: 1px solid var(--line);
}

.promotions-wordmark {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.promotions-wordmark span {
  color: var(--accent);
}

.promotions-header nav {
  gap: clamp(1.5rem, 4vw, 3.5rem);
  font-size: 0.83rem;
}

.promotions-header nav a,
.promotions-footer a:not(.promotions-wordmark) {
  transition: color 160ms ease;
}

.promotions-header nav a:hover,
.promotions-footer a:not(.promotions-wordmark):hover {
  color: var(--accent);
}

.promotions-contact-link {
  padding-block: 0.7rem;
  border-bottom: 1px solid var(--accent);
}

.promotions-contact-link span {
  margin-left: 0.35rem;
}

.promotions-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.75rem;
}

.promotions-back-link:hover {
  color: var(--accent);
}

.promotions-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  align-items: center;
  gap: 4rem 7%;
  padding-block: 2rem 5.5rem;
}

.promotions-back-link {
  grid-column: 1 / -1;
  margin-bottom: -1.6rem;
}

.promotions-hero-copy {
  padding-block: 1rem;
}

.promotions-eyebrow {
  margin: 0 0 0.85rem;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.59rem;
  letter-spacing: 0.07em;
  line-height: 1.6;
  text-transform: uppercase;
}

.promotions-hero-copy > .promotions-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.promotions-hero-copy > .promotions-eyebrow span,
.promotions-saved i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #75936e;
  box-shadow: 0 0 0 4px #e6eee3;
}

.promotions-hero h1 {
  max-width: 500px;
  margin: 0 0 1.2rem;
  font-size: clamp(3rem, 5.5vw, 4.8rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.promotions-hero h1 em,
.promotions-section-heading h2 em {
  color: var(--accent);
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: 0;
}

.promotions-intro {
  max-width: 420px;
  margin-bottom: 1.5rem;
  color: #606057;
  font-size: 0.9rem;
  line-height: 1.75;
}

.promotions-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.promotions-tags span {
  padding: 0.38rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: #62675e;
  font-family: var(--mono);
  font-size: 0.55rem;
}

.promotions-visual {
  min-width: 0;
  margin: 0;
  padding: 1rem;
  border: 1px solid #e4e6df;
  background: #f0f1eb;
}

.promotions-window {
  overflow: hidden;
  border: 1px solid #e0e3dc;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 14px 36px rgb(34 42 32 / 8%);
}

.promotions-window-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 38px;
  padding-inline: 0.85rem;
  border-bottom: 1px solid #e9ebe6;
  color: #858b82;
  font-family: var(--mono);
  font-size: 0.45rem;
  letter-spacing: 0.04em;
}

.promotions-window-bar > span:first-child,
.promotions-saved {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.promotions-window-bar > span:first-child i {
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: #c85d40;
}

.promotions-saved {
  color: #61745b;
}

.promotions-saved i {
  width: 5px;
  height: 5px;
  box-shadow: none;
}

.promotions-window-body {
  padding: 1rem;
}

.promotions-product-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.9rem;
}

.promotions-product-heading div {
  display: grid;
  gap: 0.25rem;
}

.promotions-product-heading small {
  color: #92978f;
  font-family: var(--mono);
  font-size: 0.39rem;
  letter-spacing: 0.03em;
}

.promotions-product-heading strong {
  color: #353a34;
  font-size: 0.73rem;
  font-weight: 600;
}

.promotions-product-heading > span {
  padding: 0.28rem 0.42rem;
  border-radius: 20px;
  background: #edf4e9;
  color: #58744e;
  font-size: 0.43rem;
}

.promotions-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem;
}

.promotions-card-grid article {
  position: relative;
  display: grid;
  min-height: 65px;
  align-content: center;
  gap: 0.22rem;
  padding: 0.55rem 1.6rem 0.55rem 0.65rem;
  border: 1px solid #e9ebe6;
  border-radius: 3px;
  background: #fff;
}

.promotions-card-grid article > span {
  color: #a0a59d;
  font-family: var(--mono);
  font-size: 0.37rem;
}

.promotions-card-grid article strong {
  color: #444941;
  font-size: 0.55rem;
  font-weight: 600;
}

.promotions-card-grid article small {
  overflow: hidden;
  color: #838980;
  font-size: 0.42rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.promotions-card-grid article b {
  position: absolute;
  top: 0.55rem;
  right: 0.55rem;
  display: grid;
  width: 14px;
  height: 14px;
  place-items: center;
  border-radius: 50%;
  background: #edf4e9;
  color: #637d59;
  font-size: 0.42rem;
  font-weight: 600;
}

.promotions-card-grid article.promotions-card-highlight {
  border-color: #d3ddcd;
  background: #f7faf5;
}

.promotions-context-note {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.65rem;
  padding: 0.55rem 0.65rem;
  border: 1px solid #e7dfd2;
  background: #fcfaf5;
  color: #7d6a4f;
  font-size: 0.43rem;
  line-height: 1.5;
}

.promotions-context-note span {
  display: grid;
  width: 13px;
  height: 13px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: #f0e9dc;
  color: #8c704a;
  font-size: 0.42rem;
}

.promotions-visual figcaption {
  padding-top: 0.8rem;
  color: #747b73;
  font-size: 0.62rem;
  line-height: 1.5;
}

.promotions-story-section {
  display: grid;
  grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.28fr);
  gap: 2rem 8%;
  padding-block: 3.5rem;
  border-top: 1px solid var(--line);
}

.promotions-section-heading h2 {
  max-width: 330px;
  margin: 0;
  font-size: clamp(1.8rem, 3.2vw, 2.55rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.promotions-section-copy {
  min-width: 0;
  color: #606057;
  font-size: 0.8rem;
  line-height: 1.8;
}

.promotions-section-copy > p {
  margin: 0 0 1rem;
}

.promotions-section-copy > p:last-child {
  margin-bottom: 0;
}

.promotions-lede {
  color: #343a32;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.65;
}

.promotions-callout {
  margin-top: 1.5rem !important;
  padding: 1rem 1.1rem;
  border-left: 2px solid var(--accent);
  background: #f5f2ec;
  color: #494b43;
}

.promotions-callout strong {
  color: #30362f;
}

.promotions-decision {
  display: grid;
  grid-template-columns: 31px minmax(0, 1fr);
  gap: 1rem;
  padding-block: 1.35rem;
  border-bottom: 1px solid var(--line);
}

.promotions-decision:first-child {
  padding-top: 0;
}

.promotions-decision:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.promotions-decision-number {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  border: 1px solid #e4e6df;
  border-radius: 50%;
  color: #858b82;
  font-family: var(--mono);
  font-size: 0.48rem;
}

.promotions-decision h3,
.promotions-tradeoff-grid h3 {
  margin: 0 0 0.55rem;
  color: #282d27;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.promotions-decision p {
  margin: 0 0 0.75rem;
}

.promotions-decision p:last-child {
  margin-bottom: 0;
}

.promotions-section-copy .promotions-decision-summary {
  margin-bottom: 0.8rem;
  color: #343a32;
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.65;
}

.promotions-list-label {
  margin: 0 0 0.45rem;
  color: #343a32;
  font-weight: 500;
}

.promotions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 0.9rem;
  padding: 0;
  list-style: none;
}

.promotions-list li {
  padding: 0.3rem 0.5rem;
  border: 1px solid var(--line);
  background: #fff;
  color: #62675e;
  font-size: 0.67rem;
}

.promotions-technical-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--line);
  background: #fff;
}

.promotions-technical-note > span {
  color: var(--accent);
  font-family: var(--serif);
  font-size: 2.7rem;
  line-height: 1;
}

.promotions-technical-note p {
  margin: 0;
  color: #747b73;
  font-size: 0.68rem;
  line-height: 1.6;
}

.promotions-technical-note strong {
  color: #343a32;
  font-size: 0.75rem;
}

.promotions-tradeoff-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.promotions-tradeoff-grid article {
  padding: 1rem;
  border: 1px solid var(--line);
  background: #fff;
}

.promotions-tradeoff-grid article:last-child {
  grid-column: 1 / -1;
}

.promotions-tradeoff-mark {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
  margin-bottom: 0.8rem;
  border-radius: 50%;
  background: #f5eee8;
  color: var(--accent);
  font-size: 0.75rem;
}

.promotions-tradeoff-grid h3 {
  font-size: 0.9rem;
}

.promotions-tradeoff-grid p {
  margin: 0;
}

.promotions-tradeoff-grid .promotions-decision-summary {
  margin-bottom: 0.6rem;
}

.promotions-outcome {
  padding-inline: 1.2rem;
  background: #f2f4ef;
}

.promotions-reflection {
  margin-top: 1.5rem;
}

.promotions-reflection-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem 1rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.promotions-reflection-list li {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--line);
  color: #464c44;
  font-size: 0.72rem;
  line-height: 1.6;
}

.promotions-reflection-list span {
  color: var(--accent);
  font-family: var(--mono);
  font-size: 0.55rem;
}

.promotions-footer {
  min-height: 90px;
  margin-top: 1.5rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.promotions-footer > a:not(.promotions-wordmark) {
  font-size: 0.75rem;
}

.promotions-footer > a:not(.promotions-wordmark) span {
  margin-left: 0.25rem;
  color: var(--accent);
}

.promotions-footer > span {
  font-family: var(--mono);
  font-size: 0.55rem;
}

.promotions-page a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (max-width: 900px) {
  .promotions-page {
    width: min(100% - 64px, 760px);
  }

  .promotions-hero {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 3rem 5%;
  }

  .promotions-hero h1 {
    font-size: clamp(3rem, 6.4vw, 4.3rem);
  }

  .promotions-story-section {
    grid-template-columns: minmax(150px, 0.5fr) minmax(0, 1.5fr);
    gap: 1.5rem 5%;
  }
}

@media (max-width: 650px) {
  .promotions-page {
    width: min(100% - 36px, 480px);
  }

  .promotions-header {
    height: 74px;
  }

  .promotions-header nav {
    gap: 1.2rem;
    font-size: 0.73rem;
  }

  .promotions-contact-link {
    padding-block: 0.55rem;
  }

  .promotions-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-block: 1.5rem 3.25rem;
  }

  .promotions-back-link {
    margin-bottom: 0;
  }

  .promotions-hero-copy {
    padding-block: 0.2rem;
  }

  .promotions-hero h1 {
    max-width: 420px;
    font-size: clamp(2.8rem, 12vw, 4.4rem);
  }

  .promotions-visual {
    padding: 0.7rem;
  }

  .promotions-window-body {
    padding: 0.75rem;
  }

  .promotions-story-section {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding-block: 2.5rem;
  }

  .promotions-section-heading h2 {
    max-width: 420px;
    font-size: clamp(1.85rem, 8vw, 2.5rem);
  }

  .promotions-decision {
    grid-template-columns: 26px minmax(0, 1fr);
    gap: 0.7rem;
  }

  .promotions-tradeoff-grid,
  .promotions-reflection-list {
    grid-template-columns: 1fr;
  }

  .promotions-tradeoff-grid article:last-child {
    grid-column: auto;
  }

  .promotions-outcome {
    padding-inline: 1rem;
  }

  .promotions-footer {
    min-height: 80px;
  }

  .promotions-footer > span {
    display: none;
  }
}

@media (max-width: 380px) {
  .promotions-card-grid {
    grid-template-columns: 1fr;
  }

  .promotions-card-grid article {
    min-height: 58px;
  }
}
</style>
