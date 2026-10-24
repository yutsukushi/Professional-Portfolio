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
const switchedSupplierSkus = ref([])
const selectedSuppliers = ref({})
const activeSupplierPopoverSku = ref(null)
const pinnedSupplierPopoverSku = ref(null)
const activeSupplierDropdownSku = ref(null)
const supplierPopoverPosition = ref({})
const supplierTriggerElements = new Map()
let supplierPopoverCloseTimeout
const availableSuppliers = [...new Set([
  ...procurementRows.map((row) => row.supplier),
  'Beacon Supply',
])]
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

function displayedRowTotal(row) {
  const total = row.unitCost * row.orderedQty
  return total - (switchedSupplierSkus.value.includes(row.sku) ? 49.72 : 0)
}

function supplierName(row) {
  if (switchedSupplierSkus.value.includes(row.sku)) {
    return 'Beacon Supply'
  }
  return selectedSuppliers.value[row.sku] || row.supplier
}

function switchSupplier(sku) {
  if (!switchedSupplierSkus.value.includes(sku)) {
    switchedSupplierSkus.value = [...switchedSupplierSkus.value, sku]
  }
  activeSupplierDropdownSku.value = null
  closeSupplierPopover(sku)
}

function selectSupplier(row, supplier) {
  if (supplier === 'Beacon Supply') {
    switchSupplier(row.sku)
    return
  }

  switchedSupplierSkus.value = switchedSupplierSkus.value.filter((sku) => sku !== row.sku)
  selectedSuppliers.value = { ...selectedSuppliers.value, [row.sku]: supplier }
  activeSupplierDropdownSku.value = null
}

function setSupplierTriggerElement(sku, element) {
  if (element) {
    supplierTriggerElements.set(sku, element)
  } else {
    supplierTriggerElements.delete(sku)
  }
}

function positionSupplierPopover(trigger) {
  const bounds = trigger.getBoundingClientRect()
  const popoverWidth = Math.min(240, window.innerWidth - 24)
  const estimatedPopoverHeight = 150
  const popoverGap = 4
  const viewportPadding = 12
  const maxLeft = window.innerWidth - popoverWidth - viewportPadding
  const left = Math.max(
    viewportPadding,
    Math.min(bounds.left, maxLeft),
  )
  const rightAlignedLeft = Math.max(
    viewportPadding,
    Math.min(bounds.right - popoverWidth, maxLeft),
  )
  const alignRight = bounds.left + popoverWidth > window.innerWidth - viewportPadding
  const hasRoomBelow =
    bounds.bottom + popoverGap + estimatedPopoverHeight <= window.innerHeight - viewportPadding
  const top = hasRoomBelow
    ? bounds.bottom + popoverGap
    : Math.max(viewportPadding, bounds.top - estimatedPopoverHeight - popoverGap)

  supplierPopoverPosition.value = {
    left: `${(alignRight ? rightAlignedLeft : left) + window.scrollX}px`,
    top: `${top + window.scrollY}px`,
  }
}

function showSupplierPopover(sku, trigger) {
  window.clearTimeout(supplierPopoverCloseTimeout)
  activeSupplierPopoverSku.value = sku
  positionSupplierPopover(trigger)
}

function scheduleSupplierPopoverClose(sku) {
  window.clearTimeout(supplierPopoverCloseTimeout)
  supplierPopoverCloseTimeout = window.setTimeout(() => {
    if (pinnedSupplierPopoverSku.value !== sku) {
      closeSupplierPopover(sku)
    }
  }, 140)
}

function closeSupplierPopover(sku = activeSupplierPopoverSku.value) {
  if (activeSupplierPopoverSku.value === sku) {
    activeSupplierPopoverSku.value = null
    pinnedSupplierPopoverSku.value = null
  }
  window.clearTimeout(supplierPopoverCloseTimeout)
}

function toggleSupplierPopover(sku, trigger) {
  if (pinnedSupplierPopoverSku.value === sku) {
    closeSupplierPopover(sku)
    return
  }
  pinnedSupplierPopoverSku.value = sku
  showSupplierPopover(sku, trigger)
}

