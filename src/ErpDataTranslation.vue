<template>
  <a class="skip-link" href="#main">Skip to content</a>

  <div class="erp-page">
    <header class="erp-header">
      <a class="erp-wordmark" href="./index.html" aria-label="Yukie Kushibiki, home">YK<span>.</span></a>
      <nav aria-label="Case study navigation">
        <a href="./index.html#work">Selected work</a>
        <a class="erp-contact-link" href="./index.html#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>

    <main id="main">
      <section class="erp-hero" aria-labelledby="case-title">
        <a class="erp-back-link" href="./index.html#work"><span aria-hidden="true">←</span> Selected work</a>
        <div class="erp-hero-copy">
          <p class="erp-eyebrow"><span class="erp-status-dot"></span> Product design · Frontend engineering</p>
          <h1 id="case-title">Self-Service ERP <em>Data Translation</em></h1>
          <p class="erp-intro">
            A configurable translation system that lets administrators shape procurement data for
            each client’s ERP, validate the result, and manage delivery without engineering support.
          </p>
          <div class="erp-tags" aria-label="Technologies">
            <span>Vue</span>
            <span>TypeScript</span>
            <span>.NET</span>
          </div>
        </div>

        <figure class="erp-visual erp-hero-visual">
          <div class="erp-window">
            <div class="erp-window-bar">
              <span class="erp-window-brand"><span class="erp-brand-mark">p</span> peregrin</span>
              <span class="erp-window-status"><i></i> Template saved</span>
            </div>
            <div class="erp-window-content">
              <div class="erp-product-heading">
                <div><small>EXPORT TEMPLATE / HARBOR HOUSE</small><strong>Purchase order · ERP export</strong></div>
                <span class="erp-ready-pill">Preview ready</span>
              </div>
              <div class="erp-app-tabs"><span class="active">Template</span><span>Exports</span><span>Connections</span></div>
              <div class="erp-config-preview">
                <div class="erp-mapping-panel">
                  <div class="erp-panel-heading"><strong>Column mapping</strong><span>+ Add column</span></div>
                  <div class="erp-mapping-row erp-table-labels"><span>Source</span><span>ERP column</span></div>
                  <div class="erp-mapping-row"><span>Project Number</span><b>Job Code</b><i>01</i></div>
                  <div class="erp-mapping-row"><span>Order Date</span><b>PO Date</b><i>02</i></div>
                  <div class="erp-mapping-row"><span>Supplier Name</span><b>Vendor</b><i>03</i></div>
                  <div class="erp-mapping-row"><span>Line Total</span><b>Amount</b><i>04</i></div>
                </div>
                <div class="erp-live-card">
                  <div class="erp-panel-heading"><strong>Output preview</strong><span class="erp-valid"><i></i> Valid</span></div>
                  <div class="erp-preview-file"><span aria-hidden="true">▤</span><div><b>harbor_house_po.csv</b><small>4 columns · 3 rows</small></div></div>
                  <div class="erp-preview-row"><b>Job Code</b><span>HH-204</span></div>
                  <div class="erp-preview-row"><b>PO Date</b><span>10/28/2026</span></div>
                  <div class="erp-preview-row"><b>Vendor</b><span>Northline Supply</span></div>
                  <div class="erp-preview-row"><b>Amount</b><span>$2,480.00</span></div>
                </div>
              </div>
            </div>
          </div>
          <figcaption>One place to configure, inspect, and validate an ERP export.</figcaption>
        </figure>
      </section>

      <section class="erp-story-section erp-challenge" aria-labelledby="challenge-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">01 / The challenge</p>
          <h2 id="challenge-title">Different systems speak <em>different languages.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">
            The same purchase order data needed to be interpreted differently by every client’s ERP.
          </p>
          <p>
            Construction teams used Peregrin to manage purchasing workflows, but accounting processes
            often continued in external ERP systems. Each ERP expected purchase order data in its own
            format, with different field names, structures, formatting requirements, file conventions,
            and delivery methods.
          </p>
          <p>
            What one ERP called a Project Number, another might call a Job Code. The same value could
            require different formatting, transformations, or file placement depending on the destination.
          </p>
          <p class="erp-callout">This wasn’t really an export problem. It was a translation problem.</p>
          <p>
            The challenge was creating a system that allowed administrators to define those translations
            themselves without requiring engineering support.
          </p>
        </div>
      </section>

      <section class="erp-story-section" aria-labelledby="translation-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">02 / The system</p>
          <h2 id="translation-title">Building a <em>translation layer.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">Administrators needed a way to describe how procurement data should be transformed for their ERP.</p>
          <p>
            Rather than treating exports as static file definitions, exports were modeled as a
            configurable translation system. Each output column could define its source data, column
            order, ERP-specific naming, formatting rules, value transformations, and overflow behavior.
          </p>
          <p>
            This made it possible to support very different ERP requirements without creating a custom
            integration for every client.
          </p>
          <figure class="erp-visual erp-screenshot">
            <div class="erp-screen-toolbar"><span>Template configuration</span><span>Harbor House · Purchase order</span></div>
            <div class="erp-grid-wrap">
              <table class="erp-config-grid" aria-label="Example template configuration grid">
                <thead><tr><th>Order</th><th>Source data</th><th>Output column</th><th>Rules</th><th>Example</th></tr></thead>
                <tbody>
                  <tr><td>01</td><td><span class="erp-source-chip">Project Number</span></td><td>Job Code</td><td><span class="erp-rule-chip">Uppercase</span></td><td>HH-204</td></tr>
                  <tr><td>02</td><td><span class="erp-source-chip">Order Date</span></td><td>PO Date</td><td><span class="erp-rule-chip">Date Format</span></td><td>10/28/2026</td></tr>
                  <tr><td>03</td><td><span class="erp-source-chip">Supplier Name</span></td><td>Vendor</td><td><span class="erp-rule-chip">Max 30 chars</span></td><td>Northline Supply</td></tr>
                  <tr><td>04</td><td><span class="erp-source-chip">Line Total</span></td><td>Amount</td><td><span class="erp-rule-chip">2 decimals</span></td><td>$2,480.00</td></tr>
                </tbody>
              </table>
            </div>
            <figcaption>Template configuration grid · Source fields, output columns, and rules in context.</figcaption>
          </figure>
        </div>
      </section>

      <section class="erp-story-section" aria-labelledby="rules-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">03 / Human-readable rules</p>
          <h2 id="rules-title">Make translations <em>understandable.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">Users shouldn’t need to think like developers in order to configure integrations.</p>
          <p>
            Many export systems expose raw transformation settings and require users to mentally
            calculate the resulting output. Instead, translation rules were represented as
            human-readable operations so administrators could understand what would happen without
            interpreting implementation details.
          </p>
          <figure class="erp-visual erp-rule-visual">
            <div class="erp-rule-header"><span>Column rules</span><span>Job Code <b>⌄</b></span></div>
            <div class="erp-rule-item"><span class="erp-rule-icon">Aa</span><div><b>Max 10 Characters</b><small>Trim extra characters from the end</small></div><span class="erp-rule-grip">⋮⋮</span></div>
            <div class="erp-rule-item"><span class="erp-rule-icon">↑</span><div><b>Uppercase</b><small>Convert all letters to uppercase</small></div><span class="erp-rule-grip">⋮⋮</span></div>
            <div class="erp-rule-item"><span class="erp-rule-icon">↪</span><div><b>Overflow to Column B</b><small>Continue the value in the next column</small></div><span class="erp-rule-grip">⋮⋮</span></div>
            <div class="erp-rule-add">＋ Add a transformation</div>
            <figcaption>Translation rules · Clear operations instead of raw transformation settings.</figcaption>
          </figure>
        </div>
      </section>

      <section class="erp-story-section" aria-labelledby="feedback-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">04 / In-context feedback</p>
          <h2 id="feedback-title">Shorten the <em>feedback loop.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">Users needed to see translated output while building a template, not after generating a file.</p>
          <p>
            Without feedback, configuration became a cycle of plain text, configure, generate export,
            open file, find problem, repeat. A live preview remained visible alongside template
            configuration, allowing users to verify headers, transformations, filenames, and output
            structure while making changes.
          </p>
          <p>The goal was to make validation part of configuration rather than something that happened afterward.</p>
          <figure class="erp-visual erp-preview-visual">
            <div class="erp-preview-config">
              <div class="erp-screen-toolbar"><span>Configure template</span><span>Saved just now</span></div>
              <div class="erp-preview-setting"><span>File name</span><b>harbor_house_po.csv</b></div>
              <div class="erp-preview-setting"><span>Date format</span><b>MM/DD/YYYY <span>⌄</span></b></div>
              <div class="erp-preview-setting"><span>Delimiter</span><b>Comma <span>⌄</span></b></div>
              <div class="erp-preview-check"><span>✓</span> Output passes validation</div>
            </div>
            <div class="erp-preview-output">
              <div class="erp-screen-toolbar"><span>Live preview</span><span class="erp-live-label"><i></i> Live</span></div>
              <div class="erp-output-file"><span>CSV</span><b>harbor_house_po.csv</b><small>Preview output</small></div>
              <div class="erp-output-table">
                <div><b>Job Code</b><b>PO Date</b><b>Amount</b></div>
                <div><span>HH-204</span><span>10/28/2026</span><span>$2,480.00</span></div>
                <div><span>HH-205</span><span>10/29/2026</span><span>$860.50</span></div>
              </div>
            </div>
            <figcaption>Live preview · Output checks stay beside the configuration that shapes them.</figcaption>
          </figure>
        </div>
      </section>

      <section class="erp-story-section" aria-labelledby="areas-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">05 / Clear responsibilities</p>
          <h2 id="areas-title">Separate authoring from <em>operations.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">Defining a translation is a different task from managing exports.</p>
          <p>The system was intentionally divided into three areas, keeping each workflow focused and easier to understand.</p>
          <figure class="erp-visual erp-areas-visual">
            <div class="erp-screen-toolbar"><span>Workspace</span><span>Harbor House</span></div>
            <div class="erp-area-layout">
              <nav class="erp-side-nav" aria-label="Example workspace navigation">
                <span class="erp-side-nav-brand"><i>p</i> Peregrin</span>
                <span class="erp-side-nav-item active"><b>▦</b> Template</span>
                <span class="erp-side-nav-item"><b>↥</b> Exports</span>
                <span class="erp-side-nav-item"><b>⌁</b> Connections</span>
              </nav>
              <div class="erp-area-cards">
                <article><span class="erp-area-icon">▦</span><small>AUTHORING</small><h3>Template</h3><p>Define translation rules for your ERP.</p><span class="erp-area-link">Edit template <b>↗</b></span></article>
                <article><span class="erp-area-icon">↥</span><small>OPERATIONS</small><h3>Exports</h3><p>Monitor generated exports, history, and status.</p><span class="erp-area-link">View exports <b>↗</b></span></article>
                <article><span class="erp-area-icon">⌁</span><small>DELIVERY</small><h3>Connections</h3><p>Manage destinations such as SFTP integrations.</p><span class="erp-area-link">Manage connections <b>↗</b></span></article>
              </div>
            </div>
            <figcaption>Template, Exports, and Connections · Three clear places for distinct tasks.</figcaption>
          </figure>
        </div>
      </section>

      <section class="erp-story-section" aria-labelledby="trust-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">06 / Confidence</p>
          <h2 id="trust-title">Build trust in <em>the output.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">Translation systems are only useful if users trust the result.</p>
          <p>
            Incorrect exports could affect downstream accounting and operational workflows. To improve
            confidence, the system provided validation before generation, error detection during
            configuration, output previews, export history, status tracking, and delivery failure messaging.
          </p>
          <p>Rather than discovering issues after delivery, administrators could identify and resolve problems while configuring the translation.</p>
          <figure class="erp-visual erp-history-visual">
            <div class="erp-screen-toolbar"><span>Export history</span><span>All activity <b>⌄</b></span></div>
            <div class="erp-history-alert"><span>✓</span><div><b>Ready to export</b><small>All required columns are valid.</small></div><button type="button">Generate export</button></div>
            <div class="erp-history-table">
              <div class="erp-history-row erp-history-labels"><span>File</span><span>Created</span><span>Destination</span><span>Status</span></div>
              <div class="erp-history-row"><b>harbor_house_po_042.csv</b><span>Oct 28, 2026 · 10:42 AM</span><span>Harbor SFTP</span><span class="erp-status-success">● Delivered</span></div>
              <div class="erp-history-row"><b>harbor_house_po_041.csv</b><span>Oct 27, 2026 · 3:18 PM</span><span>Harbor SFTP</span><span class="erp-status-success">● Delivered</span></div>
              <div class="erp-history-row"><b>harbor_house_po_040.csv</b><span>Oct 26, 2026 · 9:05 AM</span><span>Harbor SFTP</span><span class="erp-status-error">● Delivery failed</span></div>
            </div>
            <div class="erp-delivery-note"><b>Delivery needs attention</b><span>Connection timed out. Check the SFTP connection and try again.</span><a href="#areas-title">Review connection <span aria-hidden="true">↗</span></a></div>
            <figcaption>Export history and validation · Status and delivery issues are visible and actionable.</figcaption>
          </figure>
        </div>
      </section>

      <section class="erp-story-section" aria-labelledby="tradeoffs-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">07 / Tradeoffs</p>
          <h2 id="tradeoffs-title">Intentional choices, <em>not shortcuts.</em></h2>
        </div>
        <div class="erp-section-copy">
          <div class="erp-tradeoff-grid">
            <article>
              <p class="erp-eyebrow">01 / Predictability</p>
              <h3>Explicit rules over automation</h3>
              <p>Predictability proved more valuable than intelligent guesswork. Explicit transformations made integrations easier to understand, troubleshoot, and maintain.</p>
            </article>
            <article>
              <p class="erp-eyebrow">02 / Guardrails</p>
              <h3>Guided configuration over unlimited flexibility</h3>
              <p>Not every behavior was made configurable. Certain business rules remained enforced to prevent invalid exports and downstream workflow failures.</p>
            </article>
            <article>
              <p class="erp-eyebrow">03 / Focus</p>
              <h3>Separation over consolidation</h3>
              <p>Reducing cognitive load within each workflow proved more valuable than combining everything in one interface. Template configuration, export generation, and delivery management remained separate responsibilities.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="erp-outcome" aria-labelledby="outcome-title">
        <div>
          <p class="erp-eyebrow">08 / Outcome</p>
          <h2 id="outcome-title">From export workflow to <em>self-service translation.</em></h2>
        </div>
        <div>
          <p class="erp-outcome-lede">
            Administrators could define how procurement data should be transformed for their ERP,
            validate those translations before generating files, and manage export operations without
            engineering involvement.
          </p>
          <p>
            The result was a scalable way to support diverse ERP requirements without building a
            bespoke integration for every client.
          </p>
        </div>
      </section>

      <section class="erp-story-section erp-reflection" aria-labelledby="reflection-title">
        <div class="erp-section-heading">
          <p class="erp-eyebrow">09 / Reflection</p>
          <h2 id="reflection-title">Make translations more <em>reusable.</em></h2>
        </div>
        <div class="erp-section-copy">
          <p class="erp-lede">If revisiting the project today, I would focus on making translations more reusable, testable, and portable across integrations.</p>
          <p>Areas I would explore include:</p>
          <ul class="erp-reflection-list">
            <li><span>01</span> Multiple templates per workspace</li>
            <li><span>02</span> Sandbox testing environments</li>
            <li><span>03</span> Template versioning and rollback</li>
            <li><span>04</span> Reusable transformation libraries</li>
            <li><span>05</span> Shared translation patterns across ERP systems</li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="erp-footer">
      <a class="erp-wordmark" href="./index.html" aria-label="Back to portfolio">YK<span>.</span></a>
      <a href="./index.html#work">Explore more work <span aria-hidden="true">↗</span></a>
      <span>© 2026 Yukie Kushibiki</span>
    </footer>
  </div>
