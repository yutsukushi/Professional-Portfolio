<script setup>
import MaterialProcurementDemo from './components/MaterialProcurementDemo.vue'
</script>

<template>
  <div class="case-study">
    <main id="main">
      <MaterialProcurementDemo />

      <section class="case-hero" aria-labelledby="case-title">
        <!-- <a class="back-link" href="./index.html#work">
          <span aria-hidden="true">←</span> Back to selected work
        </a> -->
        <div class="case-title-block">
          <p class="case-eyebrow"><span class="case-status-dot"></span> Product design · Frontend engineering</p>
          <h1 id="case-title">Material Procurement <em>Table</em></h1>
          <p class="case-intro">
            Vue · TypeScript · .NET
          </p>
          <div class="case-tags" aria-label="Project disciplines">
            <span>Vue</span>
            <span>TypeScript</span>
            <span>.NET</span>
          </div>
        </div>
        <figure class="case-image-placeholder case-hero-image">
          <span class="case-image-placeholder-label">Hero screenshot</span>
          <figcaption>Material procurement workspace</figcaption>
        </figure>
      </section>

      <section class="case-study-section case-problem" aria-labelledby="problem-title">
        <div class="case-section-heading">
          <p class="case-eyebrow">The challenge</p>
          <h2 id="problem-title">Problem</h2>
        </div>
        <div class="case-section-copy">
          <p class="case-lede">
            The challenge wasn't replacing Excel. It was preserving the speed
            and flexibility users relied on while supporting procurement
            decisions spreadsheets couldn't handle.
          </p>
          <p>
            Contractors build purchase orders from bills of materials
            containing hundreds of parts sourced across multiple suppliers.
            Some materials come from supplier catalogs, others are
            configurable, and many are custom items that don't exist in any
            catalog.
          </p>
          <p>
            While most teams manage this process in spreadsheets, procurement
            requires more than organizing rows and columns. Supplier
            availability, pricing, sourcing decisions, and purchasing rules all
            influence what ultimately gets ordered.
          </p>
          <p>My role covered both interaction design and frontend implementation.</p>
          <div class="case-inline-meta">
            <span>Product design</span>
            <span>Frontend engineering</span>
            <span>Vue · TypeScript · .NET</span>
          </div>
        </div>
      </section>

      <section class="case-study-section" aria-labelledby="decisions-title">
        <div class="case-section-heading">
          <p class="case-eyebrow">Design approach</p>
          <h2 id="decisions-title">Key Design Decisions</h2>
        </div>
        <div class="case-decision-list">
          <article class="case-decision">
            <div class="case-decision-copy">
              <p class="case-eyebrow">01 / Material types</p>
              <h3>Supporting Mixed Material Types</h3>
              <p class="case-decision-summary">
                Contractors needed to manage catalog, configurable, and custom
                materials within a single workflow rather than across separate
                experiences.
              </p>
              <p>
                Contractors regularly work with custom-fabricated components,
                configurable products, and materials that have yet to be
                cataloged. Relegating these items to separate experiences
                would introduce unnecessary complexity and break the user's
                workflow.
              </p>
              <p>
                A key design principle was ensuring that all material types
                received a consistent level of treatment. Previous approaches
                handled each type differently, often pulling users out of
                context and forcing them to think about the system's structure
                rather than their work.
              </p>
              <p>
                Keeping all material types within the same workflow preserves
                context, reduces cognitive overhead, and supports a more
                seamless user experience.
              </p>
            </div>
            <figure class="case-image-placeholder">
              <span class="case-image-placeholder-label">Screenshot</span>
              <figcaption>Catalog and non-catalog rows side-by-side</figcaption>
            </figure>
          </article>

          <article class="case-decision">
            <div class="case-decision-copy">
              <p class="case-eyebrow">02 / Supplier selection</p>
              <h3>Making Supplier Decisions Earlier</h3>
              <p class="case-decision-summary">
                Supplier availability and pricing were surfaced during
                material selection so users could evaluate options before
                committing to a vendor.
              </p>
              <p>Availability often determines what can be purchased just as much as price.</p>
              <p>
                Rather than surfacing inventory information after a supplier
                is selected, availability is shown during material search and
                selection. Users can compare options before committing to a
                vendor.
              </p>
              <p>
                This reduced the need to repeatedly switch between material
                selection and supplier research.
              </p>
            </div>
            <figure class="case-image-placeholder">
              <span class="case-image-placeholder-label">Screenshot</span>
              <figcaption>Supplier search dropdown showing inventory and pricing</figcaption>
            </figure>
          </article>

          <article class="case-decision">
            <div class="case-decision-copy">
              <p class="case-eyebrow">03 / Sourcing options</p>
              <h3>Surfacing Alternative Suppliers</h3>
              <p class="case-decision-summary">
                Alternative supplier options are surfaced directly within the
                workflow so users can evaluate tradeoffs without leaving the
                table context.
              </p>
              <p>
                The same material is often available from multiple suppliers
                with different pricing, stock levels, and lead times.
              </p>
              <p>
                To help users evaluate tradeoffs during procurement,
                alternative supplier options are surfaced directly through
                supplier recommendations and supplier selection tools.
              </p>
              <p>
                Users can compare available options without leaving the table
                context.
              </p>
            </div>
            <figure class="case-image-placeholder">
              <span class="case-image-placeholder-label">Screenshot</span>
              <figcaption>Switch &amp; Save nugget and supplier comparison experience</figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section class="case-study-section case-technical" aria-labelledby="technical-title">
        <div class="case-section-heading">
          <p class="case-eyebrow">Implementation</p>
          <h2 id="technical-title">Technical Considerations</h2>
        </div>
        <div class="case-section-copy">
          <p class="case-lede">
            Although the interaction model appears spreadsheet-like,
            implementation complexity increased significantly as procurement
            workflows were layered on top.
          </p>
          <p>
            The application needed to support large material lists while
            coordinating validation, persistence, pricing calculations,
            supplier data, and purchasing logic.
          </p>
          <p>Key implementation considerations included:</p>
          <ul class="case-bullet-list">
            <li>Debounced per-cell saves</li>
            <li>Independent validation states</li>
            <li>Optimistic total calculations</li>
            <li>Deferred rendering for heavier cell types</li>
            <li>Frozen-column support</li>
            <li>Simplified editors for high-frequency fields</li>
          </ul>
          <p>
            One of the biggest lessons from this project was how quickly
            feature-rich tables accumulate complexity. Separating behaviors
            early proved significantly easier than untangling them later.
          </p>
        </div>
      </section>

      <section class="case-study-section case-tradeoffs" aria-labelledby="tradeoffs-title">
        <div class="case-section-heading">
          <p class="case-eyebrow">Design rationale</p>
          <h2 id="tradeoffs-title">Key Tradeoffs</h2>
        </div>
        <div class="case-tradeoff-grid">
          <article>
            <h3>Stable Layout Over Column Resizing</h3>
            <p class="case-decision-summary">
              Maintaining predictable layouts across different viewport sizes
              proved more valuable than supporting custom column widths.
            </p>
            <p>
              Custom column resizing was explored early in the design process.
              As procurement workflows became more complex, maintaining
              predictable layouts across different viewport sizes proved more
              valuable than supporting user-defined column widths.
            </p>
            <p>
              The final implementation prioritized consistency and
              responsiveness over customization.
            </p>
          </article>
          <article>
            <h3>Progressive Disclosure Over Information Density</h3>
            <p class="case-decision-summary">
              High-value information remained visible while supporting details
              were surfaced through contextual interactions.
            </p>
            <p>
              A significant amount of procurement data could be associated
              with each material, including inventory availability, supplier
              alternatives, pricing details, and quantity breakdowns.
              Displaying all of this information directly within the table
              would have created a denser interface that was harder to scan
              and navigate.
            </p>
            <p>
              Instead, the design prioritized progressive disclosure.
              Supporting details were surfaced through contextual
              interactions such as popovers, supplier selection experiences,
              and comparison tools.
            </p>
            <p>
              This allowed users to access deeper information when needed
              while preserving the familiarity and readability of a
              spreadsheet-like workflow.
            </p>
          </article>
        </div>
      </section>

      <section class="case-study-section case-outcome" aria-labelledby="outcome-title">
        <div class="case-section-heading">
          <p class="case-eyebrow">Impact</p>
          <h2 id="outcome-title">Outcome</h2>
        </div>
        <div class="case-section-copy">
          <p class="case-lede">
            The materials table evolved from a passive planning tool into an
            active procurement workspace.
          </p>
          <p>
            Users could manage catalog, configurable, and non-catalog
            materials, evaluate supplier options, and prepare purchasing
            information without leaving their primary workflow.
          </p>
          <p>
            Together, these decisions transformed the table from a planning
            tool into a workspace that actively supported procurement
            decision-making.
          </p>
        </div>
      </section>

      <section class="case-study-section case-reflection" aria-labelledby="reflection-title">
        <div class="case-section-heading">
          <p class="case-eyebrow">Looking ahead</p>
          <h2 id="reflection-title">Reflection</h2>
        </div>
        <div class="case-section-copy">
          <p class="case-lede">
            If revisiting the project today, I would focus on improving
            quantity visibility, editing flexibility, and personalization.
          </p>
          <p>Areas I would prioritize include:</p>
          <ul class="case-bullet-list">
            <li>Improving visualization of planned, ordered, received, and remaining quantities.</li>
            <li>Expanding undo support to individual cell and row-level edits.</li>
            <li>Providing additional personalization options for teams managing large material lists.</li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>✦ Crafted with care ✦</p>
    </footer>
  </div>