function closeSupplierPopoverOutside(event) {
  if (!event.target.closest('.supplier-cell-content, .supplier-save-pill, .supplier-popover')) {
    closeSupplierPopover()
    activeSupplierDropdownSku.value = null
  }
}

function repositionActiveSupplierPopover() {
  const sku = activeSupplierPopoverSku.value
  const trigger = sku && supplierTriggerElements.get(sku)
  if (trigger) {
    positionSupplierPopover(trigger)
  }
}

function toggleAllRows(event) {
  if (event.target.checked) {
    selectedSkus.value = procurementRows.map((row) => row.sku)
  } else {
    selectedSkus.value = []
  }
}

function openDropdown(sku) {
  if (activeSupplierDropdownSku.value === sku) {
    activeSupplierDropdownSku.value = null
  } else {
    activeSupplierDropdownSku.value = sku
    closeSupplierPopover(sku)
  }
}
</script>

<template>
  <div
    class="case-study"
    @click.window="closeSupplierPopoverOutside"
    @resize.passive.window="repositionActiveSupplierPopover"
    @scroll.passive.window="repositionActiveSupplierPopover"
  >
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
        <div class="procurement-table-scroll" tabindex="0" role="region" aria-label="Material schedule table, scroll horizontally to see more columns" @scroll.passive="repositionActiveSupplierPopover">
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
                <td class="supplier-cell">
                  <div class="supplier-cell-content"
                    @click="openDropdown(row.sku)">
                    <button
                      class="supplier-name"
                      type="button"
                      aria-haspopup="listbox"
                      :aria-expanded="activeSupplierDropdownSku === row.sku"
                      :aria-controls="`supplier-options-${row.sku}`"
                      @click.stop="openDropdown(row.sku)"
                    >
                      {{ supplierName(row) }}
                    </button>
                    <button
                      v-show="!switchedSupplierSkus.includes(row.sku)"
                      :ref="(element) => setSupplierTriggerElement(row.sku, element)"
                      class="supplier-save-pill"
                      type="button"
                      aria-haspopup="dialog"
                      :aria-expanded="activeSupplierPopoverSku === row.sku"
                      @mouseenter="showSupplierPopover(row.sku, $event.currentTarget)"
                      @mouseleave="scheduleSupplierPopoverClose(row.sku)"
                      @focus="showSupplierPopover(row.sku, $event.currentTarget)"
                      @blur="scheduleSupplierPopoverClose(row.sku)"
                      @click.stop="toggleSupplierPopover(row.sku, $event.currentTarget)"
                      @keydown.esc="closeSupplierPopover(row.sku)"
                    >Switch & save $49.72
                      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.25" />
                        <path d="M8 7.25v3.5M8 5.25h.01" />
                      </svg>
                    </button>
                    <div
                      v-if="activeSupplierDropdownSku === row.sku"
                      :id="`supplier-options-${row.sku}`"
                      class="supplier-options"
                      role="listbox"
                      :aria-label="`Available suppliers for ${row.sku}`"
                    >
                      <button
                        v-for="supplier in availableSuppliers"
                        :key="supplier"
                        class="supplier-option"
                        type="button"
                        role="option"
                        :aria-selected="supplierName(row) === supplier"
                        @click.stop="selectSupplier(row, supplier)"
                      >
                        <div class="supplier-option-layout">
                          <span class="supplier-option-initial">S</span>
                          <!-- <div class="supplier-option-details"> -->
                            <div class="supplier-option-description">
                              <div class="supplier-option-heading">
                                <span><b>{{ supplier }}</b></span>
                                <span class="supplier-option-badge supplier-option-badge--price"><b>Lowest price</b></span>
                                <span class="supplier-option-badge supplier-option-badge--configurable"><b>Configurable</b></span>
                              </div>
                              <div class="supplier-option-meta">
                                <div class="supplier-option-stock">
                                  <span class="supplier-option-stock-dot" aria-hidden="true"></span>
                                  <span>3 available</span>
                                </div>
                                <span class="supplier-option-separator" aria-hidden="true"></span>
                                <button
                                  class="supplier-alert-trigger supplier-option-alert"
                                  type="button"
                                  aria-label="One alert from current supplier"
                                >
                                  1 product alert
                                  <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6.25" />
                                    <path d="M8 7.25v3.5M8 5.25h.01" />
                                  </svg>
                                  <span class="supplier-alert-tooltip" role="tooltip">
                                    ***LEADTIME: 2 TO 3 WEEKS***
                                  </span>
                                </button>
                              </div>
                            </div>
                          <!-- </div> -->
                          <div class="supplier-option-price">
                              <span><b>$999.99</b></span>
                              <span class="supplier-option-savings">Save $49.72</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <Teleport to="body">
                    <div
                      v-if="activeSupplierPopoverSku === row.sku"
                      class="supplier-popover"
                      :style="supplierPopoverPosition"
                      role="dialog"
                      :aria-label="`Supplier comparison for ${row.sku}`"
                      @mouseenter="showSupplierPopover(row.sku, supplierTriggerElements.get(row.sku))"
                      @mouseleave="scheduleSupplierPopoverClose(row.sku)"
                      @focusin="showSupplierPopover(row.sku, supplierTriggerElements.get(row.sku))"
                      @focusout="scheduleSupplierPopoverClose(row.sku)"
                      @keydown.esc="closeSupplierPopover(row.sku)"
                    >
                      <div class="supplier-popover-header">
                        <p class="supplier-popover-title"><b>Save $49.72 with Beacon Supply</b>
                        </p>
                      </div>
                      <div class="supplier-popover-content">
                        <div class="supplier-comparison">
                          <span></span>
                          <span>{{ row.supplier }}</span>
                          <strong>Beacon Supply</strong>
                          <span>Price</span>
                          <span>{{ formatCurrency(row.unitCost * row.orderedQty) }}</span>
                          <strong>{{ formatCurrency(row.unitCost * row.orderedQty - 49.72) }}</strong>
                          <span>Stock</span>
                          <span>12 available</span>
                          <span>4 available</span>
                          <span>Alerts</span>
                          <button
                            class="supplier-alert-trigger"
                            type="button"
                            aria-label="One alert from current supplier"
                          >
                            1 alert
                            <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="6.25" />
                              <path d="M8 7.25v3.5M8 5.25h.01" />
                            </svg>
                            <span class="supplier-alert-tooltip" role="tooltip">
                              ***LEADTIME: 2 TO 3 WEEKS***
                            </span>
                          </button>
                          <button
                            class="supplier-alert-trigger supplier-alert-beacon"
                            type="button"
                            aria-label="Two alerts from Beacon Supply"
                          >
                            2 alerts
                            <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                              <circle cx="8" cy="8" r="6.25" />
                              <path d="M8 7.25v3.5M8 5.25h.01" />
                            </svg>
                            <span class="supplier-alert-tooltip" role="tooltip">
                              ***LEADTIME: 4 TO 6 WEEKS***
                            </span>
                          </button>
                        </div>
                        <button
                          class="supplier-switch-button"
                          type="button"
                          :disabled="switchedSupplierSkus.includes(row.sku)"
                          @click="switchSupplier(row.sku)"
                        >
                          {{ switchedSupplierSkus.includes(row.sku) ? 'Beacon Supply selected' : 'Switch to Beacon Supply' }}
                        </button>
                      </div>
                    </div>
                  </Teleport>
                </td>
                <td>{{ row.plannedQty }}</td>
                <td>{{ row.orderedQty }}</td>
                <td>{{ formatCurrency(displayedRowTotal(row) / row.orderedQty) }}</td>
                <td class="total-cell">{{ formatCurrency(displayedRowTotal(row)) }}</td>
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
  border: 1px solid #E2E3E7;
  background: #fff;
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
  min-width: 1340px;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  font-size: 0.72rem;
}