</template>

<style scoped>
.erp-page {
  width: min(100% - 96px, 1120px);
  margin-inline: auto;
  color: var(--ink);
}

.erp-header,
.erp-header nav,
.erp-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.erp-header {
  height: 92px;
  border-bottom: 1px solid var(--line);
}

.erp-wordmark {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.08em;
}

.erp-wordmark span {
  color: var(--accent);
}

.erp-header nav {
  gap: clamp(1.5rem, 4vw, 3.5rem);
  font-size: 0.83rem;
}

.erp-header nav a,
.erp-footer a:not(.erp-wordmark) {
  transition: color 160ms ease;
}

.erp-header nav a:hover,
.erp-footer a:not(.erp-wordmark):hover {
  color: var(--accent);
}

.erp-contact-link {
  padding-block: 0.7rem;
  border-bottom: 1px solid var(--accent);
}

.erp-contact-link span {
  margin-left: 0.35rem;
}

.erp-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.75rem;
}

.erp-back-link:hover {
  color: var(--accent);
}

.erp-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  align-items: center;
  gap: 4rem 7%;
  padding-block: 2rem 5.5rem;
}

.erp-back-link {
  grid-column: 1 / -1;
  margin-bottom: -1.6rem;
}

.erp-hero-copy {
  padding-block: 1rem;
}

