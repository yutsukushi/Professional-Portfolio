<script setup>
import MaterialProcurementDemo from './components/MaterialProcurementDemo.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <SiteHeader variant="case-study" />
  <main>
    <h2>Turning a Project Table into a Material Workspace</h2>
    <p class="case-study-text">Material Procurement Table - Peregrin by eParts Services LLC.</p>
    <MaterialProcurementDemo />
    <section class="case-study-details">
      <div>
        <h5 class="case-study-label">My Role</h5>
        <p class="case-study-text">Product Designer, Developer</p>
      </div>
      <div>
        <h5 class="case-study-label">Collaborators</h5>
        <p class="case-study-text">Stakeholder, Backend Developers</p>
      </div>
      <div>
        <h5 class="case-study-label">Responsibilities</h5>
        <ul class="case-study-text">
          <li>UX/UI Design</li>
          <li>Frontend Development</li>
          <li>API and data modeling</li>
        </ul>
      </div>
    </section>
    <section>
      <h4>The Challenge</h4>
      <p class="case-study-text"><b>The project table was already where users managed materials, but making changes to those materials wasn't always straightforward.</b> Once products were added, updating project-specific information often meant returning to sourcing workflows, creating new product entries, or reworking imported data.</p>
      <p class="case-study-text">Purchasing information such as supplier availability, lead times, pricing, and discounts also lived elsewhere in the platform, making it difficult to evaluate sourcing decisions alongside the materials being managed.</p>
      <p class="case-study-text">Users also worked with catalog, non-catalog, and configurable products, each with its own workflow, making it difficult to manage materials consistently from a single place.</p>
    </section>
    <section>
      <h4>Opportunity</h4>
      <p class="case-study-text"><b>Project tables already existed throughout the ecosystem, but they were primarily designed for tracking materials rather than managing them.</b></p>
      <p class="case-study-text">I saw an opportunity to build on an existing project table pattern and expand it where users could edit project-specific product information and evaluate purchasing decisions without leaving the page.</p>
    </section>
    <section>
      <h4>Solution</h4>
      <p class="case-study-text"><b>Give users more control over the materials they've added to their projects.</b></p>
      <p class="case-study-text">I expanded the project table to support catalog, non-catalog, and configurable products within a consistent experience. Users could edit project-specific details such as brands, quantities, tags, and supplier notes directly from the row rather than returning to sourcing workflows or creating new entries.</p>
      <p class="case-study-text">Purchasing information such as supplier availability, lead times, pricing, discounts, and supplier options surfaced alongside project material data, allowing sourcing decisions to happen earlier in the workflow without leaving the project.</p>
    </section>
    <section>
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
    <section>
      <h4>Impact</h4>
      <h4 class="case-study-subheading">Workflow Impact</h4>
      <ul>
        <li>Enabled users to edit project-specific product information directly within the table.</li>
        <li>Surfaced purchasing context alongside project materials, allowing sourcing decisions to happen earlier in the workflow.</li>
        <li>Supported catalog, non-catalog, and configurable products within a consistent experience.</li>
      </ul>
      <h4 class="case-study-subheading">Technical/Workflow Impact</h4>
      <ul>
        <li>Expanded an existing project table pattern into a more capable material management workspace.</li>
        <li>Established support for editable project-level product data independent of source product data.</li>
        <li>Created a reusable table framework that could support future procurement capabilities.</li>
      </ul>
    </section>
    <SiteFooter />
  </main>
</template>

<style scoped>
</style>
