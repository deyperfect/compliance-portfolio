<script setup>
// You can import icons or simple components here if needed in the future
</script>

<template>
  <!-- Landing/Hero Section -->
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-9 mx-auto text-center">
          <h1 class="landing-title mb-3">Virtual Numbers Regulatory Database</h1>
          <p class="landing-subtitle mx-auto" style="max-width: 800px;">
            A centralized knowledge base that consolidates country-specific regulations, documentation requirements, and supplier information into a single searchable resource, enabling support teams to respond to customer inquiries faster and with greater accuracy.
          </p>
        </div>
      </div>
    </div>
  </section>



  <!-- Main Content Case Study Section -->
  <section id="project-details" class="project-section py-5">
    <div class="container" style="max-width: 900px;">
      
      <!-- Overview & Objective -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">Project Overview</h2>
        <p>
            Supporting customers purchasing virtual numbers requires navigating country-specific regulations that change frequently and vary by provider. To improve accuracy and response times, I developed a centralized regulatory knowledge base in Notion that consolidates compliance requirements, supplier information, and process guidance into a single, searchable source of truth.
        </p>
        <p>
            The solution replaced fragmented documentation spread across emails, PDFs, government websites, and shared folders with a structured, maintainable database. By organizing regulatory requirements, visualizing key workflows, and continuously updating information from official sources and vendor communications, the support team can quickly identify documentation requirements, eligibility restrictions, and sourcing options while providing faster and more consistent customer support.
        </p>
            <p>
            This project demonstrates my ability to combine research, knowledge management, process documentation, and operational improvement to create scalable solutions that enhance both compliance and customer experience.
        </p>
        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">The Objective</h5>
          <p class="mb-0 text-muted">
            To provide the support team with a centralized and structured reference guide they can quickly consult when responding to customer inquiries related the purchase of virtual numbers. Create a structured, easily accessible, and continuously maintainable regulatory database.
          </p>
        </div>
      </div>

      <!-- The Problem -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">The Problem</h2>

        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item bg-transparent px-0">
            Information was scattered across emails, PDFs, government websites, and shared folders.
          </li>
          <li class="list-group-item bg-transparent px-0">
            No standardized or searchable location for regulation summaries.
          </li>
          <li class="list-group-item bg-transparent px-0">
            High risk of outdated or incorrect information being used in decision processes.
          </li>
          <li class="list-group-item bg-transparent px-0">
            Time‑consuming research efforts that slowed operations.
          </li>
        </ul>
      </div>


      <!-- The Process & Approach -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">The Approach</h2>
        
        <h3 class="h5 mt-4 mb-3 text-primary">1. Platform</h3>
        <p>
          Utilized Notion as the primary platform due to its flexible capabilities, ability to integrate rich text, and user-friendly interface.
        </p>
        <!-- <div class="row g-4 my-2">
          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Collections Section</h5>
                <p class="card-text text-muted small">Captures risk classifications (High Risk / Low Risk), balances, and outstanding tracking details.</p>
                <div class="placeholder-screenshot text-center bg-dark text-white rounded p-4 small">
                    <img src="/images/collections-form.png" class="img-fluid rounded" alt="Collections Form Screenshot">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Compliance Section</h5>
                <p class="card-text text-muted small">Specifically structured to segment incoming regulatory complaints and internal compliance concerns.</p>
                <div class="placeholder-screenshot text-center bg-dark text-white rounded p-4 small">
                  <img src="/images/compliance-form.png" class="img-fluid rounded" alt="Compliance Form Screenshot">
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <h3 class="h5 mt-5 mb-3 text-primary">2. Data Collection </h3>
        <p>
          Systematically researched publicly available government and international websites to gather up-to-date information on regulations and restrictions. Monitored email or updates from partner vendors to ensure all relevant changes are made and updated.
        </p>

        <h3 class="h5 mt-5 mb-3 text-primary">3. Visualization and Insights</h3>
        <p>
          Translated the process into a structured visual workflow using Mermaid in Notion to improve clarity and usability.
        </p>

        <div class="table-responsive my-3">
          <table class="table table-bordered align-middle">
            <thead class="table-dark">
              <tr>
                <th style="width: 30%;">Insight</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Which countries require documents</td>
                <td>Helps estimate processing times and set customer expectations.</td>
              </tr>
              <tr>
                <td>Which countries allow only local users</td>
                <td>Allows clear guidance and avoids disqualified applications.</td>
              </tr>
              <tr>
                <td>Identification of strict vs. flexible regulatory regions</td>
                <td>Supports escalation and documentation strategies.</td>
              </tr>
              <tr>
                <td>Which supplier has the most offers</td>
                <td>Helps check where to source the numbers.</td>
              </tr>
            </tbody>
          </table>
        </div>


      <!-- Before and After -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">Before and After</h2>
        <div class="table-responsive my-3">
          <table class="table table-bordered align-middle">
            <thead class="table-dark">
              <tr>
                <th style="width: 30%;">Before</th>
                <th>After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Information stored in scattered files and emails</td>
                <td>Centralized, searchable reference that is scalable</td>
              </tr>
              <tr>
                <td>Manual effort required to verify requirements each time</td>
                <td>Instant lookup from Notion database</td>
              </tr>
              <tr>
                <td>High potential for outdated or inconsistent responses</td>
                <td>Clear update tracking and version history</td>
              </tr>
              <tr>
                <td>Customer wait time for compliance confirmation</td>
                <td>Faster support response and improved accuracy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Links & Attachments -->
      <div class="p-4 rounded border text-center my-5 bg-dark text-white">
        <h3 class="h5 mb-3"> Assets</h3>
        <p class="small text-muted-custom mb-4">Explore the actual database for this project:</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a href="https://crimson-energy-8fa.notion.site/2b97a534a33180bdb8efda5a8938ad8c?v=2b97a534a33180e98b22000c97e8c9fd" target="_blank" class="btn btn-outline-light px-4">
            <i class="bi bi-file-earmark-text me-2"></i> Database on Notion
          </a>
        </div>
      </div>

      <!-- Disclaimer blockquote -->
      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">
        <p class="small text-muted mb-0 italic">
          <strong>Privacy Disclaimer:</strong> All examples and dataset content displayed in this project are entirely fictional and created solely for portfolio demonstration purposes. No real regulatory documents, restrictions, or internal company information has been included.
        </p>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.landing-section {
  background-color: var(--color-primary);
  padding-top: 150px;
  padding-bottom: 80px;
}

.landing-title {
  font-size: 2.8rem;
  font-weight: 800;
}

.landing-subtitle {
  font-size: 1.15rem;
  opacity: 0.9;
}

.section-heading {
  font-weight: 700;
  color: var(--color-secondary, #333);
}

.placeholder-screenshot {
  border: 2px dashed #444;
  font-family: monospace;
  opacity: 0.85;
}

.blockquote-custom {
  font-style: italic;
}
</style>