.erp-eyebrow {
  margin: 0 0 0.85rem;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.59rem;
  letter-spacing: 0.07em;
  line-height: 1.6;
  text-transform: uppercase;
}

.erp-hero-copy > .erp-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.2rem;
}

.erp-status-dot,
.erp-valid i,
.erp-live-label i {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #6e9d73;
}

.erp-status-dot {
  box-shadow: 0 0 0 4px #e6eee3;
}

.erp-hero h1 {
  max-width: 550px;
  margin: 0 0 1.35rem;
  font-size: clamp(3.35rem, 6vw, 5rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.99;
}

.erp-hero h1 em,
.erp-section-heading h2 em,
.erp-outcome h2 em {
  color: var(--accent);
  font-family: var(--serif);
  font-weight: 500;
  letter-spacing: 0;
}

.erp-intro {
  max-width: 480px;
  margin-bottom: 1.5rem;
  color: #606057;
  font-size: 0.94rem;
  line-height: 1.8;
}

.erp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.erp-tags span {
  padding: 0.42rem 0.62rem;
  border: 1px solid var(--line);
  color: #62675e;
  font-family: var(--mono);
  font-size: 0.57rem;
}

.erp-visual {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid #dfe3dc;
  background: #f2f4ef;
}

.erp-hero-visual {
  padding: clamp(0.8rem, 2.4vw, 1.6rem);
  background:
    radial-gradient(ellipse at 82% 15%, rgb(230 237 225 / 80%), transparent 50%),
    #eef1eb;
}

.erp-window {
  overflow: hidden;
  border: 1px solid #e1e5de;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 18px 48px rgb(41 57 43 / 11%);
}

.erp-window-bar,
.erp-window-brand,
.erp-window-status,
.erp-product-heading,
.erp-app-tabs,
.erp-panel-heading,
.erp-preview-file,
.erp-screen-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.erp-window-bar {
  min-height: 44px;
  padding-inline: 1rem;
  border-bottom: 1px solid #edf0ec;
}

.erp-window-brand {
  justify-content: flex-start;
  gap: 0.4rem;
  font-size: 0.65rem;
  font-weight: 600;
}

.erp-brand-mark {
  display: inline-grid;
  width: 19px;
  height: 19px;
  place-items: center;
  border-radius: 5px;
  background: #edf2e9;
  color: #56744f;
  font-family: var(--serif);
}

.erp-window-status,
.erp-ready-pill,
.erp-valid {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #657160;
  font-size: 0.51rem;
}

.erp-window-status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7a9b77;
}

