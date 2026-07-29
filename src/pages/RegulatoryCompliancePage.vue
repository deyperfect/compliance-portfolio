<script setup>
// No script needed for now
</script>

<template>
  <!-- Landing / Hero -->
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-9 mx-auto text-center">
          <h1 class="landing-title mb-3">
            Regulatory Compliance Specialization Projects
          </h1>

          <p class="landing-subtitle mx-auto" style="max-width: 850px;">
            A collection of projects completed as part of the
            <strong>Regulatory Compliance Specialization</strong> offered by the
            University of Pennsylvania through Coursera. These projects explore
            practical approaches to compliance, risk management, regulatory
            analysis, and organizational governance using real-world scenarios
            and industry frameworks.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section id="project-details" class="project-section py-5">
    <div class="container" style="max-width: 1000px;">

      <!-- Overview -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Overview
        </h2>

        <p>
          Throughout the Regulatory Compliance Specialization, I completed four
          practical projects focused on identifying regulatory risks,
          interpreting compliance requirements, evaluating internal controls,
          and developing mitigation strategies. Each project is based on
          realistic business scenarios that mirror the types of challenges
          encountered by compliance professionals.
        </p>

        <p>
          Together, these projects demonstrate a structured approach to
          compliance analysis, critical thinking, and risk-based
          decision-making while applying recognized compliance frameworks and
          governance principles.
        </p>

        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">
            Learning Objectives
          </h5>

          <p class="mb-0 text-muted">
            Apply regulatory compliance concepts to practical business
            situations, identify compliance risks, evaluate existing controls,
            and recommend strategies that support ethical and regulatory
            decision-making.
          </p>
        </div>
      </div>

      <!-- Projects -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-4">
          Projects
        </h2>

        <div class="row g-4">

          <!-- Project 1 -->
          <div class="col-md-6">
            <RouterLink
              to="/regulatory-compliance/risk-profile"
              class="text-decoration-none"
            >
              <div class="card h-100 shadow-sm project-card">
                <div class="card-body">
                  <span class="badge bg-primary mb-3">
                    Project 1
                  </span>

                  <h5 class="fw-bold">
                    Complete a Risk Profile
                  </h5>

                  <p class="text-muted small mb-0">
                    Developed a comprehensive risk profile for a fictional organization,
                    identifying and evaluating financial, operational, reputational,
                    and compliance risks while assessing their potential business impact.
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>

          <!-- Project 2 -->
          <div class="col-md-6">
            <RouterLink
              to="/regulatory-compliance/compliance-program"
              class="text-decoration-none"
            >
              <div class="card h-100 shadow-sm project-card">
                <div class="card-body">
                  <span class="badge bg-primary mb-3">
                    Project 2
                  </span>

                  <h5 class="fw-bold">
                    Creating an Effective Compliance Program
                  </h5>

                  <p class="text-muted small mb-0">
                    Designed a complete compliance program for a fictional company,
                    including policies, training, monitoring, reporting mechanisms,
                    investigations, and disciplinary procedures aligned with compliance
                    best practices.
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>

          <!-- Project 3 -->
          <div class="col-md-6">
            <RouterLink
              to="/regulatory-compliance/privacy"
              class="text-decoration-none"
            >
              <div class="card h-100 shadow-sm project-card">
                <div class="card-body">
                  <span class="badge bg-primary mb-3">
                    Project 3
                  </span>

                  <h5 class="fw-bold">
                    Responding to Privacy Challenges
                  </h5>

                  <p class="text-muted small mb-0">
                    Prepared a compliance memo recommending privacy controls for a
                    fictional meal delivery company by applying Fair Information
                    Principles (FIPs) and strategies to reduce regulatory risk and
                    potential FTC enforcement.
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>

          <!-- Project 4 -->
          <div class="col-md-6">
            <RouterLink
              to="/regulatory-compliance/corruption"
              class="text-decoration-none"
            >
              <div class="card h-100 shadow-sm project-card">
                <div class="card-body">
                  <span class="badge bg-primary mb-3">
                    Project 4
                  </span>

                  <h5 class="fw-bold">
                    Preventing Corruption at your Company
                  </h5>

                  <p class="text-muted small mb-0">
                    Evaluated a corporate bribery case involving Foreign Corrupt
                    Practices Act (FCPA) violations and recommended enhancements to
                    strengthen the organization's anti-corruption compliance program.
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>

        </div>
      </div>

      <!-- Disclaimer -->
      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">
        <p class="small text-muted mb-0">
          <strong>Academic Disclaimer:</strong>
          These projects were completed as part of the
          <em>Regulatory Compliance Specialization</em> offered by the
          University of Pennsylvania through Coursera. They are presented for
          educational and portfolio purposes and are based on case studies and
          simulated business scenarios.
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

.project-card {
  transition: all 0.25s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.12);
}

.blockquote-custom {
  font-style: italic;
}
</style>