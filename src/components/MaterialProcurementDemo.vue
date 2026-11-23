<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import ProductPicker from './ProductPicker.vue'

const initialProcurementRows = [
  {
    id: 'procurement-1',
    sku: 'FS-2400-2IN-BRONZE',
    productType: 'Configurable',
    brand: 'Acme',
    supplier: 'Central Supply',
    plannedQty: 24,
    orderedQty: 20,
    phase: 'Rough-in',
    dateNeeded: '11/02/26',
    offers: [
      { supplier: 'Central Supply', brand: 'Acme', productType: 'Configurable', unitCost: 18.5, stockStatus: 'in-stock', stockQuantity: 12, alerts: ['Lead time: 2–3 weeks'] },
      { supplier: 'Metro Materials', brand: 'Northline', productType: 'Flat', unitCost: 19.25, stockStatus: 'low-stock', stockQuantity: 3, alerts: [] },
      { supplier: 'General Wholesale', brand: 'Standard', productType: 'Flat', unitCost: 17.95, stockStatus: 'in-stock', stockQuantity: 28, alerts: ['Configurable finish selected'] },
      { supplier: 'Beacon Supply', brand: 'Apex', productType: 'Configurable', unitCost: 16.85, stockStatus: 'low-stock', stockQuantity: 5, alerts: ['Lead time: 4–6 weeks'] },
    ],
  },
  {
    id: 'procurement-2',
    sku: '1100-6FT-HDMI',
    productType: 'Flat',
    brand: 'Northline',
    supplier: 'Beacon Supply',
    plannedQty: 12,
    orderedQty: 10,
    phase: 'Fit-out',
    dateNeeded: '11/04/26',
    offers: [
      { supplier: 'Central Supply', brand: 'Apex', productType: 'Flat', unitCost: 26.5, stockStatus: 'backordered', stockQuantity: 0, alerts: ['Expected restock: Nov 14'] },
      { supplier: 'Metro Materials', brand: 'Northline', productType: 'Configurable', unitCost: 24, stockStatus: 'in-stock', stockQuantity: 8, alerts: ['Price valid through Oct 31'] },
      { supplier: 'General Wholesale', brand: 'Standard', productType: 'Flat', unitCost: 23.75, stockStatus: 'in-stock', stockQuantity: 16, alerts: [] },
      { supplier: 'Beacon Supply', brand: 'Acme', productType: 'Flat', unitCost: 22.9, stockStatus: 'low-stock', stockQuantity: 2, alerts: ['Only two units available', 'Freight surcharge may apply'] },
    ],
  },
  {
    id: 'procurement-3',
    sku: 'NCP-3200',
    productType: 'NCP',
    brand: 'Standard',
    supplier: 'Beacon Supply',
    plannedQty: 40,
    orderedQty: 36,
    phase: 'Rough-in',
    dateNeeded: '11/06/26',
    offers: [
      { supplier: 'Central Supply', brand: 'Standard', productType: 'Flat', unitCost: 32.5, stockStatus: 'in-stock', stockQuantity: 36, alerts: [] },
      { supplier: 'Metro Materials', brand: 'Acme', productType: 'Flat', unitCost: 35.25, stockStatus: 'out-of-stock', stockQuantity: 0, alerts: ['Item temporarily unavailable'] },
      { supplier: 'General Wholesale', brand: 'Northline', productType: 'Configurable', unitCost: 31.8, stockStatus: 'low-stock', stockQuantity: 4, alerts: ['Minimum order quantity: 10'] },
      { supplier: 'Beacon Supply', brand: 'Apex', productType: 'Flat', unitCost: 30.95, stockStatus: 'in-stock', stockQuantity: 18, alerts: ['NCP item: confirm finish before ordering'] },
    ],
  },
  {
    id: 'procurement-4',
    sku: 'VAV-4100-24V-BACNET',
    productType: 'Configurable',
    brand: 'Apex',
    supplier: 'General Wholesale',
    plannedQty: 18,
    orderedQty: 18,
    phase: 'Fit-out',
    dateNeeded: '11/09/26',
    offers: [
      { supplier: 'Central Supply', brand: 'Standard', productType: 'Flat', unitCost: 42.5, stockStatus: 'low-stock', stockQuantity: 6, alerts: [] },
      { supplier: 'Metro Materials', brand: 'Northline', productType: 'Configurable', unitCost: 47.25, stockStatus: 'backordered', stockQuantity: 0, alerts: ['Custom configuration: 3-week lead time'] },
      { supplier: 'General Wholesale', brand: 'Acme', productType: 'Configurable', unitCost: 45, stockStatus: 'in-stock', stockQuantity: 18, alerts: ['Confirm dimensions before fulfillment'] },
      { supplier: 'Beacon Supply', brand: 'Northline', productType: 'Flat', unitCost: 39.8, stockStatus: 'low-stock', stockQuantity: 2, alerts: ['Only two units available', 'Custom finish adds 1 week'] },
    ],
  },
  {
    id: 'procurement-5',
    sku: '1100-2193-NATURAL-GAS',
    productType: 'Flat',
    brand: 'Acme',
    supplier: 'Metro Materials',
    plannedQty: 30,
    orderedQty: 24,
    phase: 'Finishes',
    dateNeeded: '11/12/26',
    offers: [
      { supplier: 'Central Supply', brand: 'Northline', productType: 'Flat', unitCost: 8.1, stockStatus: 'low-stock', stockQuantity: 5, alerts: ['Restock expected next week'] },
      { supplier: 'Metro Materials', brand: 'Acme', productType: 'Flat', unitCost: 7.25, stockStatus: 'in-stock', stockQuantity: 40, alerts: [] },
      { supplier: 'General Wholesale', brand: 'Standard', productType: 'Configurable', unitCost: 6.95, stockStatus: 'in-stock', stockQuantity: 60, alerts: ['Bulk pricing available at 50 units'] },
      { supplier: 'Beacon Supply', brand: 'Apex', productType: 'Flat', unitCost: 6.5, stockStatus: 'backordered', stockQuantity: 0, alerts: ['Expected restock: Nov 18'] },
    ],
  },
]
const procurementRows = reactive(structuredClone(initialProcurementRows))

const dummyProducts = [
  {
    sku: 'FS-2400####################',
    configuredSku: 'FS-2400-2IN-BRONZE',
    productType: 'Configurable',
    brand: 'Northstar Instruments',
    supplier: 'Summit Supply',
    unitCost: 18.5,
  },
  {
    sku: '1100',
    configuredSku: '1100-6FT-HDMI',
    productType: 'Flat',
    brand: 'Clearline Cable Works',
    supplier: 'Summit Supply',
    unitCost: 19.25,
  },
  {
    sku: 'VAV-4100########################',
    configuredSku: 'VAV-4100-24V-BACNET',
    productType: 'Configurable',
    brand: 'Pioneer Building Systems',
    supplier: 'Harbor Industrial',
    unitCost: 39.8,
  },
  {
    sku: '1100-2193',
    configuredSku: '1100-2193-NATURAL-GAS',
    productType: 'Flat',
    brand: 'Evergreen Safety Products',
    supplier: 'Summit Supply',
    unitCost: 32.5,
  },
]

const availableSuppliers = [
  ...new Set([
    ...initialProcurementRows.flatMap((row) => row.offers.map((offer) => offer.supplier)),
    ...dummyProducts.map((product) => product.supplier),
  ]),
]