.erp-window-content {
  padding: 1.1rem;
}

.erp-product-heading {
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.erp-product-heading > div {
  display: grid;
  gap: 0.25rem;
}

.erp-product-heading small {
  color: #858b82;
  font-family: var(--mono);
  font-size: 0.42rem;
  letter-spacing: 0.05em;
}

.erp-product-heading strong {
  font-size: 0.74rem;
  font-weight: 600;
}

.erp-ready-pill {
  padding: 0.3rem 0.4rem;
  border-radius: 3px;
  background: #eff5ed;
  color: #55724d;
  white-space: nowrap;
}

.erp-app-tabs {
  justify-content: flex-start;
  gap: 1.1rem;
  border-bottom: 1px solid #e9ece7;
  color: #858b82;
  font-size: 0.55rem;
}

.erp-app-tabs span {
  padding-bottom: 0.5rem;
}

.erp-app-tabs .active {
  border-bottom: 2px solid #658461;
  color: #394b37;
}

.erp-config-preview {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0.7rem;
  padding-top: 0.8rem;
}

.erp-mapping-panel,
.erp-live-card {
  min-width: 0;
  padding: 0.6rem;
  border: 1px solid #e9ece7;
  border-radius: 3px;
}

.erp-panel-heading {
  gap: 0.4rem;
  margin-bottom: 0.55rem;
  font-size: 0.52rem;
}

.erp-panel-heading > span:not(.erp-valid) {
  color: #658461;
  font-size: 0.45rem;
  white-space: nowrap;
}

.erp-mapping-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 16px;
  align-items: center;
  gap: 0.3rem;
  min-height: 27px;
  border-top: 1px solid #f0f1ee;
  color: #71776f;
  font-size: 0.46rem;
}

