<script setup>
import { ref } from 'vue'
import browserBulkExportImage from '../assets/images/erp-visuals/browser-bulk-export.png'
import bulkExportImage from '../assets/images/erp-visuals/export-overview-numbering.png'
import erpFileImage from '../assets/images/erp-visuals/erp-file.png'
import templateFiltersImage from '../assets/images/erp-visuals/template-editor-filter-numbering.png'
import templateEditorImage from '../assets/images/erp-visuals/template-editor-overview-numbering.png'
import templateEditorFieldImage from '../assets/images/erp-visuals/template-editor-mapping-numbering.png'
import browserTemplateEditorImage from '../assets/images/erp-visuals/browser-template-editor.png'
import browserWorkflowDiagramImage from '../assets/images/erp-visuals/workflow-diagram-bg.png'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const erpSolutionGroups = [
  {
    label: 'Template Editor',
    images: [
      {
        src: templateEditorImage,
        alt: 'ERP template editor with field mapping and validation errors',
      },
      {
        src: templateEditorFieldImage,
        alt: 'ERP template editor field mapping showing source and target fields',
      },
    ],
    callouts: [
      { number: '1', title: 'Choose row granularity', description: 'Set whether each purchase order or each line item becomes a row.' },
      { number: '2', title: 'Configure output columns', description: 'Map export columns to source fields and add transformation rules.' },
      { number: '2a', title: 'Handle overflow values', description: 'Route values over the character limit to itemdes1, joined with ~, instead of dropping them.' },
      { number: '3', title: 'Review validation and preview', description: 'Check configuration issues and switch between table and raw CSV previews.' },
      { number: '3a', title: 'Inspect the generated CSV', description: 'Review the raw export sample before using the mapping.' },
    ],
  },
  {
    label: 'Bulk Export',
    images: [
      {
        src: bulkExportImage,
        alt: 'ERP bulk export workflow showing purchase orders and export history',
      },
    ],
    callouts: [
      { number: '1', title: 'Review orders waiting to export', description: 'See purchase orders eligible for the current export batch.' },
      { number: '2', title: 'Download completed exports', description: 'Retrieve generated files from export history.' },
      { number: '3', title: 'Inspect the batch', description: 'Review which purchase orders were included in an export.' },
    ],
  },
  {
    label: 'Template Filters',
    images: [
      {
        src: templateFiltersImage,
        alt: 'ERP template filters showing filename-based filtering options',
      },
    ],
    callouts: [
      { number: '1', title: 'Set exclusion conditions', description: 'Skip purchase orders that match the selected conditions.' },
      { number: '2', title: 'Define output format', description: 'Set file format options and build filenames from available tokens.' },
      { number: '3', title: 'Plan recurring exports - Coming soon', description: 'Configure scheduled exports as recurring delivery becomes available.' },
    ],
  },
]

const imageDialog = ref(null)
const selectedImage = ref(null)

function openImage(image) {
  selectedImage.value = image
  imageDialog.value.showModal()
}

function closeImage() {
  imageDialog.value.close()
}
</script>

