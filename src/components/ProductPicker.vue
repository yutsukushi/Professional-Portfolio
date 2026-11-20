<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  selectedSku: {
    type: String,
    default: '',
  },
  products: {
    type: Array,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  position: {
    type: Object,
    default: () => ({}),
  },
  inputClass: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    required: true,
  },
  listLabel: {
    type: String,
    required: true,
  },
  showNcpBadge: {
    type: Boolean,
    default: false,
  },
  showConfigurableBadge: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'open', 'close', 'select', 'trigger-change'])
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function setInputElement(element) {
  emit('trigger-change', element)
}
</script>

<template>
  <div class="sku-entry">
    <input
      :ref="setInputElement"
      :value="modelValue"
      :class="inputClass"
      type="text"
      :placeholder="placeholder"
      role="combobox"
      aria-autocomplete="list"
      :aria-expanded="active && products.length > 0"
      :aria-controls="id"
      :aria-label="ariaLabel"
      @input="emit('update:modelValue', $event.target.value)"
      @focus="emit('open', $event.currentTarget)"
      @click.stop="emit('open', $event.currentTarget)"
      @keydown.esc="emit('close')"
    />
    <span v-if="showNcpBadge" class="sku-nugget sku-nugget--ncp">
      <b>NCP</b>
    </span>
    <Teleport to="body">
      <div
        v-if="active && products.length > 0"
        :id="id"
        class="sku-product-options"
        :style="position"
        role="listbox"
        :aria-label="listLabel"
      >
        <div
          v-for="product in products"
          :key="product.sku"
          class="sku-product-option"
          role="option"
          :aria-selected="product.configuredSku === selectedSku"
          tabindex="0"
          @mousedown.prevent
          @click.stop="emit('select', product)"
          @keydown.enter.stop="emit('select', product)"
          @keydown.space.prevent.stop="emit('select', product)"
        >
          <div class="supplier-option-description">
            <div class="supplier-option-heading">
              <span><b>{{ product.sku }}</b></span>
              <span
                v-if="showConfigurableBadge && product.productType === 'Configurable'"
                class="supplier-option-badge supplier-option-badge--configurable"
              ><b>Configurable</b></span>
            </div>
            <div class="supplier-option-meta">
              <span class="supplier-option-brand">{{ product.brand }}</span>
              <span class="supplier-option-separator" aria-hidden="true"></span>
              <span class="sku-product-supplier">{{ product.supplier }}</span>
            </div>
          </div>
          <div class="supplier-option-price">
            <span><b>{{ currencyFormatter.format(product.unitCost) }}</b></span>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.sku-entry {
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 0.35rem;
}

.sku-cell-input,
.empty-product-sku-input {
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

.sku-cell-input:focus-visible,
.empty-product-sku-input:focus-visible {
  outline: none;
}

.sku-nugget {
  flex: 0 0 auto;
  padding: 0.12rem 0.3rem;
  white-space: nowrap;
  border-radius: 3px;
  background: #f0f1ed;
  color: #5d6258;
  font-size: 0.52rem;
  font-weight: 600;
}

.sku-nugget--ncp {
  background: #e8e9ff;
  color: #4b4edb;
}

.sku-product-options {
  position: fixed;
  z-index: 1100;
  display: grid;
  box-sizing: border-box;
  padding: 0.25rem;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #dce2dd;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 8px 20px rgb(21 48 32 / 16%);
}

.sku-product-option {
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

.sku-product-option:hover,
.sku-product-option[aria-selected='true'] {
  background: #f0f4ef;
}

.sku-product-option:focus-visible {
  border-radius: 3px;
  outline: 2px solid #7550c8;
  outline-offset: 2px;
}

.supplier-option-description {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.1rem;
  overflow: hidden;
}

.supplier-option-heading,
.supplier-option-meta {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.sku-product-option .supplier-option-heading {
  min-width: 0;
  overflow: hidden;
  flex-wrap: nowrap;
}

.sku-product-option .supplier-option-heading > span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sku-product-option .supplier-option-heading > .supplier-option-badge {
  flex: 0 0 auto;
  overflow: visible;
  text-overflow: clip;
}

.supplier-option-brand {
  color: #747b73;
  font-size: 0.6rem;
  line-height: 1.1;
}

.supplier-option-separator {
  width: 2.5px;
  height: 2.5px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #c8ccc5;
}

.sku-product-supplier {
  color: #60665f;
  font-size: 0.6rem;
}

.supplier-option-badge {
  padding: 0.05rem 0.15rem;
  border-radius: 3px;
  font-size: 0.5rem;
  font-weight: 600;
}

.supplier-option-badge--configurable {
  background: #e7f0f5;
  color: #315d78;
}

.supplier-option-price {
  display: flex;
  flex: 0 0 auto;
  align-self: flex-start;
  flex-direction: column;
  margin-left: auto;
  text-align: right;
  row-gap: 0.25rem;
}
</style>
