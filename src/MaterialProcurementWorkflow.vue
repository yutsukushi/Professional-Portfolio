<script setup>
import { ref } from 'vue'
import projectTableNew from '../assets/images/table-visuals/table-new.png'
import projectTableOld from '../assets/images/table-visuals/table-old.png'
import productSearchInteraction from '../assets/images/table-visuals/Frame 70.png'
import supplierOffersInteraction from '../assets/images/table-visuals/Frame 71.png'
import supplierSavingsInteraction from '../assets/images/table-visuals/Frame 72.png'
import supplierAvailabilityInteraction from '../assets/images/table-visuals/Frame 75.png'
import supplierAvailabilityMobileInteraction from '../assets/images/table-visuals/Frame 76.png'
import procurementWorkflowExample from '../assets/images/table-visuals/Group 65.png'
import MaterialProcurementDemo from './components/MaterialProcurementDemo.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const projectTableImages = [
  {
    src: projectTableOld,
    alt: 'Project table - old design',
    fit: 'contain',
    label: 'Before: Tracking Materials',
    points: [
      'Limited editing within the project table',
      'Product changes required navigating to separate workflows',
      'Procurement information was disconnected from the material management'
    ],
  },
  {
    src: projectTableNew,
    alt: 'Project table - new design',
    fit: 'cover',
    prominent: true,
    label: 'After: Managing Materials',
    points: [
      'Edit and manage materials directly in the table',
      'Compare suppliers, pricing, and availability in context',
      'Replace products without leaving the workflow',
      'Manage catalog, non-catalog, and configurable products in a consistent experience'
    ],
  },
]

const keyInteractionDiagram = {
  src: supplierAvailabilityInteraction,
  alt: 'Material row displaying supplier availability and a savings action',
}