<template>
  <div class="erp-page">
    <SiteHeader variant="case-study" />

    <main>
      <h1 class="erp-title">Scaling ERP Exports Through Templates and Automation</h1>
      <p class="case-study-text" style="margin: 0;color: #6b7169;">Replaced hard-coded ERP export implementations with a template-driven system that scales across customer-specific requirements.</p>
      <div class="erp-hero" role="group" aria-label="ERP export process from template configuration to deliverable">
        <figure class="erp-hero-step">
          <img
            class="erp-hero-image"
            :src="browserTemplateEditorImage"
            alt="ERP template editor showing field mappings and validation errors"
          />
          <figcaption>Configure Export Template</figcaption>
        </figure>
        <span class="erp-hero-arrow" aria-hidden="true">
          <svg viewBox="0 0 34 20" fill="none">
            <path d="M2 10h27m-7-7 7 7-7 7" />
          </svg>
        </span>
        <figure class="erp-hero-step">
          <img
            class="erp-hero-image"
            :src="browserBulkExportImage"
            alt="ERP bulk export screen showing purchase orders and export history"
          />
          <figcaption>Run Bulk Export</figcaption>
        </figure>
        <span class="erp-hero-arrow" aria-hidden="true">
          <svg viewBox="0 0 34 20" fill="none">
            <path d="M2 10h27m-7-7 7 7-7 7" />
          </svg>
        </span>
        <figure class="erp-hero-step">
          <img
            class="erp-hero-image erp-hero-image--file"
            :src="erpFileImage"
            alt="ERP-ready deliverable spreadsheet"
          />
          <figcaption>ERP-Ready Deliverable</figcaption>
        </figure>
      </div>
      <section class="case-study-details">
        <div>
          <h5 class="case-study-label">My Role</h5>
          <p class="case-study-text">Product Designer, Developer</p>
        </div>
        <div>
          <h5 class="case-study-label">Collaborators</h5>
          <p class="case-study-text">Product Stakeholder, Backend Engineering</p>
        </div>
        <div>
          <h5 class="case-study-label">Responsibilities</h5>
          <ul class="case-study-text">
            <li>Product design</li>
            <li>UX/UI design</li>
            <li>Front-end development</li>
            <li>API and data modeling</li>
            <li>Backend collaboration</li>
          </ul>
        </div>
      </section>

      <section class="case-study-section">
        <h4>Problem</h4>
        <p class="case-study-text"><b>
          Supporting customer-specific ERP files relied on manual, hard-coded export implementations that weren’t built to evolve alongside changing requirements.</b>
        </p>
        <p class="case-study-text">
          Organizations use a variety of accounting and ERP systems, each with different file formats, metadata requirements, naming conventions, and import processes. While hard-coded exports could support known ERP requirements, we knew new customer requests would quickly expose their limitations. Supporting new formats, business rules, and metadata requirements would increasingly require developer involvement, while users often resorted to manual spreadsheet adjustments before purchase orders could be imported into downstream systems.
        </p>
        <p class="case-study-text">
          The process created friction for administrators responsible for managing exports while making it difficult to adapt to changing customer requirements. Users also lacked visibility into which purchase orders had already been exported, forcing teams to manually track what had been processed.
        </p>
        <div class="erp-problem-diagram-frame">
          <img
            class="erp-problem-diagram"
            :src="browserWorkflowDiagramImage"
            alt="Different customer data fields are consolidated by a template-driven export system into an ERP-ready deliverable"
          />
        </div>
      </section>

      <section class="case-study-section">
        <h4>Opportunity</h4>
        <p class="case-study-text">
          <b>
          Turn ERP exports into something administrators could manage themselves instead of relying on developer support for every new requirement.</b>
        </p>
        <p class="case-study-text">
          Rather than building and maintaining customer-specific export behavior, we saw an opportunity to move export logic into reusable templates. This would allow organizations to adapt to changing file formats, metadata requirements, and business rules by updating configuration instead of requesting custom development.
        </p>
      </section>

      <section class="case-study-section">
        <h4>Key Design Challenge</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            <b>ERP files are inherently complex because organizations often have unique formatting requirements, metadata mappings, and business rules.</b>
          </p>
          <p class="case-study-text">
            To address this, the experience provided validation errors when configurations contained unsupported or incomplete rules, preventing invalid exports from being created. A built-in preview complemented this by showing how valid configurations would affect generated output, giving administrators confidence that exported files would meet downstream ERP requirements.
          </p>
        </div>
      </section>

      <section class="case-study-section">
        <h4>Solution</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            <b>We designed a template-driven export experience that moved export behavior out of code and into administrator-managed templates.</b>
          </p>
          <p class="case-study-text">
            Administrators could create, edit, replace, or remove their organization's default export template, allowing export behavior to evolve alongside changing business requirements. Templates defined file structure, purchase order field mappings, customer-specific metadata, file naming conventions, and export qualification rules.
          </p>
          <p class="case-study-text">
            Once configured, eligible orders were then collected into a bulk export workflow, allowing teams to process accumulated purchase orders in a single action without requiring developer involvement.
          </p>
          <p class="case-study-text">
            To improve visibility, exported purchase orders were tracked within the application, making it easier to identify what had already been processed. Generated files could then be downloaded directly or delivered through SFTP integrations based on organizational needs.
          </p>
        </div>
        <div class="erp-solution-gallery">
          <figure
            v-for="group in erpSolutionGroups"
            :key="group.label"
            class="erp-solution-gallery-item"
          >
            <div class="erp-solution-gallery-content">
              <div class="erp-solution-gallery-images">
                <button
                  v-for="image in group.images"
                  :key="image.src"
                  class="erp-solution-image-button"
                  type="button"
                  :aria-label="`View full-size image: ${image.alt}`"
                  @click="openImage(image)"
                >
                  <img :src="image.src" :alt="image.alt" />
                </button>
              </div>
              <div>
              <h5 class="case-study-label" style="margin: 2rem 0">{{ group.label }}</h5>
              <ul class="erp-solution-callouts" :aria-label="`Callouts for ${group.label}`">
                <li v-for="callout in group.callouts" :key="callout.number" class="erp-solution-callout">
                  <span class="erp-solution-callout-number" aria-hidden="true">{{ callout.number }}</span>
                  <p class="erp-solution-callout-copy">
                    <strong>{{ callout.title }}</strong>
                    {{ callout.description }}
                  </p>
                </li>
              </ul>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section class="case-study-section">
        <h4>Trade-Offs</h4>
        <div class="erp-section-copy">
          <p class="case-study-text"><b>
            Delivering configurable exports before automating them.</b>
          </p>
          <p class="case-study-text"><b>
            We prioritized giving administrators control over export behavior before investing in scheduled automation.</b>
          </p>
          <p class="case-study-text">
            Scheduled exports were explored in the project but introduced additional complexity around job scheduling, monitoring, and delivery reliability. To meet delivery goals, we focused on solving the core challenges of configuration, validation, tracking, and delivery, requiring users to manually initiate exports while establishing a scalable foundation for future automation.
          </p>
        </div>
      </section>
    </main>
    <dialog
      ref="imageDialog"
      class="erp-image-dialog"
      aria-label="Full-size ERP solution image"
      @click="closeImage"
      @close="selectedImage = null"
    >
      <img v-if="selectedImage" :src="selectedImage.src" :alt="selectedImage.alt" />
    </dialog>
  </div>
  <SiteFooter />
