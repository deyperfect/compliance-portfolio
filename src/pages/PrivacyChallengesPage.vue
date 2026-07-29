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
            Responding to Privacy Challenges
          </h1>

          <p class="landing-subtitle mx-auto" style="max-width: 850px;">
            Developed privacy recommendations for a fictional meal delivery
            company by applying Fair Information Principles (FIPs) and
            regulatory best practices to strengthen customer data protection
            and reduce the risk of FTC enforcement.
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
          As part of the Regulatory Compliance Specialization, I assumed the
          role of a Compliance Officer for <strong>EatFresh</strong>, a
          fictional meal delivery company. The objective was to recommend
          practical privacy controls that strengthen customer trust while
          reducing regulatory and legal risk.
        </p>

        <p>
          The project required applying the Fair Information Principles (FIPs)
          and proposing measures that demonstrate how organizations can build
          an effective privacy program while minimizing the likelihood of
          enforcement actions by the U.S. Federal Trade Commission (FTC).
        </p>

        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">
            The Objective
          </h5>

          <p class="mb-0 text-muted">
            Recommend practical privacy controls based on Fair Information
            Principles and industry best practices to strengthen customer data
            protection and regulatory compliance.
          </p>
        </div>
      </div>

      <!-- Fair Information Principles -->

      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Proposed Fair Information Principles
        </h2>

        <div class="accordion" id="privacyAccordion">

          <!-- Notice -->

          <div class="accordion-item">

            <h2 class="accordion-header">

              <button
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#notice">

                📄 Notice & Transparency

              </button>

            </h2>

            <div
              id="notice"
              class="accordion-collapse collapse show">

              <div class="accordion-body">

                <p>
                  Recommended that customers receive a clear and accessible
                  privacy notice before creating an account. The notice should
                  explain what information is collected, why it is collected,
                  how it will be used, who it may be shared with, how long it
                  will be retained, and the rights available to customers.
                </p>

                <h6 class="fw-bold">
                  Why It Matters
                </h6>

                <p class="mb-0">
                  Transparency promotes informed consent, builds customer trust,
                  and reduces the risk of misleading privacy practices.
                </p>

              </div>

            </div>

          </div>

          <!-- Security -->

          <div class="accordion-item">

            <h2 class="accordion-header">

              <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#security">

                🔐 Security

              </button>

            </h2>

            <div
              id="security"
              class="accordion-collapse collapse">

              <div class="accordion-body">

                <p>
                  Proposed implementing administrative, technical, and physical
                  safeguards to protect customer information, including secure
                  cloud storage, multi-factor authentication, antivirus
                  protection, and role-based access controls.
                </p>

                <h6 class="fw-bold">
                  Why It Matters
                </h6>

                <p class="mb-0">
                  Strong security controls reduce the likelihood of data
                  breaches while protecting customer information and company
                  reputation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- FTC Recommendations -->

      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          FTC Risk Mitigation Recommendations
        </h2>

        <div class="row g-4">

          <div class="col-md-6">

            <div class="card h-100 shadow-sm">

              <div class="card-body">

                <h5 class="fw-bold">
                  Privacy Policy Review
                </h5>

                <p class="small text-muted">
                  Recommend reviewing all privacy notices before launch to
                  ensure every statement regarding data collection, storage,
                  sharing, and third-party services is accurate and
                  transparent.
                </p>

              </div>

            </div>

          </div>

          <div class="col-md-6">

            <div class="card h-100 shadow-sm">

              <div class="card-body">

                <h5 class="fw-bold">
                  ISO 27001 Security Principles
                </h5>

                <p class="small text-muted">
                  Recommend implementing security controls aligned with the
                  principles of Confidentiality, Integrity, and Availability
                  (CIA) to strengthen information security.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Security Framework -->

      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Information Security Framework
        </h2>

        <table class="table table-bordered align-middle">

          <thead class="table-dark">

            <tr>
              <th>Principle</th>
              <th>Purpose</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Confidentiality</td>
              <td>
                Ensure customer information is accessible only to authorized
                personnel.
              </td>
            </tr>

            <tr>
              <td>Integrity</td>
              <td>
                Protect data from unauthorized modification or deletion.
              </td>
            </tr>

            <tr>
              <td>Availability</td>
              <td>
                Maintain reliable access to information whenever required for
                business operations.
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      <!-- Learning -->

      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Key Learning
        </h2>

        <p>
          This project strengthened my understanding of privacy compliance by
          applying Fair Information Principles to realistic business scenarios.
          It also reinforced the importance of transparency, secure data
          handling, governance, and regulatory accountability in building a
          sustainable privacy program.
        </p>

      </div>

      <!-- Disclaimer -->

      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">

        <p class="small text-muted mb-0">

          <strong>Academic Disclaimer:</strong>

          This project was completed as part of the Regulatory Compliance
          Specialization offered by the University of Pennsylvania through
          Coursera. The company, recommendations, and privacy program are
          fictional and created solely for educational and portfolio purposes.

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