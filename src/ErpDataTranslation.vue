<script setup>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
  <div class="erp-page">
    <SiteHeader variant="case-study" />

    <main>
      <h1>Self-Service ERP Data Translation</h1>
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

      <section>
          <h4>Problem</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            Supporting customer-specific ERP files relied on manual, hard-coded export implementations that weren’t built to evolve alongside changing requirements.
          </p>
          <p class="case-study-text">
            Organizations use a variety of accounting and ERP systems, each with different file formats, metadata requirements, naming conventions, and import processes. While hard-coded exports could support known ERP requirements, we knew new customer requests would quickly expose their limitations. Supporting new formats, business rules, and metadata requirements would increasingly require developer involvement, while users often resorted to manual spreadsheet adjustments before purchase orders could be imported into downstream systems.
          </p>
          <p class="case-study-text">
            The process created friction for administrators responsible for managing exports while making it difficult to adapt to changing customer requirements. Users also lacked visibility into which purchase orders had already been exported, forcing teams to manually track what had been processed.
          </p>
        </div>
      </section>

      <section>
        <h4>Opportunity</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            Turn ERP exports into something administrators could manage themselves instead of relying on developer support for every new requirement.
          </p>
          <p class="case-study-text">
            Rather than building and maintaining customer-specific export behavior, we saw an opportunity to move export logic into reusable templates. This would allow organizations to adapt to changing file formats, metadata requirements, and business rules by updating configuration instead of requesting custom development.
          </p>
        </div>
      </section>

      <section>
        <h4>Key Design Challenge</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            ERP files are inherently complex because organizations often have unique formatting requirements, metadata mappings, and business rules.
          </p>
          <p class="case-study-text">
            To address this, the experience provided validation errors when configurations contained unsupported or incomplete rules, preventing invalid exports from being created. A built-in preview complemented this by showing how valid configurations would affect generated output, giving administrators confidence that exported files would meet downstream ERP requirements.
          </p>
        </div>
      </section>

      <section>
        <h4>Solution</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            We designed a template-driven export experience that moved export behavior out of code and into administrator-managed templates.
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
      </section>

      <section>
        <h4>Trade-Offs</h4>
        <div class="erp-section-copy">
          <p class="case-study-text">
            Delivering configurable exports before automating them.
          </p>
          <p class="case-study-text">
            We prioritized giving administrators control over export behavior before investing in scheduled automation.
          </p>
          <p class="case-study-text">
            Scheduled exports were explored in the project but introduced additional complexity around job scheduling, monitoring, and delivery reliability. To meet delivery goals, we focused on solving the core challenges of configuration, validation, tracking, and delivery, requiring users to manually initiate exports while establishing a scalable foundation for future automation.
          </p>
        </div>
      </section>
    </main>
  </div>
  <SiteFooter />
</template>

<style scoped>
</style>