.erp-mapping-row b {
  overflow: hidden;
  color: #343a32;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.erp-mapping-row i {
  color: #969b93;
  font-family: var(--mono);
  font-size: 0.42rem;
  font-style: normal;
  text-align: right;
}

.erp-mapping-row.erp-table-labels {
  min-height: 21px;
  color: #969b93;
  font-size: 0.4rem;
}

.erp-mapping-row.erp-table-labels span:first-child {
  grid-column: 1;
}

.erp-live-card .erp-panel-heading {
  margin-bottom: 0.4rem;
}

.erp-valid {
  color: #55724d;
  font-size: 0.43rem;
}

.erp-valid i {
  width: 5px;
  height: 5px;
}

.erp-preview-file {
  justify-content: flex-start;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  padding: 0.4rem;
  background: #f5f7f3;
  color: #647d60;
  font-size: 0.65rem;
}

.erp-preview-file div {
  display: grid;
  min-width: 0;
  gap: 0.15rem;
}

.erp-preview-file b {
  overflow: hidden;
  color: #343a32;
  font-size: 0.43rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.erp-preview-file small {
  color: #858b82;
  font-size: 0.4rem;
}

.erp-preview-row {
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
  padding-block: 0.29rem;
  border-bottom: 1px solid #f0f1ee;
  color: #737971;
  font-size: 0.42rem;
}

.erp-preview-row b {
  color: #454b43;
  font-weight: 500;
}

.erp-visual figcaption {
  padding: 0.7rem 0.85rem;
  color: #70776d;
  font-family: var(--mono);
  font-size: 0.53rem;
  line-height: 1.6;
}

.erp-hero-visual figcaption {
  padding: 0.85rem 0 0;
}

.erp-story-section {
  display: grid;
  grid-template-columns: minmax(180px, 0.55fr) minmax(0, 1.45fr);
  gap: 2rem 7%;
  padding-block: 3.65rem;
  border-top: 1px solid var(--line);
}

.erp-section-heading .erp-eyebrow {
  margin-bottom: 0.7rem;
}

.erp-section-heading h2,
.erp-outcome h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.12;
}

.erp-section-copy {
  min-width: 0;
  max-width: 760px;
}

.erp-section-copy > p,
.erp-tradeoff-grid p,
.erp-outcome > div:last-child > p {
  margin: 0 0 1rem;
  color: #606057;
  font-size: 0.82rem;
  line-height: 1.8;
}

.erp-section-copy .erp-lede,
.erp-outcome .erp-outcome-lede {
  color: #343a32;
  font-size: 1rem;
  line-height: 1.65;
}

.erp-callout {
  margin-block: 1.4rem !important;
  padding: 1rem 1.15rem;
  border-left: 2px solid var(--accent);
  background: #f4f2ec;
  color: #343a32 !important;
  font-family: var(--serif);
  font-size: 1.2rem !important;
}

.erp-screenshot,
.erp-rule-visual,
.erp-preview-visual,
.erp-areas-visual,
.erp-history-visual {
  margin-top: 1.8rem;
  box-shadow: 0 12px 35px rgb(41 57 43 / 5%);
}

.erp-screen-toolbar {
  min-height: 42px;
  gap: 0.75rem;
  padding-inline: 1rem;
  border-bottom: 1px solid #e7eae4;
  background: #fff;
  color: #545b52;
  font-size: 0.62rem;
}

.erp-screen-toolbar span:last-child {
  color: #81877e;
  font-size: 0.51rem;
}

.erp-grid-wrap {
  overflow-x: auto;
}

