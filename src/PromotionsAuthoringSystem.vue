<script setup>
import createPromotionImage from '../assets/images/promos-visuals/create-new-promotion-full-form-2.png'
import createPromotionHeroImage from '../assets/images/promos-visuals/create-new-promotion-1(1).png'
import legacyPromosImage from '../assets/images/promos-visuals/legacy-promos.jpg'
import promotionOverviewImage from '../assets/images/promos-visuals/Promotion-overview(3).png'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

</script>

<template>
<div class="promotions-page">
    <SiteHeader variant="case-study" />

    <main>
      <h2 class="case-study-title">Promotions Authoring System</h2>
      <p class="case-study-summary">Built a self-service authoring and management interface that allows internal teams to create, configure, and monitor promotional campaigns without engineering support.</p>
      <div class="promotions-hero" role="group" aria-label="Promotion creation and management screens">
        <img
          class="promotions-hero-image promotions-hero-image--create"
          :src="createPromotionHeroImage"
          alt="Create New Promotion form showing promotion setup and eligibility options"
        />
        <img
          class="promotions-hero-image promotions-hero-image--overview"
          :src="promotionOverviewImage"
          alt="Promotion Management overview showing active promotions, redemption, sales, and spend"
        />
      </div>
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
          <p class="case-study-text">UX/UI Design, Front-End Development, Backend Collaboration</p>
        </div>
        <div>
          <h5 class="case-study-label">Timeline</h5>
          <p class="case-study-text">2024 (6 months)</p>
        </div>
      </section>

      <section class="case-study-section">
        <h4>Problem</h4>
        <p class="case-study-text">Promotions were an underutilized feature due to both the complexity of the interface and the financial risk involved with setting one up.</p>
        <p class="case-study-text">Creating a promotion required users to manage discounts, product eligibility, customer audiences, and restrictions. Because many of these settings were interconnected and hidden, users weren't aware of how changes in one area affected another. The result was an experience that felt difficult to navigate and even harder to trust.</p>
        <p class="case-study-text">With revenue and profitability directly tied to promotion behavior, users needed confidence that the promotions they created would work as intended.</p>
        <img
          class="promotion-problem-image"
          :src="legacyPromosImage"
          alt="Legacy promotion editor showing shipping promotion settings, eligibility rules, discounts, customer messages, and assignment filters"
        />
      </section>

      <section class="case-study-section">
        <h4>Opportunity</h4>
        <p class="case-study-text">The flexibility of the promotion feature was valuable, but it also introduced complexity. Discounts, audience targeting, and eligibility requirements all had to work together for a promotion to behave correctly.</p>
        <p class="case-study-text">The opportunity was to improve both promotion creation and promotion management. Users could create promotions from a centralized workspace and monitor performance through a dedicated management dashboard.</p>
        <p class="case-study-text">This would make promotion configuration easier to understand while giving teams better visibility into promotion activity after launch.</p>
        
      </section>

      <section class="case-study-section">
        <h4>Solution</h4>
          <p class="case-study-text">Support the full lifecycle of a promotion, from configuration through ongoing management.</p>

          <h4 class="case-study-subheading">Create promotions without losing context</h4>
          <p class="case-study-text">Promotion creation was redesigned into a single workspace organized around the major components of a promotion. Rather than navigating multiple screens, users could configure discounts, targeting, product assignments, restrictions, and messaging while maintaining visibility into the promotion as a whole.</p>
          <p class="case-study-text">Many promotion settings depended on one another, so dependencies and restrictions surfaced directly in context. Sentence-style forms and deferred validation helped make complex business rules easier to understand without interrupting the workflow.</p>
          <div
            class="promotion-form-preview"
            role="region"
            aria-label="Scrollable preview of the create promotion form"
            tabindex="0"
          >
            <img
              :src="createPromotionImage"
              alt="Full promotion creation form with sections for discount, duration, product and customer eligibility, rules, and messages"
            />
          </div>

          <h4 class="case-study-subheading">Manage promotions after launch</h4>
          <p class="case-study-text">A dedicated management dashboard gave teams a centralized place to monitor promotions after launch. Redemptions, net sales, and promotional spend surfaced alongside active promotions, providing visibility into promotion activity without leaving the workflow.</p>
      </section>

      <section class="case-study-section">
          <h4>Tradeoffs</h4>
          <h4 class="case-study-subheading">Making complexity understandable</h4>
          <p class="case-study-text">Visually, the legacy interface was vertically shorter but it made the interface harder to navigate and understand. To bring clarity to the user, the interface became a scrolling experience to ensure all information was accessible.</p>
          <p class="case-study-text">Related functionality was grouped into dedicated sections and dependencies were surfaced in context, helping users understand how settings worked together while preserving the flexibility of the promotion engine.</p>

          <h4 class="case-study-subheading">Shipping confidence over schedule</h4>
          <p class="case-study-text">Promotions directly affected pricing, margins, and revenue, which meant configuration accuracy was critical. With a large number of interconnected settings and dependencies, small mistakes could lead to unintended business outcomes.</p>
          <p class="case-study-text">As development progressed, additional time was spent refining workflows, validating edge cases, and ensuring promotion configurations behaved as expected. While this pushed the project beyond its original timeline, it helped provide users with a tool they could trust when creating and managing promotions.</p>
      </section>

      <section class="case-study-section">
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
.promotions-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.promotions-hero {
  position: relative;
  width: 100%;
  max-width: 53rem;
  aspect-ratio: 1.75;
  margin: 4rem auto;
}

.promotions-hero-image {
  position: absolute;
  display: block;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgb(20 24 20 / 16%);
}

.promotions-hero-image--create {
  z-index: 1;
  top: 0;
  left: 0;
  width: 56%;
}

.promotions-hero-image--overview {
  z-index: 2;
  top: 15%;
  right: 0;
  width: 64%;
}

.promotion-problem-image {
  display: block;
  max-width:40rem;
  width: 100%;
  height: auto;
  margin: 2rem auto;
}

.promotion-form-preview {
  max-width: 48rem;
  max-height: min(34rem, 70vh);
  margin: 1.5rem auto 2.5rem;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgb(32 39 32 / 8%);
}

.promotion-form-preview:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.promotion-form-preview img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 700px) {
  .promotions-hero {
    display: grid;
    aspect-ratio: auto;
    gap: 1.25rem;
  }

  .promotions-hero-image {
    position: static;
    width: 100%;
  }
}
</style>