const keyInteractions = [
  {
    title: 'Search and configure products',
    description: 'Manage catalog, non-catalog, and configurable products from a single workflow without leaving the workspace.',
    src: productSearchInteraction,
    alt: 'Product search results with configurable catalog items',
  },
  {
    title: 'Compare supplier offers',
    description: 'Compare supplier pricing, availability, and product alertsdirectly within the project table.',
    src: supplierOffersInteraction,
    alt: 'Supplier offer list showing stock, alerts, prices, and savings',
  },
  {
    title: 'Review savings before switching',
    description: 'Review recommended supplier substitutions and switch instantly when savings opportunities are identified.',
    src: supplierSavingsInteraction,
    alt: 'Supplier comparison popover with price, stock, alerts, and switch action',
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
  <SiteHeader variant="case-study" />
  <main>
    <h2 class="case-study-title">Turning a Project Table into a Material Workspace</h2>
    <p class="case-study-text case-study-summary">For a procurement and material management platform used by construction contractors.</p>
    <MaterialProcurementDemo />
    <section class="case-study-details case-study-section">
      <div>
        <h5 class="case-study-label">My Role</h5>
        <div class="case-study-detail-lines">
          <p class="case-study-text">Product Designer</p>
          <p class="case-study-text">Frontend Developer</p>
        </div>
      </div>
      <div>
        <h5 class="case-study-label">Collaborators</h5>
        <div class="case-study-detail-lines">
          <p class="case-study-text">Product Stakeholder</p>
          <p class="case-study-text">Backend Engineers</p>
        </div>
      </div>
      <div>
        <h5 class="case-study-label">Responsibilities</h5>
        <ul class="case-study-text case-study-detail-lines">
          <li>UX/UI Design</li>
          <li>Frontend Development</li>
          <li>API &amp; Data Modeling</li>
        </ul>
      </div>
      <div>
        <h5 class="case-study-label">Timeline</h5>
        <div class="case-study-detail-lines">
          <p class="case-study-text">2026 (1 month)</p>
          <!-- <p class="case-study-text">1 month</p> -->
        </div>
      </div>
    </section>
    <section class="case-study-section">
      <h4>Problem</h4>
      <p class="case-study-text"><b>The project table was already where users managed materials, but making changes to those materials wasn't always straightforward.</b> Once products were added, updating project-specific information often meant returning to sourcing workflows, creating new product entries, or reworking imported data.</p>
      <p class="case-study-text">Purchasing information such as supplier availability, lead times, pricing, and discounts also lived elsewhere in the platform, making it difficult to evaluate sourcing decisions alongside the materials being managed.</p>
      <p class="case-study-text">Users also worked with catalog, non-catalog, and configurable products, each with its own workflow, making it difficult to manage materials consistently from a single place.</p>
    </section>
    <section class="case-study-section">
      <h4>Opportunity</h4>
      <p class="case-study-text"><b>Project tables already existed throughout the ecosystem, but they were primarily designed for tracking materials rather than managing them.</b></p>
      <p class="case-study-text">I saw an opportunity to build on an existing project table pattern and expand it into a workspace where users could edit project-specific product information and evaluate purchasing decisions without leaving the page.</p>
    </section>
    <section class="case-study-section">
      <h4>Design Exploration</h4>
      <img class="design-exploration-image" src="../assets/images/table-visuals/interaction-concept.png" alt="Project table design exploration" />
      <p class="case-study-text"><b>Early exploration of the project table design focused on creating a unified experience instead of forcing users into separate pages.</b></p>
      <p class="case-study-text"><b>Key areas explored:</b></p>
      <ul class="case-study-text">
        <li>Inline material replacement/editing</li>
        <li>Embedded catalog search and product selection</li>
        <li>Supplier selection and comparison workflows</li>
        <li>Purchasing context such as availability, lead times, and pricing</li>
        <li>Bulk actions for managing multiple materials simultaneously</li>
      </ul>
    </section>
    <section class="case-study-section">
      <h4>Solution</h4>
      <p class="case-study-text"><b>Enable users to edit, replace, and source project materials directly from the table.</b></p>
      <p class="case-study-text">I expanded the project table to support catalog, non-catalog, and configurable products within a consistent experience. Users could edit project-specific details such as brands, quantities, tags, and supplier notes directly from the row rather than returning to sourcing workflows or creating new entries.</p>
      <p class="case-study-text">Purchasing information such as supplier availability, lead times, pricing, discounts, and supplier options was displayed alongside project material data, allowing sourcing decisions to happen earlier in the workflow without leaving the project.</p>
      <div class="project-table-gallery">
        <figure
          v-for="image in projectTableImages"
          :key="image.src"
          class="project-table-gallery-item"
        >
          <button
            class="project-table-image-button"
            :class="[
              `project-table-image-button--${image.fit}`,
              { 'project-table-image-button--prominent': image.prominent },
            ]"
            type="button"
            :aria-label="`View full-size image: ${image.alt}`"
            @click="openImage(image)"
          >
            <span class="project-table-image-frame">
              <img :src="image.src" :alt="image.alt" />
              <span class="project-table-image-helper" aria-hidden="true">Click to view full image</span>
            </span>
          </button>
          <figcaption class="project-table-gallery-caption">
            <h5 class="case-study-label">{{ image.label }}</h5>
            <ul class="case-study-text">
              <li v-for="point in image.points" :key="point">{{ point }}</li>
            </ul>
          </figcaption>
        </figure>
      </div>
      <section class="material-workflow-spaced-section">
        <h4 class="case-study-subheading">From Static Material Rows to Procurement Workflows</h4>
        <p>A material row originally functioned as a record of project materials. Procurement activities such as supplier comparison, product replacement, and pricing review required navigating to separate workflows.</p>
        <section class="material-workflow-spaced-section">
          <h4 class="case-study-subheading">Legacy Material Row</h4>
          <img
            class="design-exploration-image"
            :src="procurementWorkflowExample"
            alt="Material row displaying product details, supplier information, and procurement values"
          />
          <p class="case-study-text material-row-description">The redesigned row became the entry point for managing materials, suppliers, and purchasing decisions in context.</p>
        </section>
        </section>
      <section class="key-interactions" aria-labelledby="key-interactions-title">
        <h4 id="key-interactions-title" class="case-study-subheading">Key Interactions</h4>
        <p class="case-study-text">Procurement workflows were embedded directly into each material row, allowing users to source products, compare suppliers, and act on cost-saving opportunities without leaving the workspace.</p>
        <div
          class="key-interactions-scroll"
        >
          <div class="key-interaction-diagram">
            <picture class="key-interaction-source">
              <source
                media="(max-width: 768px)"
                :srcset="supplierAvailabilityMobileInteraction"
              />
              <img
                class="key-interaction-source-image"
                :src="keyInteractionDiagram.src"
                :alt="keyInteractionDiagram.alt"
              />
            </picture>
            <div class="key-interactions-grid">
              <article
                v-for="interaction in keyInteractions"
                :key="interaction.title"
                class="key-interaction-card"
              >
                <div class="key-interaction-annotation">
                  <h5 class="case-study-label">{{ interaction.title }}</h5>
                  <p class="case-study-text">{{ interaction.description }}</p>
                </div>
                <img
                  class="key-interaction-image"
                  :src="interaction.src"
                  :alt="interaction.alt"
                />
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="case-study-section">
      <h4>Trade-offs</h4>
      <p class="case-study-text"><b>Building the table wasn’t without challenges. The biggest blockers came from choosing between custom column resizing and responsive layouts, and deciding how much information belonged in a single product row.</b></p>
      <h4 class="case-study-subheading">Responsive tables over custom column resizing</h4>
      <p class="case-study-text"><b>Giving users more control came at the expense of consistency.</b></p>
      <p class="case-study-text">One of the earliest challenges was supporting custom column resizing while keeping the table responsive. Although column resizing would have given users more control over their workspace, fixed column widths quickly created layout issues as the table adapted to different screen sizes and viewport widths.</p>
      <p class="case-study-text">Rather than allowing layouts to become difficult to manage across devices, I prioritized responsive behavior and column visibility controls. Users could still customize the information most relevant to them while the table remained flexible and predictable.</p>
      <h4 class="case-study-subheading">Information density over usability</h4>
      <p class="case-study-text"><b>Each product row contains a mix of purchasing information and project-specific product details that users rely on to manage materials within their projects.</b></p>
      <p class="case-study-text">Procurement decisions depend on factors such as pricing, availability, lead times, and discounts, but users also need visibility into project-specific product information to ensure materials meet the requirements of their project.</p>
      <p class="case-study-text">Reducing the amount of visible information would have simplified the interface, but it would have also made it harder for users to review and manage the product details they were actively working with.</p>
      <p class="case-study-text">Because contractors are already accustomed to working with spreadsheets, schedules, and other information-dense tools, I chose to keep this information visible within the table and support horizontal scrolling. This allowed users to evaluate purchasing information and manage project-specific product details from the same workspace without constantly opening secondary views.</p>
    </section>
    <section class="case-study-section">
      <h4>Impact</h4>
      <h4 class="case-study-subheading">Workflow Impact</h4>
      <ul class="case-study-text">
        <li>Enabled users to edit project-specific product information directly within the table.</li>
        <li>Surfaced purchasing context alongside project materials, allowing sourcing decisions to happen earlier in the workflow.</li>
        <li>Supported catalog, non-catalog, and configurable products within a consistent experience.</li>
      </ul>
      <h4 class="case-study-subheading">Technical/Workflow Impact</h4>
      <ul class="case-study-text">
        <li>Expanded an existing project table pattern into a more capable material management workspace.</li>
        <li>Established support for editable project-level product data independent of source product data.</li>
        <li>Created a reusable table framework that could support future procurement capabilities.</li>
      </ul>
    </section>
    <dialog
      ref="imageDialog"
      class="project-image-dialog"
      aria-label="Full-size project image"
      @click="closeImage"
      @close="selectedImage = null"
    >
      <img v-if="selectedImage" :src="selectedImage.src" :alt="selectedImage.alt" />
    </dialog>
    <SiteFooter />
  </main>
</template>

<style scoped>
.material-workflow-spaced-section {
  margin: 4rem 0;
}

.material-row-description {
  margin: 16px 0;
}

.design-exploration-image {
  width: 100%;
  max-width: 90rem;
  margin: 1rem 0;
}

.project-table-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4rem;
  width: 100%;
  margin: 3rem 0;
}