.erp-config-grid {
  width: 100%;
  min-width: 570px;
  border-collapse: collapse;
  background: #fff;
  text-align: left;
}

.erp-config-grid th,
.erp-config-grid td {
  padding: 0.75rem 0.8rem;
  border-bottom: 1px solid #edf0ec;
  font-size: 0.57rem;
  white-space: nowrap;
}

.erp-config-grid th {
  background: #f8f9f7;
  color: #858b82;
  font-size: 0.48rem;
  font-weight: 500;
}

.erp-config-grid td:first-child {
  color: #969b93;
  font-family: var(--mono);
  font-size: 0.48rem;
}

.erp-source-chip,
.erp-rule-chip {
  display: inline-block;
  padding: 0.28rem 0.4rem;
  border: 1px solid #e5e9e2;
  border-radius: 3px;
  background: #fafbf9;
  color: #4b5149;
  font-size: 0.5rem;
}

.erp-rule-chip {
  border-color: #e6ebdf;
  background: #f2f5ed;
  color: #5b7354;
}

.erp-rule-visual {
  padding: 1rem 1.2rem 0;
  background: #fff;
}

.erp-rule-header {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #e9ece7;
  font-size: 0.67rem;
  font-weight: 600;
}

.erp-rule-header span:last-child {
  color: #596953;
  font-size: 0.58rem;
  font-weight: 500;
}

.erp-rule-header b {
  margin-left: 0.4rem;
  color: #969b93;
}

.erp-rule-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-block: 0.85rem;
  border-bottom: 1px solid #f0f1ee;
}

.erp-rule-icon {
  display: grid;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 4px;
  background: #f1f4ee;
  color: #60785a;
  font-family: var(--mono);
  font-size: 0.72rem;
}

.erp-rule-item > div {
  display: grid;
  flex: 1;
  gap: 0.2rem;
}

.erp-rule-item b {
  color: #3e443c;
  font-size: 0.65rem;
  font-weight: 600;
}

.erp-rule-item small {
  color: #858b82;
  font-size: 0.54rem;
}

.erp-rule-grip {
  color: #a4aaa1;
  font-size: 0.8rem;
}

.erp-rule-add {
  padding-block: 0.85rem;
  color: #60785a;
  font-size: 0.58rem;
  font-weight: 600;
}

.erp-rule-visual figcaption {
  margin-inline: -1.2rem;
  border-top: 1px solid #edf0ec;
  background: #f8f9f7;
}

.erp-preview-visual {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  background: #edf0ea;
}

.erp-preview-config,
.erp-preview-output {
  min-width: 0;
  background: #fff;
}

.erp-preview-config {
  border-right: 1px solid #e3e7e1;
}

.erp-preview-config .erp-screen-toolbar,
.erp-preview-output .erp-screen-toolbar {
  min-height: 43px;
}

.erp-preview-setting {
  display: grid;
  gap: 0.35rem;
  margin: 0.8rem 0.8rem 0;
  color: #737971;
  font-size: 0.5rem;
}

.erp-preview-setting b {
  display: flex;
  justify-content: space-between;
  padding: 0.55rem;
  border: 1px solid #e5e9e2;
  border-radius: 3px;
  color: #424840;
  font-size: 0.55rem;
  font-weight: 500;
}

.erp-preview-setting b span {
  color: #969b93;
}

.erp-preview-check {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.9rem 0.8rem 0.8rem;
  color: #55724d;
  font-size: 0.52rem;
}

.erp-preview-check span {
  display: grid;
  width: 16px;
  height: 16px;
  place-items: center;
  border-radius: 50%;
  background: #eff5ed;
}

.erp-preview-output {
  display: flex;
  flex-direction: column;
}

.erp-live-label {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.erp-live-label i {
  width: 6px;
  height: 6px;
}

.erp-output-file {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.25rem 0.5rem;
  margin: 0.85rem;
  padding: 0.65rem;
  border: 1px solid #e8ebe5;
  border-radius: 3px;
}

.erp-output-file > span {
  grid-row: span 2;
  padding: 0.35rem;
  border-radius: 3px;
  background: #eff4eb;
  color: #637c5d;
  font-family: var(--mono);
  font-size: 0.45rem;
}

.erp-output-file b {
  font-size: 0.55rem;
  font-weight: 600;
}

.erp-output-file small {
  color: #858b82;
  font-size: 0.47rem;
}

.erp-output-table {
  margin: 0 0.85rem 0.85rem;
  overflow: hidden;
  border: 1px solid #e8ebe5;
  border-radius: 3px;
}

.erp-output-table > div {
  display: grid;
  grid-template-columns: 1fr 1.1fr 1fr;
}

.erp-output-table > div > * {
  overflow: hidden;
  padding: 0.55rem 0.4rem;
  border-bottom: 1px solid #edf0ec;
  color: #61675f;
  font-size: 0.45rem;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.erp-output-table > div > b {
  background: #f7f8f6;
  color: #70776d;
  font-size: 0.43rem;
  font-weight: 600;
}

.erp-preview-visual figcaption {
  grid-column: 1 / -1;
  border-top: 1px solid #e3e7e1;
  background: #f8f9f7;
}

.erp-areas-visual {
  background: #fff;
}

.erp-area-layout {
  display: grid;
  grid-template-columns: 150px 1fr;
  min-height: 250px;
}

.erp-side-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.8rem;
  border-right: 1px solid #edf0ec;
  background: #fbfcfa;
}

.erp-side-nav-brand {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
  font-size: 0.61rem;
  font-weight: 600;
}

.erp-side-nav-brand i {
  display: grid;
  width: 18px;
  height: 18px;
  place-items: center;
  border-radius: 4px;
  background: #edf2e9;
  color: #56744f;
  font-family: var(--serif);
  font-style: normal;
}

.erp-side-nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.45rem;
  border-radius: 3px;
  color: #697067;
  font-size: 0.53rem;
}

