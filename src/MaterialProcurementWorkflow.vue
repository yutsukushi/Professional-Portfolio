<script setup>
import { computed, ref } from 'vue'

const procurementRows = [
  {
    sku: 'MAT-1001',
    brand: 'Acme',
    supplier: 'Central Supply',
    plannedQty: 24,
    orderedQty: 20,
    unitCost: 18.5,
    phase: 'Rough-in',
    dateNeeded: '11/02/26',
  },
  {
    sku: 'MAT-1002',
    brand: 'Northline',
    supplier: 'Metro Materials',
    plannedQty: 12,
    orderedQty: 10,
    unitCost: 24,
    phase: 'Fit-out',
    dateNeeded: '11/04/26',
  },
  {
    sku: 'MAT-1003',
    brand: 'Standard',
    supplier: 'Central Supply',
    plannedQty: 40,
    orderedQty: 36,
    unitCost: 32.5,
    phase: 'Rough-in',
    dateNeeded: '11/06/26',
  },
  {
    sku: 'MAT-1004',
    brand: 'Apex',
    supplier: 'General Wholesale',
    plannedQty: 18,
    orderedQty: 18,
    unitCost: 45,
    phase: 'Fit-out',
    dateNeeded: '11/09/26',
  },
  {
    sku: 'MAT-1005',
    brand: 'Acme',
    supplier: 'Metro Materials',
    plannedQty: 30,
    orderedQty: 24,
    unitCost: 7.25,
    phase: 'Finishes',
    dateNeeded: '11/12/26',
  },
]

const selectedSkus = ref([])
const allRowsSelected = computed(
  () =>
    procurementRows.length > 0 &&
    procurementRows.every((row) => selectedSkus.value.includes(row.sku)),
)

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function formatCurrency(amount) {
  return currencyFormatter.format(amount)
}

function toggleAllRows(event) {
  if (event.target.checked) {
    selectedSkus.value = procurementRows.map((row) => row.sku)
  } else {
    selectedSkus.value = []
  }
}

</script>