.procurement-table .select-col { width: 42px; }
.procurement-table .sku-col { width: 135px; }
.procurement-table .brand-col { width: 120px; }
.procurement-table .supplier-col { width: 16rem; }
.procurement-table .quantity-col { width: 112px; }
.procurement-table .cost-col { width: 125px; }
.procurement-table .phase-col { width: 112px; }
.procurement-table .date-col { width: 130px; }

.procurement-table th,
.procurement-table td {
  height: 28px;
  padding: 0.2rem 0.6rem;
  overflow: hidden;
  border-right: 1px solid #E2E3E7;
  border-bottom: 1px solid #E2E3E7;
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
  background: #fff;
  color: #282a32;
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.2;
}

.procurement-table tbody td,
.procurement-table tbody th {
  color: #282a32;
  font-weight: 400;
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
  display: inline-grid;
  width: 15px;
  height: 15px;
  margin: 0;
  place-content: center;
  appearance: none;
  border: 1px solid #E2E3E7;
  border-radius: 3px;
  background: #fff;
  vertical-align: middle;
}

.procurement-table input[type='checkbox']::before {
  width: 7px;
  height: 4px;
  border: solid #282a32;
  border-width: 0 0 2px 2px;
  content: '';
  transform: rotate(-45deg) scale(0);
}