.project-table-gallery-item {
  min-width: 0;
  margin: 0;
}

.key-interactions {
  margin-top: 3rem;
}

.key-interactions-scroll {
  overflow-x: visible;
}

.key-interaction-diagram {
  padding: 1.25rem;
  border: 1px solid #dfe3dc;
  border-radius: 8px;
  background: #fff;
  /* box-shadow: 0 2px 8px rgb(32 39 32 / 8%); */
}

.key-interaction-source {
  display: block;
}

.key-interaction-source-image {
  display: block;
  width: 100%;
  height: auto;
}

.key-interactions-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 0.75rem;
}

.key-interaction-card {
  min-width: 0;
  display: grid;
  grid-template-areas:
    "image"
    "annotation";
}

.key-interaction-annotation {
  grid-area: annotation;
}

.key-interaction-card .case-study-label {
  margin: 0 0 0.75rem;
}

.key-interaction-card .case-study-text {
  margin: 0;
}

.key-interaction-image {
  display: block;
  grid-area: image;
  width: 100%;
  aspect-ratio: 16 / 10;  /* border: 1px solid #dfe3dc; */
  /* border-radius: 6px; */
  background: #fff;
  margin-bottom: 0.75rem;
  object-fit: contain;
}

.project-table-gallery-caption ul {
  margin: 0;
}

