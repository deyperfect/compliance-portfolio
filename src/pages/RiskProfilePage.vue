<script setup>
// No script needed
</script>

<template>
  <!-- Landing -->
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-9 mx-auto text-center">
          <h1 class="landing-title mb-3">
            Complete a Risk Profile
          </h1>

          <p class="landing-subtitle mx-auto" style="max-width: 850px;">
            Developed a comprehensive organizational risk profile for a fictional
            specialty coffee shop by identifying financial, operational,
            reputational, and compliance risks while recommending practical
            mitigation strategies to reduce business exposure.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section id="project-details" class="project-section py-5">
    <div class="container" style="max-width: 900px;">

      <!-- Overview -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Project Overview
        </h2>

        <p>
          As part of the Regulatory Compliance Specialization, I created a
          fictional business and developed a complete organizational risk
          profile. The project required identifying potential risks that could
          impact business operations and recommending practical mitigation
          strategies based on compliance and risk management principles.
        </p>

        <p>
          I chose to create <strong>The Anxious Bean</strong>, a specialty coffee
          shop based in the Philippines, and evaluated risks across four major
          categories: financial, operational, reputational, and compliance.
        </p>

        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">The Objective</h5>

          <p class="mb-0 text-muted">
            Develop a structured risk profile that identifies potential threats
            to the organization and proposes mitigation strategies that support
            operational resilience and regulatory compliance.
          </p>
        </div>
      </div>

      <!-- Company -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Company Profile
        </h2>

        <table class="table table-bordered">
          <tbody>
            <tr>
              <th width="30%">Company</th>
              <td>The Anxious Bean</td>
            </tr>

            <tr>
              <th>Industry</th>
              <td>Food & Beverage</td>
            </tr>

            <tr>
              <th>Overview</th>
              <td>
                A fictional specialty coffee shop in the Philippines offering
                handcrafted coffee, pastries, and a membership rewards program
                in a relaxed and welcoming environment.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Risk Assessment -->
      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Risk Assessment
        </h2>

        <div class="accordion" id="riskAccordion">

          <!-- Financial -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#financial">
                💲 Financial Risks
              </button>
            </h2>

            <div id="financial" class="accordion-collapse collapse show">
              <div class="accordion-body">

                <h6 class="fw-bold">Inflation</h6>

                <p>
                  Rising ingredient costs may reduce profitability and require
                  pricing adjustments.
                </p>

                <strong>Mitigation</strong>

                <ul>
                  <li>Monitor supplier pricing trends.</li>
                  <li>Work with multiple suppliers.</li>
                  <li>Negotiate long-term contracts.</li>
                  <li>Adjust pricing and diversify menu offerings.</li>
                </ul>

                <hr>

                <h6 class="fw-bold">
                  Cash Flow Instability
                </h6>

                <p>
                  Seasonal demand and external factors may reduce daily revenue.
                </p>

                <strong>Mitigation</strong>

                <ul>
                  <li>Track daily sales.</li>
                  <li>Implement loyalty programs.</li>
                  <li>Partner with delivery platforms.</li>
                </ul>

              </div>
            </div>
          </div>

          <!-- Operational -->

          <div class="accordion-item">

            <h2 class="accordion-header">

              <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#operational">

                ⚙️ Operational Risks

              </button>

            </h2>

            <div id="operational" class="accordion-collapse collapse">

              <div class="accordion-body">

                <h6 class="fw-bold">
                  Power Outages
                </h6>

                <p>
                  Severe weather may interrupt business operations.
                </p>

                <strong>Mitigation</strong>

                <ul>
                  <li>Backup generator.</li>
                  <li>UPS for critical systems.</li>
                  <li>Employee response procedures.</li>
                </ul>

                <hr>

                <h6 class="fw-bold">
                  Equipment Failure
                </h6>

                <p>
                  POS or coffee equipment failures may disrupt customer service.
                </p>

                <strong>Mitigation</strong>

                <ul>
                  <li>Preventive maintenance.</li>
                  <li>Reliable equipment vendors.</li>
                  <li>Manual order procedures.</li>
                  <li>Staff troubleshooting training.</li>
                </ul>

              </div>

            </div>

          </div>

          <!-- Reputation -->

          <div class="accordion-item">

            <h2 class="accordion-header">

              <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#reputation">

                ™️ Reputational Risks

              </button>

            </h2>

            <div id="reputation" class="accordion-collapse collapse">

              <div class="accordion-body">

                <h6 class="fw-bold">
                  Pet-Friendly Policy
                </h6>

                <p>
                  Poorly managed pet policies may create customer complaints.
                </p>

                <strong>Mitigation</strong>

                <ul>
                  <li>Clear pet guidelines.</li>
                  <li>Designated pet area.</li>
                  <li>Cleaning procedures.</li>
                </ul>

                <hr>

                <h6 class="fw-bold">
                  Long Customer Stays
                </h6>

                <p>
                  Extended occupancy may reduce seating availability.
                </p>

                <strong>Mitigation</strong>

                <ul>
                  <li>Dedicated work area.</li>
                  <li>Staff communication training.</li>
                  <li>Peak-hour seating policy.</li>
                </ul>

              </div>

            </div>

          </div>

          <!-- Compliance -->

          <div class="accordion-item">

            <h2 class="accordion-header">

              <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#compliance">

                ⚖️ Compliance Risks

              </button>

            </h2>

            <div id="compliance" class="accordion-collapse collapse">

              <div class="accordion-body">

                <h6 class="fw-bold">
                  Data Privacy Act of 2012 (RA 10173)
                </h6>

                <p>
                  Collection of membership information requires proper handling
                  of personal data.
                </p>

                <hr>

                <h6 class="fw-bold">
                  Senior Citizen & PWD Discounts
                </h6>

                <p>
                  Compliance with mandatory discounts under Philippine law.
                </p>

                <hr>

                <h6 class="fw-bold">
                  Food Safety & Sanitation
                </h6>

                <p>
                  Pet-friendly operations introduce additional sanitation
                  considerations that must comply with food safety regulations.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Learning -->
      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Key Learning
        </h2>

        <p>
          This project strengthened my understanding of enterprise risk
          management by demonstrating how financial, operational,
          reputational, and compliance risks are interconnected. It also
          reinforced the importance of identifying potential threats early,
          evaluating their business impact, and implementing practical
          mitigation strategies that support long-term organizational
          resilience.
        </p>

      </div>

      <!-- Disclaimer -->

      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">

        <p class="small text-muted mb-0">

          <strong>Academic Disclaimer:</strong>

          This project was completed as part of the Regulatory Compliance
          Specialization offered by the University of Pennsylvania through
          Coursera. The company, scenarios, and risk assessments are fictional
          and created solely for educational and portfolio purposes.

        </p>

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
}

.blockquote-custom {
  font-style: italic;
}
</style>