</template>

<style scoped>
.erp-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.erp-title {
  margin-block: 0.83em 0.5rem;
  font-size: 1.5em;
}

.erp-problem-diagram-frame {
  width: 100%;
  max-width: 60rem;
  margin: 2rem auto 0;
  overflow: hidden;
}

.erp-problem-diagram {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.erp-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) 2rem minmax(0, 0.9fr) 2rem minmax(0, 1.15fr);
  align-items: center;
  gap: clamp(0.75rem, 1.8vw, 1.5rem);
  width: 100%;
  margin: 5rem 0;
}

.erp-hero-step {
  min-width: 0;
  margin: 0;
  text-align: center;
}

.erp-hero-image {
  display: block;
  width: 100%;
  height: clamp(150px, 22vw, 245px);
  object-fit: contain;
  transform: scale(1.1);
}

.erp-hero-image--file {
  transform: scale(0.9);
}

.erp-hero-step figcaption {
  margin-top: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.erp-hero-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
}

.erp-hero-arrow svg {
  display: block;
  width: 100%;
  max-width: 2.5rem;
  height: auto;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@media (max-width: 768px) {
  .erp-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
  }

  .erp-hero-image {
    height: clamp(160px, 45vw, 220px);
  }

  .erp-hero-arrow {
    height: 1.5rem;
  }

  .erp-hero-arrow svg {
    width: 1.5rem;
    transform: rotate(90deg);
  }
}

.erp-solution-gallery {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.5rem;
  width: 100%;
  margin: 3rem 0;
}

.erp-solution-gallery-item {
  min-width: 0;
  margin: 0;
}

.erp-solution-gallery-caption {
  margin: 0 0 1rem;
}

.erp-solution-gallery-content {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(15rem, 2fr);
  align-items: center;
  gap: clamp(1rem, 2vw, 2rem);
}

.erp-solution-gallery-images {
  display: grid;
  gap: 1rem;
  min-width: 0;
}

.erp-solution-callouts {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.erp-solution-callout {
  display: grid;
  grid-template-columns: 2.25rem minmax(0, 1fr);
  align-items: start;
  gap: 0.75rem;
}

.erp-solution-callout-number {
  display: grid;
  width: 1.75rem;
  height: 1.75rem;
  place-items: center;
  border-radius: 50%;
  background: #414141;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
}

.erp-solution-callout-copy {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}

.erp-solution-callout-copy strong {
  display: block;
  margin-bottom: 0.2rem;
}

.erp-solution-image-button {
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 6px;
  background: transparent;
  cursor: zoom-in;
  transition: transform 180ms ease;
}

.erp-solution-image-button:hover,
.erp-solution-image-button:focus-visible {
  transform: translateY(-3px);
}

.erp-solution-image-button img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.erp-solution-image-button:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}

.erp-image-dialog {
  position: fixed;
  width: fit-content;
  max-width: 96vw;
  max-height: 96vh;
  padding: 0;
  overflow: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.erp-image-dialog::backdrop {
  background: rgb(20 24 20 / 82%);
}

.erp-image-dialog > img {
  display: block;
  max-width: min(92vw, 90rem);
  max-height: 82vh;
  object-fit: contain;
  cursor: zoom-out;
}

@media (prefers-reduced-motion: reduce) {
  .erp-solution-image-button {
    transition: none;
  }
}

@media (max-width: 768px) {
  .erp-solution-gallery-content {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