</template>

<style scoped>
.case-hero {
  display: grid;
  grid-template-columns: 1fr 0.77fr;
  align-items: center;
  gap: 7%;
  padding-block: 3.2rem 5.5rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #656a61;
  font-size: 0.75rem;
  transition: color 160ms ease;
}

.case-hero > .back-link {
  grid-column: 1 / -1;
  margin-bottom: 1.1rem;
}

.case-title-block {
  min-width: 0;
  padding-block: 1.1rem;
}

.case-eyebrow {
  font-family: var(--mono);
  font-size: 0.63rem;
  letter-spacing: 0.045em;
}

.case-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.2rem;
  color: var(--muted);
  text-transform: uppercase;
}

.case-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #b0834d;
  box-shadow: 0 0 0 4px #f1e9dc;
}

.case-title-block h1 {
  max-width: 690px;
  margin: 0 0 1.35rem;
  font-size: clamp(3.5rem, 6.3vw, 5.5rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.045em;
}

.case-title-block h1 em,
.case-section-heading h2 em {
  color: var(--accent);
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: 0;
}

.case-intro {
  max-width: 510px;
  margin-bottom: 1.5rem;
  color: #606057;
  font-size: 0.95rem;
  line-height: 1.75;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.case-tags span {
  padding: 0.45rem 0.65rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: #62675e;
  font-family: var(--mono);
  font-size: 0.56rem;
}

.case-image-placeholder {
  position: relative;
  display: grid;
  width: 100%;
  min-height: 250px;
  aspect-ratio: 16 / 10;
  align-content: center;
  justify-items: center;
  gap: 0.45rem;
  margin: 0;
  overflow: hidden;
  border: 1px solid #dfe3dc;
  background:
    linear-gradient(135deg, rgb(255 255 255 / 55%), transparent 58%),
    repeating-linear-gradient(135deg, #f1f2ed 0 1px, #f7f7f3 1px 9px);
}

.case-hero-image {
  min-height: 370px;
}

.case-image-placeholder-label {
  color: #777e74;
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.case-image-placeholder figcaption {
  max-width: 80%;
  color: #454b43;
  font-family: var(--serif);
  font-size: 1.05rem;
  text-align: center;
}

.case-study-section {
  display: grid;
  grid-template-columns: minmax(180px, 0.55fr) minmax(0, 1.45fr);
  gap: 2rem 7%;
  padding-block: 3.75rem;
  border-top: 1px solid var(--line);
}

.case-section-heading .case-eyebrow {
  margin-bottom: 0.7rem;
}

.case-section-heading h2 {
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.45rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.12;
}

.case-section-copy {
  max-width: 690px;
}

.case-section-copy p,
.case-decision-copy p,
.case-tradeoff-grid p {
  margin: 0 0 1rem;
  color: #606057;
  font-size: 0.82rem;
  line-height: 1.8;
}

.case-section-copy .case-lede,
.case-decision-summary {
  color: #343a32;
  font-size: 1rem;
  line-height: 1.65;
}

.case-inline-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.5rem;
}

.case-inline-meta span {
  padding: 0.35rem 0.55rem;
  border: 1px solid var(--line);
  color: #62675e;
  font-family: var(--mono);
  font-size: 0.55rem;
}

.case-decision-list {
  display: grid;
}

.case-decision {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(220px, 0.9fr);
  align-items: center;
  gap: 2rem;
  padding-block: 1.5rem;
  border-bottom: 1px solid var(--line);
}

.case-decision:first-child {
  padding-top: 0;
}

.case-decision:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.case-decision-copy .case-eyebrow {
  margin-bottom: 0.65rem;
}

.case-decision-copy h3,
.case-tradeoff-grid h3 {
  margin: 0 0 0.75rem;
  color: #282d27;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.case-decision-copy .case-decision-summary,
.case-tradeoff-grid .case-decision-summary {
  color: #343a32;
  font-size: 0.88rem;
  font-weight: 500;
}

.case-decision .case-image-placeholder {
  min-height: 190px;
}

.case-bullet-list {
  display: grid;
  gap: 0.55rem;
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  color: #606057;
  font-size: 0.82rem;
  line-height: 1.65;
}

.case-tradeoff-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.case-tradeoff-grid article {
  padding: 1.25rem;
  border: 1px solid var(--line);
  background: #fff;
}

.case-tradeoff-grid h3 {
  font-size: 1.05rem;
}

.supplier-option-alert .supplier-alert-tooltip {
  display: grid;
  min-width: 130px;
  gap: 0.2rem;
}

.case-study a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (max-width: 900px) {
  .case-hero {
    grid-template-columns: 1fr 0.72fr;
    gap: 4%;
  }

  .case-title-block h1 {
    font-size: clamp(3rem, 7vw, 4.4rem);
  }

  .case-study-section {
    grid-template-columns: minmax(150px, 0.5fr) minmax(0, 1.5fr);
    gap: 1.5rem 5%;
  }

  .case-decision {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }

  .case-decision .case-image-placeholder {
    min-height: 230px;
  }
}

@media (max-width: 650px) {
  .case-study {
    width: min(100% - 36px, 480px);
  }

  .procurement-table-section {
    padding-block: 2rem 2.7rem;
  }

  .table-heading {
    align-items: start;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .table-heading h2 {
    font-size: 2.7rem;
  }

  .table-project-label {
    padding: 0;
  }

  .table-footer {
    font-size: 0.46rem;
  }

  .case-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-block: 2rem 3.5rem;
  }

  .case-hero > .back-link {
    margin-bottom: 0;
  }

  .case-title-block {
    padding-block: 0.4rem 0.7rem;
  }

  .case-title-block h1 {
    font-size: clamp(2.65rem, 12vw, 4.8rem);
  }

  .case-hero-image {
    min-height: 240px;
  }

  .case-study-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-block: 2.5rem;
  }

  .case-decision {
    gap: 0.75rem;
    padding-block: 1.25rem;
  }

  .case-decision .case-image-placeholder {
    min-height: 190px;
  }

  .case-tradeoff-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .case-tradeoff-grid article {
    padding: 1rem;
  }

}
</style>