.procurement-table input[type='checkbox']:checked::before {
  transform: rotate(-45deg) scale(1);
}

.procurement-table input[type='checkbox']:focus-visible {
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.procurement-table .sku-cell,
.procurement-table .total-cell {
  font-weight: 600;
}

.procurement-table .supplier-cell {
  position: relative;
  vertical-align: middle;
  overflow: visible;
}

.supplier-cell-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.45rem;
  min-width: 0;
}

.procurement-table .supplier-cell:hover {
  background-color:#ebf2ff;
  cursor: pointer;
}

.supplier-name {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 0.3rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
}

.supplier-name svg {
  width: 0.65rem;
  height: 0.65rem;
  flex: 0 0 auto;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.supplier-name:focus-visible,
.supplier-option:focus-visible {
  border-radius: 3px;
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.supplier-options {
  position: absolute;
  z-index: 10;
  top: calc(100% + 0.35rem);
  left: 0;
  display: grid;
  min-width: 100%;
  padding: 0.25rem;
  border: 1px solid #dce2dd;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 8px 20px rgb(21 48 32 / 16%);
}

.supplier-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.4rem 0.5rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
  color: #282a32;
  cursor: pointer;
  font: inherit;
  text-align: left;
  white-space: nowrap;
}

.supplier-option:hover,
.supplier-option[aria-selected='true'] {
  background: #f0f4ef;
}

.supplier-option-layout {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-items:flex-start;
  gap: 0.75rem;
}

.supplier-option-details {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.5rem;
}

.supplier-option-initial {
  display: grid;
  width: 1.75rem;
  height: 1.75rem;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 3px;
  background: #e8ebe5;
  color: #4c5259;
  font-weight: 500;
}

.supplier-option-description {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 0.25rem;
}

.supplier-option-heading,
.supplier-option-meta {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.supplier-option-heading {
  flex-wrap: wrap;
}

.supplier-option-badge {
  padding: 0.05rem 0.15rem;
  border-radius: 3px;
  font-size: 0.5rem;
  font-weight: 600;
}

.supplier-option-badge--price {
  background: #e9f4e7;
  color: #286238;
}

.supplier-option-badge--configurable {
  background: #e7f0f5;
  color: #315d78;
}

.supplier-option-stock {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #286238;
  font-size: 0.625rem;
}

.supplier-option-stock-dot {
  width: 5px;
  height: 5px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #278148;
}

.supplier-option-separator {
  width: 2.5px;
  height: 2.5px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #c8ccc5;
}

button .supplier-option-alert {
  color: #a95f2b;
  font-size: 0.625rem;
}

.supplier-option-price {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  text-align: right;
}

.supplier-option-savings {
  color: #286238;
  font-size: 0.625rem;
}

.supplier-save-pill {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.3rem;
  padding: 0.16rem 0.4rem;
  border: 1px solid #ead8b9;
  border-radius: 999px;
  background: transparent;
  color: #a95f2b;
  cursor: pointer;
  font-size: 0.6rem;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.2;
  transition: background-color 140ms ease, border-color 140ms ease;
  height: 1rem;
  background-color: #fff;
}

.supplier-save-pill:hover,
.supplier-save-pill:focus-visible,
.supplier-save-pill[aria-expanded='true'] {
  border-color: #ead8b9;
  background: #fbf1dd;
}

.supplier-popover {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: min(240px, calc(100vw - 24px));
  border: 1px solid #dce2dd;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 12px 32px rgb(21 48 32 / 20%);
  color: #4c5259;
  white-space: normal;
}

.supplier-popover-header {
  padding: 7px 10px;
  border-radius: 8px 8px 0 0;
  background: #fbf1dd;
}

.supplier-popover-title {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin: 0;
  color: #a95f2b;
  font-size: 0.6rem;
  font-weight: 500;
}

.supplier-popover-content {
  padding: 9px 10px 10px;
}

.supplier-comparison {
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr;
  align-items: center;
  gap: 0.28rem 0.3rem;
  font-size: 0.58rem;
}

.supplier-comparison > :nth-child(3n + 2) {
  color: #747d84;
  text-align: right;
}

.supplier-comparison > :nth-child(3n) {
  text-align: right;
}

.supplier-comparison strong {
  color: #4c5259;
  font-weight: 600;
}

.supplier-comparison > :nth-child(6) {
  color: #247847;
  font-weight: 600;
}

.supplier-alert-trigger {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-self: end;
  gap: 0.15rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: help;
  font: inherit;
  line-height: 1.35;
  white-space: nowrap;
}

.supplier-alert-beacon {
  color: #b56a39;
}

.supplier-alert-trigger:focus-visible {
  border-radius: 2px;
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.supplier-alert-tooltip {
  position: absolute;
  z-index: 2;
  right: auto;
  bottom: calc(100% + 5px);
  left: 0;
  box-sizing: border-box;
  display: grid;
  width: max-content;
  max-width: min(130px, calc(100vw - 48px));
  gap: 0.25rem;
  padding: 0.45rem 0.55rem;
  border: 1px solid #dce2dd;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgb(21 48 32 / 14%);
  color: #4c5259;
  font-size: 0.58rem;
  font-weight: 400;
  line-height: 1.4;
  overflow-wrap: anywhere;
  opacity: 0;
  pointer-events: none;
  white-space: normal;
  text-align: left;
  visibility: hidden;
  background-color: #c76b25;
  color: #fff;
}

.supplier-alert-beacon .supplier-alert-tooltip {
  top: calc(100% + 5px);
  right: 0;
  bottom: auto;
  left: auto;
}

.supplier-alert-trigger:hover .supplier-alert-tooltip,
.supplier-alert-trigger:focus-visible .supplier-alert-tooltip {
  opacity: 1;
  visibility: visible;
}

.supplier-info-icon,
.supplier-save-pill svg {
  display: block;
  flex: 0 0 auto;
  width: 10px;
  height: 10px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.supplier-switch-button {
  width: 100%;
  margin-top: 0.55rem;
  padding: 0.45rem 0.55rem;
  border: 0;
  border-radius: 6px;
  background: #177541;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 0.65rem;
  font-weight: 600;
}

.supplier-switch-button:focus-visible {
  outline: 2px solid #7550c8;
  outline-offset: 3px;
}

.supplier-switch-button:disabled {
  background: #e8f1eb;
  color: #247847;
  cursor: default;
}

.supplier-save-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #c48742;
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
  background: #f1f1f3;
  color: #282a32;
}

.phase-pill.phase-fitout {
  background: #f1f1f3;
  color: #282a32;
}

.phase-pill.phase-finishes {
  background: #f1f1f3;
  color: #282a32;
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