const configurationFields = [
  { label: 'Output Signal', options: ['Pulse', 'Analog (4–20 mA)', 'Modbus RTU'] },
  { label: 'Pipe Size', options: ['2 in', '1 in', '3 in', '4 in'] },
  { label: 'Sensor Material', options: ['Bronze', 'Stainless Steel', 'Composite'] },
  { label: 'Connection Type', options: ['NPT threaded', 'Flanged', 'Grooved'] },
  { label: 'Cable Length', options: ['10 ft', '3 ft', '20 ft'] },
]

const selectedRowIds = ref([])
const selectedSuppliers = ref({})
const emptyProductRows = ref([])
const emptySupplierSearchQueries = ref({})
const maxNewProductRows = 3
const selectedEmptyProductRows = ref([])
const activeSupplierPopoverRowId = ref(null)
const pinnedSupplierPopoverRowId = ref(null)
const activeDropdown = ref(null)
const productConfiguration = ref(null)
const configurationDraft = ref({})
const savedProductConfigurations = ref({})
const configurationDialog = ref(null)
const configurationReturnFocus = ref(null)
const supplierPopoverPosition = ref({})
const dropdownPosition = ref({})
const triggerElements = new Map()
let supplierPopoverCloseTimeout
let nextEmptyProductRowId = 1
const allRowsSelected = computed(
  () =>
    procurementRows.length > 0 &&
    procurementRows.every((row) => selectedRowIds.value.includes(row.id)),
)

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function formatCurrency(amount) {
  return currencyFormatter.format(amount)
}

function displayedRowTotal(row) {
  return supplierOffer(row).unitCost * row.orderedQty
}

function productDisplayName(row) {
  if (row.productType === 'NCP') {
    return row.sku
  }
  const product = dummyProducts.find((item) => item.configuredSku === row.sku)
  return product?.productType === 'Configurable' ? row.sku : product?.sku || row.sku
}

function supplierName(row) {
  return selectedSuppliers.value[row.id] || row.supplier
}

function supplierOffer(row, supplier = supplierName(row)) {
  return row.offers.find((offer) => offer.supplier === supplier)
}

function isEmptyProductRow(row) {
  return emptyProductRows.value.some((emptyRow) => emptyRow.id === row.id)
}

function catalogSourceOffer(row) {
  if (
    !isEmptyProductRow(row) ||
    !row.catalogSupplier ||
    row.catalogUnitCost == null ||
    row.offers.some((offer) => offer.supplier === row.catalogSupplier)
  ) {
    return null
  }

  return {
    supplier: row.catalogSupplier,
    brand: row.brand,
    productType: row.productType,
    unitCost: row.catalogUnitCost,
    alerts: [],
    isCatalogSource: true,
  }
}

function supplierOffers(row) {
  const catalogOffer = catalogSourceOffer(row)
  return catalogOffer ? [catalogOffer, ...row.offers] : row.offers
}

function currentSupplierOffer(row) {
  return supplierOffer(row) || (row.supplier === row.catalogSupplier ? catalogSourceOffer(row) : null)
}

function recommendedSupplierOffer(row) {
  return supplierOffers(row).reduce(
    (lowestOffer, offer) => (!lowestOffer || offer.unitCost < lowestOffer.unitCost ? offer : lowestOffer),
    null,
  )
}

function lowestOfferPrice(row) {
  return recommendedSupplierOffer(row)?.unitCost
}

function stockLabel(offer) {
  if (offer.stockStatus === 'backordered') {
    return 'Backordered'
  }
  if (offer.stockStatus === 'out-of-stock') {
    return 'Out of stock'
  }
  return `${offer.stockQuantity} available`
}

function supplierSavings(row) {
  const currentOffer = currentSupplierOffer(row)
  const recommendedOffer = recommendedSupplierOffer(row)
  if (!currentOffer || !recommendedOffer) {
    return 0
  }

  const quantity = row.orderedQty || 1
  return Math.max(0, (currentOffer.unitCost - recommendedOffer.unitCost) * quantity)
}

function switchSupplier(row, supplier = recommendedSupplierOffer(row)?.supplier) {
  if (!supplier) {
    return
  }

  if (isEmptyProductRow(row)) {
    row.supplier = supplier
    const offer = row.offers.find((item) => item.supplier === supplier)
    if (offer || supplier === row.catalogSupplier) {
      row.unitCost = offer?.unitCost ?? row.catalogUnitCost
    }
    closeDropdown('new-supplier', row.id)
  } else {
    selectedSuppliers.value = { ...selectedSuppliers.value, [row.id]: supplier }
    closeDropdown('supplier', row.id)
  }
  closeSupplierPopover(row.id)
}

function selectSupplier(row, supplier) {
  selectedSuppliers.value = { ...selectedSuppliers.value, [row.id]: supplier }
  closeDropdown('supplier', row.id)
}

function filteredSuppliers(query) {
  const normalizedQuery = query.trim().toLowerCase()
  return availableSuppliers.filter((supplier) =>
    supplier.toLowerCase().includes(normalizedQuery),
  )
}

function filteredSupplierOptions(row) {
  const query = (emptySupplierSearchQueries.value[row.id] || '').trim().toLowerCase()
  if (!row.offers.length) {
    return filteredSuppliers(query)
  }

  return supplierOffers(row).filter((option) =>
    `${option.supplier} ${option.brand} ${option.productType}`.toLowerCase().includes(query),
  )
}

function setEmptySupplierSearchQuery(row, query) {
  emptySupplierSearchQueries.value = {
    ...emptySupplierSearchQueries.value,
    [row.id]: query,
  }
}

function selectEmptyProductSupplier(row, supplier) {
  row.supplier = supplier
  const offer = row.offers.find((item) => item.supplier === supplier)
  if (offer || supplier === row.catalogSupplier) {
    row.unitCost = offer?.unitCost ?? row.catalogUnitCost
  }
  closeDropdown('new-supplier', row.id)
}

function triggerKey(type, id) {
  return `${type}:${id}`
}

function setTriggerElement(type, id, element) {
  const key = triggerKey(type, id)
  if (element) {
    triggerElements.set(key, element)
  } else {
    triggerElements.delete(key)
  }
}

function getTriggerElement(type, id) {
  return triggerElements.get(triggerKey(type, id))
}