.project-table-image-button {
  display: block;
  width: 100%;
  padding: 0.65rem;
  border: 1px solid #dfe3dc;
  border-radius: 8px;
  background: #fff;
  /* box-shadow: 0 2px 8px rgb(32 39 32 / 8%); */
  cursor: zoom-in;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.project-table-image-frame {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 4px;
  background: #fff;
}

.project-table-image-button--prominent {
  border-color: #c3d0c4;
  background: #f1f7f3;
  /* box-shadow: 0 3px 10px rgb(32 39 32 / 12%); */
}

.project-table-image-helper {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  padding: 0.35rem 0.55rem;
  border-radius: 4px;
  background: rgb(32 39 32 / 85%);
  color: #fff;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.2;
  pointer-events: none;
}

.project-table-image-button:hover,
.project-table-image-button:focus-visible {
  /* box-shadow: 0 5px 14px rgb(32 39 32 / 12%); */
  transform: translateY(-3px);
}

.project-table-image-button img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.15);
}

.project-table-image-button--contain img {
  object-fit: contain;
}

.project-table-image-button--cover img {
  object-position: 9% center;
  transform-origin: 9% center;
}

.project-table-image-button:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
}

.project-image-dialog {
  position: fixed;
  width: fit-content;
  max-width: 96vw;
  max-height: 96vh;
  padding: 0;
  overflow: auto;
  border: 0;
  border-radius: 0;
  background: white;
}

.project-image-dialog::backdrop {
  background: rgb(20 24 20 / 82%);
}

.project-image-dialog > img {
  display: block;
  max-width: min(92vw, 90rem);
  max-height: 82vh;
  object-fit: contain;
  cursor: zoom-out;
}

@media (max-width: 600px) {
  .project-table-gallery {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .key-interaction-diagram {
    padding: 0.75rem;
    border: 0;
    box-shadow: none;
  }

  .key-interactions-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .key-interaction-card {
    padding-top: 1.25rem;
    border-top: 1px solid #dfe3dc;
    grid-template-areas:
      "annotation"
      "image";
  }

  .key-interaction-image {
    width: 75%;
    margin: 0.75rem auto 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-table-image-button {
    transition: none;
  }
}
</style>