<template>
  <div class="case-study">
    <header class="case-header">
      <a class="case-wordmark" href="./index.html" aria-label="Yukie Kushibiki, home">YK<span>.</span></a>
      <nav aria-label="Case study navigation">
        <a href="./index.html#work">Selected work</a>
        <a class="case-nav-contact" href="./index.html#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>

    <main id="main">
      <section class="procurement-table-section" aria-labelledby="procurement-table-title">
        <div class="table-heading">
          <div>
            <p class="case-eyebrow"><span class="case-status-dot"></span> Partial demo · Project hub</p>
            <h2 id="procurement-table-title">Material schedule</h2>
            <p class="table-intro">One familiar spreadsheet view for the details that keep a project moving.</p>
          </div>
          <span class="table-project-label">HARBOR HOUSE <strong>· 04</strong></span>
        </div>

        <div class="table-scroll-hint"><span aria-hidden="true">↔</span> Scroll to see all material details</div>
        <div class="procurement-table-scroll" tabindex="0" role="region" aria-label="Material schedule table, scroll horizontally to see more columns">
          <table class="procurement-table" aria-label="Harbor House material schedule">
            <colgroup>
              <col class="select-col" />
              <col class="sku-col" />
              <col class="brand-col" />
              <col class="supplier-col" />
              <col class="quantity-col" />
              <col class="quantity-col" />
              <col class="cost-col" />
              <col class="cost-col" />
              <col class="phase-col" />
              <col class="date-col" />
            </colgroup>
            <thead>
              <tr>
                <th class="select-cell">
                  <input
                    type="checkbox"
                    aria-label="Select all products"
                    :checked="allRowsSelected"
                    @change="toggleAllRows"
                  />
                </th>
                <th>SKU</th>
                <th>Brand</th>
                <th>Supplier</th>
                <th>Planned<br />Qty</th>
                <th>Ordered<br />Qty</th>
                <th>Unit<br />Cost</th>
                <th>Total<br />Cost</th>
                <th>Phase</th>
                <th>Date<br />Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in procurementRows" :key="row.sku" :class="{ 'is-selected': selectedSkus.includes(row.sku) }">
                <td class="select-cell">
                  <input
                    v-model="selectedSkus"
                    type="checkbox"
                    :value="row.sku"
                    :aria-label="`Select ${row.sku}`"
                  />
                </td>
                <th scope="row" class="sku-cell">{{ row.sku }}</th>
                <td>{{ row.brand }}</td>
                <td>{{ row.supplier }}</td>
                <td>{{ row.plannedQty }}</td>
                <td>{{ row.orderedQty }}</td>
                <td>{{ formatCurrency(row.unitCost) }}</td>
                <td class="total-cell">{{ formatCurrency(row.unitCost * row.orderedQty) }}</td>
                <td><span class="phase-pill" :class="`phase-${row.phase.toLowerCase().replace('-', '')}`">{{ row.phase }}</span></td>
                <td>{{ row.dateNeeded }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <span><span class="table-footer-dot"></span> Project material list</span>
          <span>Costs shown in USD · Sample data</span>
        </div>
      </section>

      <section class="case-hero" aria-labelledby="case-title">
        <a class="back-link" href="./index.html#work">
          <span aria-hidden="true">←</span> Back to selected work
        </a>
        <div class="case-title-block">
          <p class="case-eyebrow"><span class="case-status-dot"></span> Case study in progress</p>
          <h1 id="case-title">Material Procurement <em>Workflow</em></h1>
          <p class="case-intro">
            A working concept for making material requests easier to prepare,
            compare, and move toward approval.
          </p>
          <div class="case-tags" aria-label="Project disciplines">
            <span>Product design</span>
            <span>Workflow design</span>
            <span>Interactive concept</span>
          </div>
        </div>
        <div class="case-hero-art" aria-hidden="true">
          <div class="material-swatch swatch-oak"></div>
          <div class="material-swatch swatch-stone"></div>
          <div class="material-swatch swatch-felt"></div>
          <div class="hero-art-note"><span>PROJECT MATERIALS</span><strong>Planned with care.</strong></div>
          <span class="hero-art-index">01 / 03</span>
        </div>
      </section>

      <section class="case-overview" aria-label="Case study overview">
        <div class="overview-label">THE OPPORTUNITY</div>
        <p>
          Procurement can involve several people, details, and handoffs. This
          concept explores how one clear request can keep material, supplier,
          quantity, and delivery information together as a decision moves
          forward.
        </p>
        <div class="overview-meta">
          <div><span>ROLE</span><strong>Product design &amp; prototyping</strong></div>
          <div><span>STATUS</span><strong>Exploratory concept</strong></div>
          <div><span>FOCUS</span><strong>Request to approval</strong></div>
        </div>
      </section>

      <section class="case-next-steps" aria-labelledby="next-steps-title">
        <div>
          <p class="case-eyebrow">Still taking shape</p>
          <h2 id="next-steps-title">More to <em>explore.</em></h2>
        </div>
        <p>
          This case study is an early concept. Next, I’ll develop the workflow
          across roles and edge cases, then document the research, design
          decisions, and what I learn through testing.
        </p>
        <a class="back-link" href="./index.html#work">Explore more selected work <span aria-hidden="true">↗</span></a>
      </section>
    </main>

    <footer class="case-footer">
      <a class="case-wordmark" href="./index.html" aria-label="Yukie Kushibiki, home">YK<span>.</span></a>
      <p>Made with care, wherever I am.</p>
      <span>© 2026 Yukie Kushibiki</span>
    </footer>
  </div>
</template>

<style scoped>
.case-study {
  width: min(100% - 96px, 1240px);
  margin-inline: auto;
  color: var(--ink);
}

.case-header,
.case-header nav,
.case-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.case-header {
  height: 92px;
  border-bottom: 1px solid var(--line);
}

.case-wordmark {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.case-wordmark span,
.case-nav-contact span {
  color: var(--accent);
}

.case-header nav {
  gap: clamp(1.5rem, 4vw, 3.5rem);
  font-size: 0.83rem;
}

.case-header nav a:hover,
.back-link:hover {
  color: var(--accent);
}

.case-nav-contact {
  padding-block: 0.7rem;
  border-bottom: 1px solid var(--accent);
}

.procurement-table-section {
  padding-block: 2.6rem 3.5rem;
}

.table-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.6rem;
}

.table-heading .case-eyebrow {
  margin-bottom: 0.7rem;
}

.table-heading h2 {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.035em;
}

.table-intro {
  margin: 0.65rem 0 0;
  color: #606057;
  font-size: 0.8rem;
  line-height: 1.65;
}

.table-project-label {
  padding-bottom: 0.2rem;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.table-project-label strong {
  color: var(--ink);
  font-weight: 500;
}

.table-scroll-hint {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid #e0e3dc;
  border-bottom: 0;
  background: #f7f8f5;
  color: #6d736a;
  font-family: var(--mono);
  font-size: 0.52rem;
}

.table-scroll-hint span {
  color: var(--accent);
  font-size: 0.8rem;
}

.procurement-table-scroll {
  max-width: 100%;
  overflow: auto;
  border: 1px solid #e0e3dc;
  background: #252823;
  overscroll-behavior-inline: contain;
  scrollbar-color: #9aa295 #e8ebe5;
  scrollbar-width: thin;
}

.procurement-table-scroll:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.procurement-table-scroll::-webkit-scrollbar {
  height: 12px;
}

.procurement-table-scroll::-webkit-scrollbar-track {
  background: #e8ebe5;
}

.procurement-table-scroll::-webkit-scrollbar-thumb {
  border: 3px solid #e8ebe5;
  border-radius: 99px;
  background: #9aa295;
}

.procurement-table {
  width: 100%;
  min-width: 1300px;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  font-size: 0.67rem;
}

.procurement-table .select-col { width: 42px; }
.procurement-table .sku-col { width: 135px; }
.procurement-table .brand-col { width: 120px; }
.procurement-table .supplier-col { width: 165px; }
.procurement-table .quantity-col { width: 112px; }
.procurement-table .cost-col { width: 125px; }
.procurement-table .phase-col { width: 112px; }
.procurement-table .date-col { width: 130px; }

.procurement-table th,
.procurement-table td {
  height: 42px;
  padding: 0.55rem 0.7rem;
  overflow: hidden;
  border-right: 1px solid #dfe3dc;
  border-bottom: 1px solid #dfe3dc;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.procurement-table tr > :last-child {
  border-right: 0;
}

.procurement-table thead th {
  position: sticky;
  z-index: 1;
  top: 0;
  height: 54px;
  background: #fbfbf8;
  color: #343831;
  font-size: 0.65rem;
  font-weight: 600;
  line-height: 1.2;
}

.procurement-table tbody td,
.procurement-table tbody th {
  background: #252823;
  color: #e1e4dd;
  font-weight: 400;
}

.procurement-table tbody tr:hover td,
.procurement-table tbody tr:hover th {
  background: #30342e;
}

.procurement-table tbody tr.is-selected td,
.procurement-table tbody tr.is-selected th {
  background: #363a33;
}

.procurement-table tbody tr:last-child td,
.procurement-table tbody tr:last-child th {
  border-bottom: 0;
}

.procurement-table .select-cell {
  padding-inline: 0.55rem;
  text-align: center;
}

.procurement-table input[type='checkbox'] {
  width: 15px;
  height: 15px;
  margin: 0;
  accent-color: #536d55;
  vertical-align: middle;
}

.procurement-table .sku-cell,
.procurement-table .total-cell {
  font-weight: 600;
}

.phase-pill {
  display: inline-block;
  padding: 0.28rem 0.42rem;
  border-radius: 2px;
  background: #f0f1ed;
  color: #343831;
  font-size: 0.58rem;
  font-weight: 600;
}

.phase-pill.phase-roughin {
  background: #eee9dd;
  color: #70603e;
}

.phase-pill.phase-fitout {
  background: #e5ece5;
  color: #536c55;
}

.phase-pill.phase-finishes {
  background: #e9e5ed;
  color: #6d587d;
}

.table-footer {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-inline: 0.7rem;
  border: 1px solid #e0e3dc;
  border-top: 0;
  background: #fff;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.51rem;
}

.table-footer > span:first-child {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.table-footer-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7a9b77;
}

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

.case-eyebrow,
.overview-label,
.overview-meta span,
.hero-art-index {
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
.case-next-steps h2 em {
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

.case-hero-art {
  position: relative;
  display: flex;
  min-height: 390px;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  overflow: hidden;
  background: #e8ece5;
}

.material-swatch {
  width: 26%;
  height: 210px;
  box-shadow: 0 16px 30px rgb(32 39 32 / 12%);
  transform: rotate(-7deg);
}

.swatch-oak {
  z-index: 1;
  background: repeating-linear-gradient(90deg, #b88b62 0 5px, #c79a70 5px 10px, #ae8059 10px 12px);
  transform: translateY(-16px) rotate(-9deg);
}

.swatch-stone {
  z-index: 2;
  background: linear-gradient(145deg, #d2d0c5, #aaa99e 55%, #c5c4b9);
  transform: translateY(8px) rotate(3deg);
}

.swatch-felt {
  z-index: 0;
  background: repeating-linear-gradient(0deg, #79837a 0 3px, #879188 3px 5px);
  transform: translateY(-4px) rotate(12deg);
}

.hero-art-note {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  display: grid;
  gap: 0.35rem;
}

.hero-art-note span {
  font-family: var(--mono);
  font-size: 0.52rem;
  color: #656d62;
  letter-spacing: 0.06em;
}

.hero-art-note strong {
  font-family: var(--serif);
  font-size: 1.05rem;
  font-weight: 500;
}

.hero-art-index {
  position: absolute;
  right: 1.5rem;
  bottom: 1.65rem;
  color: #656d62;
}

.case-overview {
  display: grid;
  grid-template-columns: 0.55fr 1.25fr 1fr;
  gap: 7%;
  align-items: start;
  padding-block: 2.4rem 2.7rem;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.overview-label {
  padding-top: 0.25rem;
  color: var(--muted);
}

.case-overview > p {
  margin: 0;
  color: #606057;
  font-size: 0.85rem;
  line-height: 1.8;
}

.overview-meta {
  display: grid;
  gap: 1rem;
}

.overview-meta div {
  display: grid;
  gap: 0.3rem;
}

.overview-meta span {
  color: var(--muted);
  font-size: 0.52rem;
}

.overview-meta strong {
  font-size: 0.72rem;
  font-weight: 500;
}

.case-next-steps {
  display: grid;
  grid-template-columns: 1fr 1.1fr auto;
  gap: 4rem;
  align-items: center;
  padding-block: 3.4rem;
  border-top: 1px solid var(--line);
}

.case-next-steps .case-eyebrow {
  margin-bottom: 0.7rem;
}

.case-next-steps h2 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 500;
  line-height: 1;
}

.case-next-steps > p {
  margin: 0;
  color: #606057;
  font-size: 0.78rem;
  line-height: 1.8;
}

.case-next-steps > .back-link {
  white-space: nowrap;
}

.case-footer {
  min-height: 90px;
  gap: 1.5rem;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.case-footer p {
  margin: 0;
  font-size: 0.7rem;
}

.case-footer > span {
  font-family: var(--mono);
  font-size: 0.58rem;
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

  .case-overview {
    grid-template-columns: 0.45fr 1fr;
    gap: 1.5rem 5%;
  }

  .overview-meta {
    grid-column: 2;
    grid-template-columns: repeat(3, 1fr);
  }

  .case-next-steps {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .case-next-steps > .back-link {
    grid-column: 2;
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

  .case-header {
    height: 74px;
  }

  .case-header nav {
    gap: 1.2rem;
    font-size: 0.73rem;
  }

  .case-nav-contact {
    padding-block: 0.55rem;
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

  .case-hero-art {
    min-height: 315px;
  }

  .material-swatch {
    width: 25%;
    height: 170px;
  }

  .case-overview {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-block: 1.8rem;
  }

  .overview-meta {
    grid-column: auto;
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding-top: 0.5rem;
  }

  .case-next-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-block: 2.5rem;
  }

  .case-next-steps > .back-link {
    grid-column: auto;
  }

  .case-footer {
    min-height: 80px;
  }

  .case-footer p {
    display: none;
  }
}
</style>