function positionDropdown(trigger, dropdown, estimatedHeight) {
  const bounds = trigger.getBoundingClientRect()
  const horizontalAnchorLeft =
    trigger.closest('.supplier-cell, .sku-cell')?.getBoundingClientRect().left ?? bounds.left
  const viewportPadding = 12
  const dropdownGap = 6
  const dropdownWidth = Math.min(320, window.innerWidth - viewportPadding * 2)
  const dropdownHeight = dropdown?.getBoundingClientRect().height || estimatedHeight
  const spaceBelow = Math.max(
    0,
    window.innerHeight - bounds.bottom - dropdownGap - viewportPadding,
  )
  const spaceAbove = Math.max(0, bounds.top - dropdownGap - viewportPadding)
  const openBelow = dropdownHeight <= spaceBelow || spaceBelow >= spaceAbove
  const availableHeight = openBelow ? spaceBelow : spaceAbove
  const top = openBelow
    ? bounds.bottom + dropdownGap
    : Math.max(viewportPadding, bounds.top - Math.min(dropdownHeight, availableHeight) - dropdownGap)
  const left = Math.max(
    viewportPadding,
    Math.min(horizontalAnchorLeft, window.innerWidth - dropdownWidth - viewportPadding),
  )

  dropdownPosition.value = {
    left: `${left}px`,
    top: `${top}px`,
    width: `${dropdownWidth}px`,
    maxHeight: `${availableHeight}px`,
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

function showSupplierPopover(rowId, trigger) {
  closeActiveDropdown()
  window.clearTimeout(supplierPopoverCloseTimeout)
  activeSupplierPopoverRowId.value = rowId
  positionSupplierPopover(trigger)
}

function scheduleSupplierPopoverClose(rowId) {
  window.clearTimeout(supplierPopoverCloseTimeout)
  supplierPopoverCloseTimeout = window.setTimeout(() => {
    if (pinnedSupplierPopoverRowId.value !== rowId) {
      closeSupplierPopover(rowId)
    }
  }, 140)
}

function closeSupplierPopover(rowId = activeSupplierPopoverRowId.value) {
  if (activeSupplierPopoverRowId.value === rowId) {
    activeSupplierPopoverRowId.value = null
    pinnedSupplierPopoverRowId.value = null
  }
  window.clearTimeout(supplierPopoverCloseTimeout)
}

function toggleSupplierPopover(rowId, trigger) {
  if (pinnedSupplierPopoverRowId.value === rowId) {
    closeSupplierPopover(rowId)
    return
  }
  pinnedSupplierPopoverRowId.value = rowId
  showSupplierPopover(rowId, trigger)
}

function closeSupplierPopoverOutside(event) {
  const target = event.target
  if (!(target instanceof Element)) {
    return
  }

  if (!target.closest('.supplier-cell-content, .supplier-options, .supplier-save-pill, .supplier-popover')) {
    closeSupplierPopover()
  }

  const dropdown = activeDropdown.value
  if (!dropdown) {
    return
  }
  const clickedInsideDropdown = dropdown.type === 'supplier'
    ? target.closest('.supplier-cell-content, .supplier-options')
    : dropdown.type === 'new-supplier'
      ? target.closest('.empty-product-supplier-input, .empty-supplier-options')
      : target.closest('.sku-entry, .sku-product-options')
  if (!clickedInsideDropdown) {
    closeActiveDropdown()
  }
}

function repositionActiveOverlays() {
  const dropdown = activeDropdown.value
  if (dropdown) {
    const trigger = getTriggerElement(dropdown.type, dropdown.id)
    const dropdownElement = document.getElementById(dropdown.domId)
    if (trigger) {
      positionDropdown(
        trigger,
        dropdownElement,
        dropdown.type === 'supplier' ? 280 : 220,
      )
    }
  }

  const rowId = activeSupplierPopoverRowId.value
  const trigger = rowId && getTriggerElement('supplier-popover', rowId)
  if (trigger) {
    positionSupplierPopover(trigger)
  }
}

function closeDropdownsOnScroll() {
  closeActiveDropdown()
  repositionActiveOverlays()
}

onMounted(() => {
  window.addEventListener('click', closeSupplierPopoverOutside)
  window.addEventListener('resize', repositionActiveOverlays, { passive: true })
  window.addEventListener('scroll', closeDropdownsOnScroll, true)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeSupplierPopoverOutside)
  window.removeEventListener('resize', repositionActiveOverlays)
  window.removeEventListener('scroll', closeDropdownsOnScroll, true)
})

function toggleAllRows(event) {
  if (event.target.checked) {
    selectedRowIds.value = procurementRows.map((row) => row.id)
  } else {
    selectedRowIds.value = []
  }
}

function addProductRow() {
  if (emptyProductRows.value.length >= maxNewProductRows) {
    return
  }

  emptyProductRows.value.push({
    id: nextEmptyProductRowId,
    sku: '',
    brand: '',
    supplier: '',
    catalogSupplier: '',
    catalogUnitCost: null,
    offers: [],
    plannedQty: null,
    orderedQty: null,
    unitCost: null,
    phase: '',
    dateNeeded: '',
  })
  nextEmptyProductRowId += 1
}

function resetDemo() {
  procurementRows.splice(0, procurementRows.length, ...structuredClone(initialProcurementRows))
  selectedRowIds.value = []
  selectedSuppliers.value = {}
  emptyProductRows.value = []
  emptySupplierSearchQueries.value = {}
  selectedEmptyProductRows.value = []
  activeSupplierPopoverRowId.value = null
  pinnedSupplierPopoverRowId.value = null
  activeDropdown.value = null
  productConfiguration.value = null
  configurationDraft.value = {}
  savedProductConfigurations.value = {}
  configurationReturnFocus.value = null
  supplierPopoverPosition.value = {}
  dropdownPosition.value = {}
  nextEmptyProductRowId = 1
  window.clearTimeout(supplierPopoverCloseTimeout)
}

function dropdownDomId(type, id) {
  const prefixes = {
    product: 'sku-products',
    'new-product': 'empty-product-options',
    supplier: 'supplier-options',
    'new-supplier': 'empty-supplier-options',
  }
  return `${prefixes[type]}-${id}`
}

function closeActiveDropdown() {
  activeDropdown.value = null
  dropdownPosition.value = {}
}

function closeDropdown(type, id) {
  if (activeDropdown.value?.type === type && activeDropdown.value.id === id) {
    closeActiveDropdown()
  }
}

function openDropdown(type, id, trigger) {
  if (type !== 'supplier') {
    closeSupplierPopover()
  }

  if (activeDropdown.value?.type === type && activeDropdown.value.id === id) {
    if (trigger) {
      positionDropdown(
        trigger,
        document.getElementById(activeDropdown.value.domId),
        type === 'supplier' ? 280 : 220,
      )
    }
    return
  }

  const dropdown = { type, id, domId: dropdownDomId(type, id) }
  activeDropdown.value = dropdown
  if (trigger) {
    positionDropdown(trigger, null, type === 'supplier' ? 280 : 220)
  }
  nextTick(() => {
    if (trigger && activeDropdown.value?.type === type && activeDropdown.value.id === id) {
      positionDropdown(
        trigger,
        document.getElementById(dropdown.domId),
        type === 'supplier' ? 280 : 220,
      )
    }
  })
}

function toggleSupplierDropdown(rowId) {
  if (activeDropdown.value?.type === 'supplier' && activeDropdown.value.id === rowId) {
    closeActiveDropdown()
    return
  }
  openDropdown('supplier', rowId, getTriggerElement('supplier', rowId))
}

function defaultConfiguration() {
  return Object.fromEntries(configurationFields.map((field) => [field.label, field.options[0]]))
}

function openProductConfiguration(row, product, isNewProduct = false) {
  closeActiveDropdown()
  configurationReturnFocus.value = getTriggerElement(
    isNewProduct ? 'new-product' : 'product',
    row.id,
  )
  productConfiguration.value = { row, product, isNewProduct }
  configurationDraft.value = {
    ...defaultConfiguration(),
    ...savedProductConfigurations.value[product.sku],
  }
  nextTick(() => configurationDialog.value?.querySelector('select')?.focus())
}

function updateRowSku(row, sku) {
  const previousSku = row.sku
  if (previousSku === sku) {
    return
  }

  row.sku = sku
}

function setCustomSku(row, sku) {
  updateRowSku(row, sku)
  row.productType = sku.trim() ? 'NCP' : ''
  if (emptyProductRows.value.some((emptyRow) => emptyRow.id === row.id)) {
    row.offers = []
    row.catalogSupplier = ''
    row.catalogUnitCost = null
  }
}

function applyProductSelection(row, product) {
  updateRowSku(row, product.configuredSku)
  row.brand = product.brand
  row.productType = product.productType
}

function chooseProduct(row, product) {
  if (product.productType === 'Configurable') {
    openProductConfiguration(row, product)
    return
  }

  applyProductSelection(row, product)
  closeDropdown('product', row.id)
}

function chooseEmptyProduct(row, product) {
  if (product.productType === 'Configurable') {
    openProductConfiguration(row, product, true)
    return
  }

  selectDummyProduct(row, product)
}

function closeProductConfiguration(restoreFocus = true, closeEmptyDropdownAfterFocus = false) {
  const returnFocus = configurationReturnFocus.value
  const rowId = productConfiguration.value?.row.id
  productConfiguration.value = null
  configurationReturnFocus.value = null
  if (restoreFocus && returnFocus) {
    nextTick(() => {
      returnFocus.focus()
      if (closeEmptyDropdownAfterFocus) {
        closeDropdown('new-product', rowId)
      }
    })
  }
}

function saveProductConfiguration() {
  if (!productConfiguration.value) {
    return
  }

  const { row, product, isNewProduct } = productConfiguration.value
  savedProductConfigurations.value = {
    ...savedProductConfigurations.value,
    [product.sku]: { ...configurationDraft.value },
  }
  if (isNewProduct) {
    selectDummyProduct(row, product)
  } else {
    applyProductSelection(row, product)
  }
  closeProductConfiguration(true, isNewProduct)
}

function filteredDummyProducts(row) {
  const query = row.sku.trim().toLowerCase()
  if (!query) {
    return dummyProducts
  }
  return dummyProducts.filter((product) =>
    `${product.sku} ${product.configuredSku} ${product.brand} ${product.supplier}`
      .toLowerCase()
      .includes(query),
  )
}

function selectDummyProduct(row, product) {
  const sourceRow = initialProcurementRows.find(
    (candidate) => candidate.sku === product.configuredSku,
  )
  Object.assign(row, {
    sku: product.configuredSku,
    brand: product.brand,
    productType: product.productType,
    supplier: product.supplier,
    catalogSupplier: product.supplier,
    catalogUnitCost: product.unitCost,
    offers: sourceRow?.offers || [],
    plannedQty: 1,
    orderedQty: 1,
    unitCost: product.unitCost,
  })
  closeDropdown('new-product', row.id)
}

function openProductDropdown(id, trigger) {
  openDropdown('product', id, trigger)
}

function openEmptyProductDropdown(row, trigger) {
  openDropdown('new-product', row.id, trigger)
}

function openEmptySupplierDropdown(row, trigger) {
  setEmptySupplierSearchQuery(row, '')
  openDropdown('new-supplier', row.id, trigger)
}
</script>

<template>
      <section class="procurement-table-section" aria-labelledby="procurement-table-title">
      <p style="font-size: 14px;">Try selecting a supplier, adding a product, or reviewing a savings recommendation.</p>
        <div class="procurement-table-scroll" tabindex="0" role="region" aria-label="Material schedule table, scroll horizontally to see more columns">
          <table class="procurement-table" aria-label="Harbor House material schedule">
            <colgroup>
              <col class="select-col" />
              <col class="sku-col" />
              <col class="brand-col" />
              <col class="supplier-col" />
              <col class="supplier-avail" />
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
                <th>Supplier<br />Availability</th>
                <th>Planned<br />Qty</th>
                <th>Ordered<br />Qty</th>
                <th>Unit<br />Cost</th>
                <th>Total<br />Cost</th>
                <th>Phase</th>
                <th>Date<br />Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in procurementRows" :key="row.id" :class="{ 'is-selected': selectedRowIds.includes(row.id) }">
                <td class="select-cell">
                  <input
                    v-model="selectedRowIds"
                    type="checkbox"
                    :value="row.id"
                    :aria-label="`Select ${row.sku}`"
                  />
                </td>
                <th scope="row" class="sku-cell">
                  <ProductPicker
                    :id="`sku-products-${row.id}`"
                    :model-value="productDisplayName(row)"
                    :title="row.sku"
                    :selected-sku="row.sku"
                    :products="filteredDummyProducts(row)"
                    :active="activeDropdown?.type === 'product' && activeDropdown.id === row.id"
                    :position="dropdownPosition"
                    input-class="sku-cell-input"
                    :aria-label="`SKU for ${row.brand} product row`"
                    list-label="Products"
                    :show-ncp-badge="row.productType === 'NCP'"
                    show-configurable-badge
                    @trigger-change="setTriggerElement('product', row.id, $event)"
                    @update:model-value="setCustomSku(row, $event)"
                    @open="openProductDropdown(row.id, $event)"
                    @close="closeDropdown('product', row.id)"
                    @select="chooseProduct(row, $event)"
                  />
                </th>
                <td>{{ row.brand }}</td>
                <td class="supplier-cell">
                  <div
                    :ref="(element) => setTriggerElement('supplier', row.id, element)"
                    class="supplier-cell-content"
                    @click.stop="toggleSupplierDropdown(row.id)"
                  >
                    <button
                      class="supplier-name"
                      type="button"
                      aria-haspopup="listbox"
                      :aria-expanded="activeDropdown?.type === 'supplier' && activeDropdown.id === row.id"
                      :aria-controls="`supplier-options-${row.id}`"
                    >
                      {{ supplierName(row) }}
                    </button>
                    <button
                      v-if="row.productType !== 'NCP' && recommendedSupplierOffer(row) && supplierName(row) !== recommendedSupplierOffer(row).supplier && supplierSavings(row) > 0"
                      :ref="(element) => setTriggerElement('supplier-popover', row.id, element)"
                      class="supplier-save-pill"
                      type="button"
                      aria-haspopup="dialog"
                      :aria-expanded="activeSupplierPopoverRowId === row.id"
                      @mouseenter="showSupplierPopover(row.id, $event.currentTarget)"
                      @mouseleave="scheduleSupplierPopoverClose(row.id)"
                      @focus="showSupplierPopover(row.id, $event.currentTarget)"
                      @blur="scheduleSupplierPopoverClose(row.id)"
                      @click.stop="toggleSupplierPopover(row.id, $event.currentTarget)"
                      @keydown.esc="closeSupplierPopover(row.id)"
                    >Switch & save {{ formatCurrency(supplierSavings(row)) }}
                      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.25" />
                        <path d="M8 7.25v3.5M8 5.25h.01" />
                      </svg>
                    </button>
                    <Teleport to="body">
                      <div
                        v-if="activeDropdown?.type === 'supplier' && activeDropdown.id === row.id"
                        :id="`supplier-options-${row.id}`"
                        class="supplier-options"
                        :style="dropdownPosition"
                        role="listbox"
                        :aria-label="`Available suppliers for ${row.sku}`"
                      >
                        <div
                          v-for="offer in row.offers"
                          :key="offer.supplier"
                          class="supplier-option"
                          role="option"
                          :aria-selected="supplierName(row) === offer.supplier"
                          tabindex="0"
                          @click.stop="selectSupplier(row, offer.supplier)"
                          @keydown.enter.stop="selectSupplier(row, offer.supplier)"
                          @keydown.space.prevent.stop="selectSupplier(row, offer.supplier)"
                        >
                          <div class="supplier-option-layout">
                          <span class="supplier-option-initial">S</span>
                            <div class="supplier-option-description">
                              <div class="supplier-option-heading">
                                <span><b>{{ offer.supplier }}</b></span>
                                <span
                                  v-if="row.productType !== 'NCP' && offer.unitCost === lowestOfferPrice(row)"
                                  class="supplier-option-badge supplier-option-badge--price"
                                ><b>Lowest price</b></span>
                                <span
                                  v-if="row.productType !== 'NCP' && offer.productType !== 'Flat'"
                                  class="supplier-option-badge"
                                  :class="`supplier-option-badge--${offer.productType.toLowerCase()}`"
                                ><b>{{ offer.productType }}</b></span>
                              </div>
                              <div v-if="offer.brand !== row.brand" class="supplier-option-brand">
                                {{ offer.brand }}
                              </div>
                              <div v-if="row.productType !== 'NCP'" class="supplier-option-meta">
                                <div class="supplier-option-stock" :class="`supplier-option-stock--${offer.stockStatus}`">
                                  <span class="supplier-option-stock-dot" aria-hidden="true"></span>
                                  <span class="supplier-option-stock-text">{{ stockLabel(offer) }}</span>
                                </div>
                                <template v-if="offer.alerts.length">
                                  <span class="supplier-option-separator" aria-hidden="true"></span>
                                  <button
                                    class="supplier-alert-trigger supplier-option-alert"
                                    type="button"
                                    :aria-label="`${offer.alerts.length} product alert${offer.alerts.length === 1 ? '' : 's'} from ${offer.supplier}`"
                                    @click.stop
                                  >
                                    {{ offer.alerts.length }} product alert{{ offer.alerts.length === 1 ? '' : 's' }}
                                    <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                                      <circle cx="8" cy="8" r="6.25" />
                                      <path d="M8 7.25v3.5M8 5.25h.01" />
                                    </svg>
                                    <span class="supplier-alert-tooltip" role="tooltip">
                                      <span v-for="alert in offer.alerts" :key="alert">{{ alert }}</span>
                                    </span>
                                  </button>
                                </template>
                              </div>
                            </div>
                          <div class="supplier-option-price">
                              <span><b>{{ formatCurrency(offer.unitCost) }}</b></span>
                              <span v-if="row.productType !== 'NCP' && offer.supplier !== supplierName(row) && offer.unitCost < supplierOffer(row).unitCost" class="supplier-option-savings">
                                Save {{ formatCurrency((supplierOffer(row).unitCost - offer.unitCost) * row.orderedQty) }}
                              </span>
                          </div>
                          </div>
                        </div>
                      </div>
                    </Teleport>
                  </div>
                  <Teleport to="body">
                    <div
                      v-if="activeSupplierPopoverRowId === row.id && row.productType !== 'NCP'"
                      class="supplier-popover"
                      :style="supplierPopoverPosition"
                      role="dialog"
                      :aria-label="`Supplier comparison for ${row.sku}`"
                      @mouseenter="showSupplierPopover(row.id, getTriggerElement('supplier-popover', row.id))"
                      @mouseleave="scheduleSupplierPopoverClose(row.id)"
                      @focusin="showSupplierPopover(row.id, getTriggerElement('supplier-popover', row.id))"
                      @focusout="scheduleSupplierPopoverClose(row.id)"
                      @keydown.esc="closeSupplierPopover(row.id)"
                    >
                      <div class="supplier-popover-header">
                        <p class="supplier-popover-title"><b>Save {{ formatCurrency(supplierSavings(row)) }} with {{ recommendedSupplierOffer(row).supplier }}</b>
                        </p>
                      </div>
                      <div class="supplier-popover-content">
                        <div class="supplier-comparison">
                          <span></span>
                          <span>{{ supplierName(row) }}</span>
                          <strong>{{ recommendedSupplierOffer(row).supplier }}</strong>
                          <span>Price</span>
                          <span>{{ formatCurrency(supplierOffer(row).unitCost * row.orderedQty) }}</span>
                          <strong>{{ formatCurrency(recommendedSupplierOffer(row).unitCost * row.orderedQty) }}</strong>
                          <span>Stock</span>
                          <span>{{ stockLabel(supplierOffer(row)) }}</span>
                          <span>{{ stockLabel(recommendedSupplierOffer(row)) }}</span>
                          <span>Alerts</span>
                          <template v-for="offer in [supplierOffer(row), recommendedSupplierOffer(row)]" :key="offer.supplier">
                            <button
                              v-if="offer.alerts.length"
                              class="supplier-alert-trigger supplier-alert-beacon"
                              type="button"
                              :aria-label="`${offer.alerts.length} product alert${offer.alerts.length === 1 ? '' : 's'} from ${offer.supplier}`"
                              @click.stop
                            >
                              {{ offer.alerts.length }} product alert{{ offer.alerts.length === 1 ? '' : 's' }}
                              <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="6.25" />
                                <path d="M8 7.25v3.5M8 5.25h.01" />
                              </svg>
                              <span class="supplier-alert-tooltip" role="tooltip">
                                <span v-for="alert in offer.alerts" :key="alert">{{ alert }}</span>
                              </span>
                            </button>
                            <span v-else>None</span>
                          </template>
                        </div>
                        <button
                          class="supplier-switch-button"
                          type="button"
                          :disabled="supplierName(row) === recommendedSupplierOffer(row).supplier"
                          @click="switchSupplier(row, recommendedSupplierOffer(row).supplier)"
                        >
                          {{ supplierName(row) === recommendedSupplierOffer(row).supplier ? `${recommendedSupplierOffer(row).supplier} selected` : `Switch to ${recommendedSupplierOffer(row).supplier}` }}
                        </button>
                      </div>
                    </div>
                  </Teleport>
                </td>
                <td class="supplier-availability-cell">
                  <span
                    v-if="row.productType !== 'NCP'"
                    class="supplier-availability-pill"
                    :class="`supplier-availability-pill--${supplierOffer(row).stockStatus}`"
                  >
                    <span class="supplier-availability-dot" aria-hidden="true"></span>
                    {{ stockLabel(supplierOffer(row)) }}
                  </span>
                  <span v-else class="supplier-availability-empty">-</span>
                </td>
                <td>{{ row.plannedQty }}</td>
                <td>{{ row.orderedQty }}</td>
                <td>{{ formatCurrency(displayedRowTotal(row) / row.orderedQty) }}</td>
                <td class="total-cell">{{ formatCurrency(displayedRowTotal(row)) }}</td>
                <td><span class="phase-pill" :class="`phase-${row.phase.toLowerCase().replace('-', '')}`">{{ row.phase }}</span></td>
                <td>{{ row.dateNeeded }}</td>
              </tr>
              <tr v-for="row in emptyProductRows" :key="`empty-product-${row.id}`">
                <td class="select-cell">
                  <input
                    v-model="selectedEmptyProductRows"
                    type="checkbox"
                    :value="row.id"
                    :aria-label="`Select new product row ${row.id}`"
                  />
                </td>
                <th scope="row" class="sku-cell">
                  <ProductPicker
                    :id="`empty-product-options-${row.id}`"
                    :model-value="productDisplayName(row)"
                    :title="row.sku"
                    :selected-sku="row.sku"
                    :products="filteredDummyProducts(row)"
                    :active="activeDropdown?.type === 'new-product' && activeDropdown.id === row.id"
                    :position="dropdownPosition"
                    input-class="empty-product-sku-input"
                    placeholder="Select or search for product"
                    :aria-label="`SKU for new product row ${row.id}`"
                    list-label="Dummy products"
                    :show-ncp-badge="row.productType === 'NCP'"
                    @trigger-change="setTriggerElement('new-product', row.id, $event)"
                    @update:model-value="setCustomSku(row, $event)"
                    @open="openEmptyProductDropdown(row, $event)"
                    @close="closeDropdown('new-product', row.id)"
                    @select="chooseEmptyProduct(row, $event)"
                  />
                </th>
                <td>{{ row.brand || (row.unitCost == null ? '-' : '') }}</td>
                <td class="supplier-cell">
                  <div class="supplier-cell-content">
                    <input
                      :ref="(element) => setTriggerElement('new-supplier', row.id, element)"
                      v-model="row.supplier"
                      class="empty-product-supplier-input"
                      type="text"
                      placeholder="Type or select supplier"
                      role="combobox"
                      aria-autocomplete="list"
                      aria-haspopup="listbox"
                      :aria-expanded="activeDropdown?.type === 'new-supplier' && activeDropdown.id === row.id && filteredSupplierOptions(row).length > 0"
                      :aria-controls="`empty-supplier-options-${row.id}`"
                      :aria-label="`Supplier for new product row ${row.id}`"
                      @focus="openEmptySupplierDropdown(row, $event.currentTarget)"
                      @click.stop="openEmptySupplierDropdown(row, $event.currentTarget)"
                      @input="setEmptySupplierSearchQuery(row, $event.target.value)"
                      @keydown.esc="closeDropdown('new-supplier', row.id)"
                    />
                    <button
                      v-if="row.productType !== 'NCP' && recommendedSupplierOffer(row) && row.supplier !== recommendedSupplierOffer(row).supplier && supplierSavings(row) > 0"
                      :ref="(element) => setTriggerElement('supplier-popover', row.id, element)"
                      class="supplier-save-pill"
                      type="button"
                      aria-haspopup="dialog"
                      :aria-expanded="activeSupplierPopoverRowId === row.id"
                      @mouseenter="showSupplierPopover(row.id, $event.currentTarget)"
                      @mouseleave="scheduleSupplierPopoverClose(row.id)"
                      @focus="showSupplierPopover(row.id, $event.currentTarget)"
                      @blur="scheduleSupplierPopoverClose(row.id)"
                      @click.stop="toggleSupplierPopover(row.id, $event.currentTarget)"
                      @keydown.esc="closeSupplierPopover(row.id)"
                    >Switch & save {{ formatCurrency(supplierSavings(row)) }}
                      <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.25" />
                        <path d="M8 7.25v3.5M8 5.25h.01" />
                      </svg>
                    </button>
                  </div>
                  <Teleport to="body">
                    <div
                      v-if="activeDropdown?.type === 'new-supplier' && activeDropdown.id === row.id && filteredSupplierOptions(row).length"
                      :id="`empty-supplier-options-${row.id}`"
                      class="supplier-options empty-supplier-options"
                      :style="dropdownPosition"
                      role="listbox"
                      :aria-label="`Available suppliers for new product row ${row.id}`"
                    >
                      <div
                        v-for="option in filteredSupplierOptions(row)"
                        :key="row.offers.length ? option.supplier : option"
                        class="supplier-option"
                        role="option"
                        :aria-selected="row.supplier === (row.offers.length ? option.supplier : option)"
                        tabindex="0"
                        @click.stop="selectEmptyProductSupplier(row, row.offers.length ? option.supplier : option)"
                        @keydown.enter.stop="selectEmptyProductSupplier(row, row.offers.length ? option.supplier : option)"
                        @keydown.space.prevent.stop="selectEmptyProductSupplier(row, row.offers.length ? option.supplier : option)"
                      >
                        <div class="supplier-option-layout">
                          <span class="supplier-option-initial">S</span>
                          <div class="supplier-option-description">
                            <template v-if="row.offers.length">
                              <div class="supplier-option-heading">
                                <span><b>{{ option.supplier }}</b></span>
                                <span
                                  v-if="row.productType !== 'NCP' && option.unitCost === lowestOfferPrice(row)"
                                  class="supplier-option-badge supplier-option-badge--price"
                                ><b>Lowest price</b></span>
                                <span
                                  v-if="row.productType !== 'NCP' && option.productType !== 'Flat'"
                                  class="supplier-option-badge"
                                  :class="`supplier-option-badge--${option.productType.toLowerCase()}`"
                                ><b>{{ option.productType }}</b></span>
                              </div>
                              <div v-if="option.brand !== row.brand" class="supplier-option-brand">
                                {{ option.brand }}
                              </div>
                              <div v-if="row.productType !== 'NCP' && !option.isCatalogSource" class="supplier-option-meta">
                                <div class="supplier-option-stock" :class="`supplier-option-stock--${option.stockStatus}`">
                                  <span class="supplier-option-stock-dot" aria-hidden="true"></span>
                                  <span class="supplier-option-stock-text">{{ stockLabel(option) }}</span>
                                </div>
                                <template v-if="option.alerts.length">
                                  <span class="supplier-option-separator" aria-hidden="true"></span>
                                  <button
                                    class="supplier-alert-trigger supplier-option-alert"
                                    type="button"
                                    :aria-label="`${option.alerts.length} product alert${option.alerts.length === 1 ? '' : 's'} from ${option.supplier}`"
                                    @click.stop
                                  >
                                    {{ option.alerts.length }} product alert{{ option.alerts.length === 1 ? '' : 's' }}
                                    <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                                      <circle cx="8" cy="8" r="6.25" />
                                      <path d="M8 7.25v3.5M8 5.25h.01" />
                                    </svg>
                                    <span class="supplier-alert-tooltip" role="tooltip">
                                      <span v-for="alert in option.alerts" :key="alert">{{ alert }}</span>
                                    </span>
                                  </button>
                                </template>
                              </div>
                            </template>
                            <template v-else>
                              <div class="supplier-option-heading">
                                <span><b>{{ option }}</b></span>
                              </div>
                              <div class="supplier-option-brand">
                                Select a product to see supplier offer details
                              </div>
                            </template>
                          </div>
                          <div v-if="row.offers.length" class="supplier-option-price">
                            <span><b>{{ formatCurrency(option.unitCost) }}</b></span>
                            <span
                              v-if="row.unitCost != null && option.unitCost < row.unitCost"
                              class="supplier-option-savings"
                            >
                              Save {{ formatCurrency((row.unitCost - option.unitCost) * (row.orderedQty || 1)) }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Teleport>
                  <Teleport to="body">
                    <div
                      v-if="activeSupplierPopoverRowId === row.id && row.productType !== 'NCP' && recommendedSupplierOffer(row)"
                      class="supplier-popover"
                      :style="supplierPopoverPosition"
                      role="dialog"
                      :aria-label="`Supplier comparison for ${row.sku}`"
                      @mouseenter="showSupplierPopover(row.id, getTriggerElement('supplier-popover', row.id))"
                      @mouseleave="scheduleSupplierPopoverClose(row.id)"
                      @focusin="showSupplierPopover(row.id, getTriggerElement('supplier-popover', row.id))"
                      @focusout="scheduleSupplierPopoverClose(row.id)"
                      @keydown.esc="closeSupplierPopover(row.id)"
                    >
                      <div class="supplier-popover-header">
                        <p class="supplier-popover-title">
                          <b>Save {{ formatCurrency(supplierSavings(row)) }} with {{ recommendedSupplierOffer(row).supplier }}</b>
                        </p>
                      </div>
                      <div class="supplier-popover-content">
                        <div class="supplier-comparison">
                          <span></span>
                          <span>{{ row.supplier }}</span>
                          <strong>{{ recommendedSupplierOffer(row).supplier }}</strong>
                          <span>Price</span>
                          <span>{{ formatCurrency(row.unitCost * (row.orderedQty || 1)) }}</span>
                          <strong>{{ formatCurrency(recommendedSupplierOffer(row).unitCost * (row.orderedQty || 1)) }}</strong>
                          <span>Stock</span>
                          <span>{{ currentSupplierOffer(row)?.stockStatus ? stockLabel(currentSupplierOffer(row)) : '-' }}</span>
                          <span>{{ recommendedSupplierOffer(row).stockStatus ? stockLabel(recommendedSupplierOffer(row)) : '-' }}</span>
                          <span>Alerts</span>
                          <template v-for="offer in [currentSupplierOffer(row), recommendedSupplierOffer(row)]" :key="offer.supplier">
                            <button
                              v-if="offer.alerts.length"
                              class="supplier-alert-trigger supplier-alert-beacon"
                              type="button"
                              :aria-label="`${offer.alerts.length} product alert${offer.alerts.length === 1 ? '' : 's'} from ${offer.supplier}`"
                              @click.stop
                            >
                              {{ offer.alerts.length }} product alert{{ offer.alerts.length === 1 ? '' : 's' }}
                              <svg class="supplier-info-icon" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="6.25" />
                                <path d="M8 7.25v3.5M8 5.25h.01" />
                              </svg>
                              <span class="supplier-alert-tooltip" role="tooltip">
                                <span v-for="alert in offer.alerts" :key="alert">{{ alert }}</span>
                              </span>
                            </button>
                            <span v-else>None</span>
                          </template>
                        </div>
                        <button
                          class="supplier-switch-button"
                          type="button"
                          @click="switchSupplier(row, recommendedSupplierOffer(row).supplier)"
                        >
                          Switch to {{ recommendedSupplierOffer(row).supplier }}
                        </button>
                      </div>
                    </div>
                  </Teleport>
                </td>
                <td class="supplier-availability-cell"><span class="supplier-availability-empty">-</span></td>
                <td>{{ row.plannedQty ?? (row.unitCost == null ? '-' : '') }}</td>
                <td>{{ row.orderedQty ?? (row.unitCost == null ? '-' : '') }}</td>
                <td>{{ row.unitCost == null ? '-' : formatCurrency(row.unitCost) }}</td>
                <td class="total-cell">
                  {{ row.unitCost == null ? '-' : row.orderedQty == null ? '' : formatCurrency(row.unitCost * row.orderedQty) }}
                </td>
                <td>{{ row.phase || (row.unitCost == null ? '-' : '') }}</td>
                <td>{{ row.dateNeeded || (row.unitCost == null ? '-' : '') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-actions">
          <button
            class="add-product-button"
            type="button"
            :disabled="emptyProductRows.length >= maxNewProductRows"
            @click="addProductRow"
          >
            <span aria-hidden="true">+</span> Add Product
          </button>
          <button class="reset-demo-button" type="button" @click="resetDemo">Reset demo</button>
        </div>
      </section>

<Teleport to="body">
    <div
      v-if="productConfiguration"
      class="configuration-modal-backdrop"
      @click.self="closeProductConfiguration()"
    >
      <section
        ref="configurationDialog"
        class="configuration-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="configuration-title"
        @keydown.esc.stop.prevent="closeProductConfiguration()"
      >
        <header class="configuration-modal-header">
          <div>
            <h2 id="configuration-title">Configure Product</h2>
            <p>{{ productConfiguration.product.brand }} · {{ productConfiguration.product.supplier }}</p>
            <p>Product: {{ productConfiguration.product.sku }}</p>
          </div>
          <button
            class="configuration-close-button"
            type="button"
            aria-label="Close product configuration"
            @click="closeProductConfiguration()"
          >×</button>
        </header>
        <form class="configuration-form" @submit.prevent="saveProductConfiguration">
          <div class="configuration-fields">
            <label
              v-for="(field, index) in configurationFields"
              :key="field.label"
              class="configuration-field"
              :for="`configuration-field-${index}`"
            >
              <span>{{ field.label }}</span>
              <select
                :id="`configuration-field-${index}`"
                v-model="configurationDraft[field.label]"
              >
                <option v-for="option in field.options" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </label>
          </div>
          <footer class="configuration-modal-actions">
            <button
              class="configuration-cancel-button"
              type="button"
              @click="closeProductConfiguration()"
            >Cancel</button>
            <button class="configuration-save-button" type="submit">Save Configuration</button>
          </footer>
        </form>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>

.case-study {
  width: min(100% - 96px, 1240px);
  margin-inline: auto;
  color: var(--ink);
}

.site-footer {
  margin-top: auto;
  padding: 1.5rem 0 0.5rem;
  text-align: center;
}

.site-footer p {
  margin: 0;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 400;
}

.back-link:hover {
  color: var(--accent);
}

.procurement-table-section {
  padding-block: 1.25rem;
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
  min-width: 1420px;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  font-size: 0.72rem;
}

.procurement-table .select-col { width: 42px; }
.procurement-table .sku-col { width: 200px; }
.procurement-table .brand-col { width: 120px; }
.procurement-table .supplier-col { width: 16rem; }
.procurement-table .supplier-avail { width: 120px; }
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

.empty-product-supplier-input {
  display: block;
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.empty-product-supplier-input::placeholder {
  color: #8a8f98;
  font-weight: 400;
}

.sku-cell:focus-within,
.procurement-table td:focus-within {
  outline: 2px solid #7550c8;
  outline-offset: -2px;
}

.empty-product-supplier-input:focus-visible {
  outline: none;
}

.supplier-options {
  position: fixed;
  z-index: 1100;
  box-sizing: border-box;
  padding: 0.25rem;
  overflow-y: auto;
  border: 1px solid #dce2dd;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 8px 20px rgb(21 48 32 / 16%);
}

.procurement-table .supplier-cell {
  position: relative;
  vertical-align: middle;
  overflow: visible;
}

.supplier-availability-cell {
  vertical-align: middle;
}

.supplier-availability-pill {
  border: 1px solid #9de5c4;
  background: #effbf5;
}

.supplier-availability-pill--low-stock {
  border-color: #f2d394;
  background: #fff8e9;
}

.supplier-availability-pill--backordered,
.supplier-availability-pill--out-of-stock {
  border-color: #ffb1b8;
  background: #fff5f5;
}

.supplier-availability-dot {
  width: 6px;
  height: 6px;
  flex: 0 0 auto;
  border-radius: 50%;
}

.supplier-availability-empty {
  color: #7185a5;
}

.supplier-cell-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.45rem;
  min-width: 0;
}

.procurement-table .supplier-cell:hover,
.procurement-table .sku-cell:hover {
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

.supplier-name:focus {
  outline: none;
  box-shadow: none;
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

.supplier-option:focus-visible {
  border-radius: 3px;
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.supplier-options {
  display: grid;
}

.configuration-modal-backdrop {
  position: fixed;
  z-index: 1200;
  inset: 0;
  display: grid;
  padding: 1rem;
  place-items: center;
  background: rgb(21 29 24 / 42%);
}

.configuration-modal {
  display: flex;
  width: min(580px, 100%);
  max-height: min(760px, 100%);
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #dce2dd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 20px 60px rgb(21 29 32 / 24%);
  color: #282a32;
}

.configuration-modal-header {
  display: flex;
  flex: 0 0 auto;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.8rem 1rem 0.65rem;
  border-bottom: 1px solid #e2e3e7;
}

.configuration-modal-header h2 {
  margin: 0 0 0.45rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
}

.configuration-modal-header p {
  margin: 0.15rem 0;
  color: #60665f;
  font-size: 0.7rem;
}

.configuration-close-button {
  padding: 0;
  border: 0;
  background: transparent;
  color: #687067;
  cursor: pointer;
  font: inherit;
  font-size: 1.2rem;
  line-height: 1;
}

.configuration-form {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  flex-direction: column;
}

.configuration-fields {
  display: grid;
  flex: 1 1 auto;
  min-height: 0;
  gap: 0.5rem;
  overflow-y: auto;
  padding: 0.55rem 1rem 0.75rem;
}

.configuration-field {
  display: grid;
  min-width: 0;
  gap: 0.2rem;
  color: #373a40;
  font-size: 0.67rem;
  font-weight: 600;
}

.configuration-field select {
  width: 100%;
  min-height: 1.65rem;
  padding: 0.15rem 1.75rem 0.15rem 0.4rem;
  appearance: none;
  border: 1px solid #d9dde2;
  border-radius: 4px;
  background: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='m4 6 4 4 4-4' stroke='%2360665f' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.65rem center;
  background-size: 0.85rem;
  color: #343840;
  font: inherit;
  font-weight: 400;
}

.configuration-field select:focus-visible,
.configuration-close-button:focus-visible,
.configuration-modal-actions button:focus-visible {
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.configuration-modal-actions {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid #e2e3e7;
  background: #fff;
}

.configuration-modal-actions button {
  min-height: 1.85rem;
  padding: 0.25rem 0.65rem;
  border: 1px solid #d9dde2;
  border-radius: 4px;
  background: #fff;
  color: #343840;
  cursor: pointer;
  font: inherit;
  font-size: 0.72rem;
}

.configuration-modal-actions .configuration-save-button {
  border-color: #315d78;
  background: #315d78;
  color: #fff;
}

.supplier-option {
  display: flex;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.4rem 0.5rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
  color: #282a32;
  cursor: pointer;
  font-size: 0.6875rem;
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
  align-items: flex-start;
  justify-content: flex-start;
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
  width: 1.5rem;
  height: 1.5rem;
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
  gap: 0.1rem;
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

.supplier-option-brand {
  color: #747b73;
  font-size: 0.6rem;
  line-height: 1.1;
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

.supplier-option-badge--flat {
  background: #f0f1ed;
  color: #5d6258;
}

.supplier-option-badge--ncp {
  background: #fbf1dd;
  color: #8a6028;
}

.supplier-option-stock {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.625rem;
}

.supplier-option-stock-dot {
  width: 5px;
  height: 5px;
  flex: 0 0 auto;
  border-radius: 50%;
}

.supplier-option-stock,
.supplier-availability-pill {
  color: #286238;
}

.supplier-option-stock--low-stock,
.supplier-availability-pill--low-stock {
  color: #9a6a25;
}

.supplier-option-stock--low-stock .supplier-option-stock-dot,
.supplier-availability-pill--low-stock .supplier-availability-dot {
  background: #c48742;
}

.supplier-option-stock--backordered,
.supplier-option-stock--out-of-stock,
.supplier-availability-pill--backordered,
.supplier-availability-pill--out-of-stock {
  color: #a34a3f;
}

.supplier-option-stock--backordered .supplier-option-stock-dot,
.supplier-option-stock--out-of-stock .supplier-option-stock-dot,
.supplier-availability-pill--backordered .supplier-availability-dot,
.supplier-availability-pill--out-of-stock .supplier-availability-dot {
  background: #c65e51;
}

.supplier-option-stock-dot,
.supplier-availability-dot {
  background: #278148;
}

.supplier-option-stock-text {
  font-size: 9px;
}

.supplier-option-separator {
  width: 2.5px;
  height: 2.5px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #c8ccc5;
}

.supplier-alert-trigger.supplier-option-alert {
  color: #a95f2b;
  font-size: 9px;
}

.supplier-option-price {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  margin-left: auto;
  text-align: right;
  row-gap: 0.25rem;
}

.supplier-option-savings {
  color: #286238;
  font-size: 9px;
}

.supplier-save-pill {
  position: relative;
  flex: 0 0 auto;
  border: 1px solid #ead8b9;
  background: #fbf1dd;
  color: #a95f2b;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 140ms ease, border-color 140ms ease;
}

.supplier-save-pill,
.supplier-availability-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.16rem 0.4rem;
  border-radius: 999px;
  font-size: 0.6rem;
  font-weight: 500;
  line-height: 1.2;
  height: 1rem;
}

.supplier-save-pill:hover,
.supplier-save-pill:focus-visible,
.supplier-save-pill[aria-expanded='true'] {
  border-color: #dfc79c;
  background: #f4e4c4;
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
  /* line-height: 1.35; */
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

.supplier-option:first-child .supplier-alert-tooltip {
  top: calc(100% + 5px);
  bottom: auto;
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

.table-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.7rem;
  border: 1px solid #e0e3dc;
  border-top: 0;
  background: #fff;
}

.add-product-button {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.55rem;
  border: 1px solid #dce2dd;
  border-radius: 4px;
  background: #fff;
  color: #315d78;
  cursor: pointer;
  font: inherit;
  font-size: 0.65rem;
  font-weight: 600;
}

.add-product-button:hover {
  background: #f3f7fa;
}

.add-product-button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.add-product-button:disabled:hover {
  background: #fff;
}

.add-product-button:focus-visible {
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.add-product-button > span {
  font-size: 0.9rem;
  line-height: 1;
}

.reset-demo-button {
  padding: 0;
  border: 0;
  background: transparent;
  color: #315d78;
  cursor: pointer;
  font: inherit;
  font-size: 0.65rem;
  white-space: nowrap;
}

.reset-demo-button:hover {
  text-decoration: underline;
}

.reset-demo-button:focus-visible {
  border-radius: 2px;
  outline: 2px solid #7550c8;
  outline-offset: 3px;
}

</style>