.erp-side-nav-item b {
  width: 15px;
  color: #868e83;
  font-size: 0.7rem;
  font-weight: 500;
  text-align: center;
}

.erp-side-nav-item.active {
  background: #edf2e9;
  color: #465e41;
  font-weight: 600;
}

.erp-area-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-content: center;
  gap: 0.65rem;
  padding: 1rem;
}

.erp-area-cards article {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.8rem;
  border: 1px solid #e8ebe5;
  border-radius: 3px;
}

.erp-area-icon {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  margin-bottom: 0.8rem;
  border-radius: 4px;
  background: #f1f4ee;
  color: #60785a;
  font-size: 0.82rem;
}

.erp-area-cards small {
  color: #899087;
  font-family: var(--mono);
  font-size: 0.4rem;
  letter-spacing: 0.04em;
}

.erp-area-cards h3 {
  margin: 0.3rem 0;
  font-size: 0.69rem;
  font-weight: 600;
}

.erp-area-cards p {
  flex: 1;
  margin: 0 0 0.8rem;
  color: #747b73;
  font-size: 0.49rem;
  line-height: 1.6;
}

.erp-area-link {
  color: #60785a;
  font-size: 0.47rem;
  font-weight: 600;
}

.erp-area-link b {
  margin-left: 0.2rem;
}

.erp-history-visual {
  background: #fff;
}

.erp-history-visual .erp-screen-toolbar > span:last-child b {
  margin-left: 0.3rem;
}

.erp-history-alert {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.85rem;
  padding: 0.65rem;
  border: 1px solid #e1eadc;
  border-radius: 3px;
  background: #f5f8f2;
}

.erp-history-alert > span {
  display: grid;
  width: 22px;
  height: 22px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: #e5efe0;
  color: #5e7957;
  font-size: 0.65rem;
}

.erp-history-alert div {
  display: grid;
  flex: 1;
  gap: 0.15rem;
}

.erp-history-alert b {
  font-size: 0.54rem;
}

.erp-history-alert small {
  color: #737971;
  font-size: 0.46rem;
}

.erp-history-alert button {
  padding: 0.42rem 0.55rem;
  border: 0;
  border-radius: 3px;
  background: #60785a;
  color: white;
  font: inherit;
  font-size: 0.46rem;
}

.erp-history-table {
  overflow-x: auto;
}

.erp-history-row {
  display: grid;
  grid-template-columns: 1.15fr 1.15fr 0.8fr 0.7fr;
  align-items: center;
  gap: 0.55rem;
  min-width: 560px;
  padding: 0.7rem 0.85rem;
  border-top: 1px solid #edf0ec;
  color: #697067;
  font-size: 0.49rem;
}

.erp-history-row b {
  overflow: hidden;
  color: #424840;
  font-size: 0.49rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.erp-history-row.erp-history-labels {
  padding-block: 0.55rem;
  background: #f9faf8;
  color: #858b82;
  font-size: 0.44rem;
}

.erp-status-success,
.erp-status-error {
  white-space: nowrap;
}

.erp-status-success {
  color: #5b7955;
}

.erp-status-error {
  color: #a75e4c;
}

.erp-delivery-note {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.55rem;
  margin: 0.75rem 0.85rem 0.85rem;
  padding: 0.65rem;
  border: 1px solid #f0ded7;
  border-radius: 3px;
  background: #fcf7f5;
  color: #865343;
  font-size: 0.47rem;
}

.erp-delivery-note b {
  font-size: 0.49rem;
}

.erp-delivery-note a {
  color: #985b49;
  font-weight: 600;
  white-space: nowrap;
}

.erp-history-visual figcaption {
  border-top: 1px solid #edf0ec;
  background: #f8f9f7;
}

.erp-tradeoff-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.erp-tradeoff-grid article {
  padding: 1.1rem;
  border: 1px solid var(--line);
  background: #fff;
}

.erp-tradeoff-grid article:last-child {
  grid-column: 1 / -1;
}

.erp-tradeoff-grid .erp-eyebrow {
  margin-bottom: 0.55rem;
}

.erp-tradeoff-grid h3 {
  margin: 0 0 0.65rem;
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.erp-tradeoff-grid p:last-child {
  margin-bottom: 0;
  font-size: 0.75rem;
}

.erp-outcome {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 2rem 7%;
  padding: 3rem 2rem;
  border: 1px solid #e4e6dc;
  background:
    radial-gradient(ellipse at 90% 0%, rgb(230 237 225 / 70%), transparent 48%),
    #f4f4ed;
}

.erp-outcome h2 {
  max-width: 400px;
}

.erp-outcome > div:last-child {
  align-self: center;
  max-width: 680px;
}

.erp-outcome > div:last-child > p:last-child {
  margin-bottom: 0;
}

.erp-reflection {
  margin-top: 3.5rem;
}

.erp-reflection-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem 1rem;
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
}

.erp-reflection-list li {
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--line);
  color: #464c44;
  font-size: 0.75rem;
}

