<script setup>
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

</script>

<template>
<div class="promotions-page">
    <SiteHeader variant="case-study" />

    <main>
      <h1>Promotions Authoring System</h1>
      <section class="case-study-details" aria-label="Project details">
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
            <li>Product Design</li>
            <li>UX/UI Design</li>
            <li>Front-End Development</li>
            <li>API &amp; Data Modeling</li>
            <li>Backend Collaboration</li>
          </ul>
        </div>
      </section>

      <section>
        <h4>Problem</h4>
        <p class="case-study-text">Promotions were an underutilized feature due to both the complexity of the interface and the financial risk involved with setting one up.</p>
        <p class="case-study-text">Creating a promotion required users to manage discounts, product eligibility, customer audiences, restrictions, and a variety of business rules. Because many of these settings were interconnected, users often struggled to understand how changes in one area affected another. The result was an experience that felt difficult to navigate and even harder to trust.</p>
        <p class="case-study-text">With revenue and profitability directly tied to promotion behavior, users needed confidence that the promotions they created would work as intended.</p>
      </section>

      <section>
        <h4>Opportunity</h4>
        <p class="case-study-text">The flexibility of the promotion engine was valuable, but it also introduced complexity. Discounts, audience targeting, eligibility requirements, and business rules all had to work together for a promotion to behave correctly.</p>
        <p class="case-study-text">The opportunity was to improve both promotion creation and promotion management. Rather than treating configuration and oversight as separate workflows, users could create promotions from a centralized workspace and monitor performance through a dedicated management dashboard.</p>
        <p class="case-study-text">This would make promotion configuration easier to understand while giving teams better visibility into promotion activity after launch.</p>
        
      </section>

      <section>
        <h4>Solution</h4>
          <p class="case-study-text">Support the full lifecycle of a promotion, from configuration through ongoing management.</p>

          <h4 class="case-study-subheading">Create promotions without losing context</h4>
          <p class="case-study-text">Promotion creation was redesigned into a single workspace organized around the major components of a promotion. Rather than navigating multiple screens, users could configure discounts, targeting, product assignments, restrictions, and messaging while maintaining visibility into the promotion as a whole.</p>
          <p class="case-study-text">Many promotion settings depended on one another, so dependencies and restrictions surfaced directly in context. Sentence-style forms and deferred validation helped make complex business rules easier to understand without interrupting the workflow.</p>

          <h4 class="case-study-subheading">Manage promotions after launch</h4>
          <p class="case-study-text">A dedicated management dashboard gave teams a centralized place to monitor promotions after launch. Redemptions, net sales, and promotional spend surfaced alongside active promotions, providing visibility into promotion activity without leaving the workflow.</p>

          <h4 class="case-study-subheading">Manage promotions after launch</h4>
          <p class="case-study-text">Creating a promotion was only part of the workflow. Teams also needed visibility into promotions after they went live.</p>
          <p class="case-study-text">A dedicated promotion management experience surfaced active promotions alongside metrics such as redemptions, net sales, and promotional spend, providing a centralized place to review promotion activity after launch.</p>
          <p class="case-study-text">This brought promotion performance metrics into the same workflow, giving teams a single location to review active promotions and their associated results.</p>
      </section>

      <section>
          <h4>Tradeoffs</h4>
          <h4 class="case-study-subheading">Making complexity understandable</h4>
          <p class="case-study-text">Promotions supported a wide range of business rules and dependencies. The challenge wasn’t deciding which capabilities to remove, but presenting them in a way that users could understand and configure correctly.</p>
          <p class="case-study-text">Related functionality was grouped into dedicated sections and dependencies were surfaced in context, helping users understand how settings worked together while preserving the flexibility of the promotion engine.</p>

          <h4 class="case-study-subheading">Shipping confidence over schedule</h4>
          <p class="case-study-text">Promotions directly affected pricing, margins, and revenue, which meant configuration accuracy was critical. With a large number of interconnected settings and dependencies, small mistakes could lead to unintended business outcomes.</p>
          <p class="case-study-text">As development progressed, additional time was spent refining workflows, validating edge cases, and ensuring promotion configurations behaved as expected. While this pushed the project beyond its original timeline, it helped provide users with a tool they could trust when creating and managing promotions.</p>
      </section>

      <section>
        <h4>Looking Back</h4>
          <p class="case-study-text">Because promotions were originally an underutilized feature, the metric I most wish I had collected was promotion adoption. Understanding whether promotion creation increased after launch would have provided the clearest measure of whether the redesign successfully reduced friction and complexity.</p>
          <p class="case-study-text">Additional metrics I would have tracked include:</p>
            <ul class="case-study-text">
              <li>Promotion creation completion rates and drop-off points</li>
            <li>How frequently users return to edit existing promotions</li>
            <li>Whether the management dashboard changed how teams monitored promotions after launch</li>
            <li>Which types of promotions were created most frequently and why</li>
          </ul>
          <p class="case-study-text">While I can demonstrate the workflow that was delivered, these measurements would have provided a clearer understanding of its long-term adoption and effectiveness.</p>
      </section>
    </main>
  </div>
  <SiteFooter />
</template>

<style scoped>
</style>