.erp-reflection-list span {
  color: #899087;
  font-family: var(--mono);
  font-size: 0.49rem;
}

.erp-footer {
  min-height: 90px;
  margin-top: 1rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.erp-footer > a:not(.erp-wordmark) {
  font-size: 0.75rem;
}

.erp-footer > a:not(.erp-wordmark) span {
  margin-left: 0.25rem;
  color: var(--accent);
}

.erp-footer > span {
  font-family: var(--mono);
  font-size: 0.55rem;
}

.erp-page a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (max-width: 900px) {
  .erp-page {
    width: min(100% - 64px, 760px);
  }

  .erp-hero {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 3rem 5%;
  }

  .erp-hero h1 {
    font-size: clamp(3rem, 6.4vw, 4.3rem);
  }

  .erp-story-section {
    grid-template-columns: minmax(150px, 0.5fr) minmax(0, 1.5fr);
    gap: 1.5rem 5%;
  }

  .erp-area-layout {
    grid-template-columns: 125px 1fr;
  }

  .erp-area-cards {
    gap: 0.45rem;
    padding: 0.7rem;
  }

  .erp-area-cards article {
    padding: 0.6rem;
  }
}

@media (max-width: 650px) {
  .erp-page {
    width: min(100% - 36px, 480px);
  }

  .erp-header {
    height: 74px;
  }

  .erp-header nav {
    gap: 1.2rem;
    font-size: 0.73rem;
  }

  .erp-contact-link {
    padding-block: 0.55rem;
  }

  .erp-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-block: 1.5rem 3.25rem;
  }

  .erp-back-link {
    margin-bottom: 0;
  }

  .erp-hero-copy {
    padding-block: 0.2rem;
  }

  .erp-hero h1 {
    max-width: 420px;
    font-size: clamp(2.8rem, 12vw, 4.4rem);
  }

  .erp-hero-visual {
    padding: 0.7rem;
  }

  .erp-window-content {
    padding: 0.8rem;
  }

  .erp-story-section {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding-block: 2.5rem;
  }

  .erp-section-heading h2,
  .erp-outcome h2 {
    max-width: 420px;
    font-size: clamp(1.85rem, 8vw, 2.5rem);
  }

  .erp-preview-visual {
    grid-template-columns: 1fr;
  }

  .erp-preview-config {
    border-right: 0;
    border-bottom: 1px solid #e3e7e1;
  }

  .erp-preview-setting {
    grid-template-columns: 100px 1fr;
    align-items: center;
  }

  .erp-area-layout {
    grid-template-columns: 1fr;
  }

  .erp-side-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.25rem;
    padding: 0.6rem;
    border-right: 0;
    border-bottom: 1px solid #edf0ec;
  }

  .erp-side-nav-brand {
    grid-column: 1 / -1;
    margin-bottom: 0.35rem;
  }

  .erp-side-nav-item {
    justify-content: center;
    gap: 0.3rem;
    padding: 0.5rem 0.25rem;
    font-size: 0.47rem;
  }

  .erp-area-cards {
    grid-template-columns: 1fr;
    padding: 0.8rem;
  }

  .erp-area-cards article {
    display: grid;
    grid-template-columns: 30px 1fr auto;
    align-items: center;
    gap: 0 0.6rem;
  }

  .erp-area-icon {
    grid-row: span 3;
    margin: 0;
  }

  .erp-area-cards small,
  .erp-area-cards h3,
  .erp-area-cards p {
    grid-column: 2;
    margin: 0;
  }

  .erp-area-link {
    grid-column: 3;
    grid-row: 1 / span 3;
  }

  .erp-area-cards p {
    margin-top: 0.2rem;
  }

  .erp-tradeoff-grid {
    grid-template-columns: 1fr;
  }

  .erp-tradeoff-grid article:last-child {
    grid-column: auto;
  }

  .erp-outcome {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.5rem;
  }

  .erp-reflection {
    margin-top: 2.5rem;
  }

  .erp-reflection-list {
    grid-template-columns: 1fr;
  }

  .erp-footer {
    min-height: 80px;
  }

  .erp-footer > span {
    display: none;
  }
}

@media (max-width: 380px) {
  .erp-config-preview {
    grid-template-columns: 1fr;
  }

  .erp-mapping-row {
    min-height: 25px;
  }

  .erp-delivery-note {
    grid-template-columns: auto 1fr;
  }

  .erp-delivery-note a {
    grid-column: 2;
  }
}
</style>
