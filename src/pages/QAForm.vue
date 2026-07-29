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
            QA Evaluation Form
          </h1>

          <p class="landing-subtitle mx-auto" style="max-width: 850px;">
            A comprehensive quality assurance system designed from the ground up
            to standardize email and chat evaluations through weighted scoring,
            automated calculations, and structured coaching documentation,
            enabling fair performance assessments and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <section id="project-details" class="project-section py-5">
    <div class="container" style="max-width: 900px;">

      <!-- Project Overview -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Project Overview
        </h2>

        <p>
          When quality assurance was introduced to our department, there was no
          existing evaluation framework, scoring methodology, or coaching
          process. I was responsible for designing the entire QA structure from
          scratch, including evaluation forms, weighted scoring logic, coaching
          logs, and performance trackers using Google Sheets and Microsoft Excel.
        </p>

        <p>
          The solution established a standardized and transparent quality review
          process that ensured consistent evaluations while reducing manual work
          through automated spreadsheet calculations.
        </p>

        <p>
          This project demonstrates my ability to combine process design,
          spreadsheet automation, quality assurance, and operational improvement
          to build scalable internal systems.
        </p>

        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">The Objective</h5>
          <p class="mb-0 text-muted">
            Design and implement a complete QA framework that delivers objective
            scoring, standardized evaluations, and structured coaching while
            creating a scalable foundation for continuous quality improvement.
          </p>
        </div>
      </div>

      <!-- Problem -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          The Problem
        </h2>

        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-transparent px-0">
            No standardized QA evaluation process existed.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Performance reviews varied depending on the evaluator.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Manual score calculations increased the risk of human error.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Coaching sessions lacked consistent documentation and follow-up.
          </li>

          <li class="list-group-item bg-transparent px-0">
            No centralized tracker for monitoring quality trends.
          </li>
        </ul>
      </div>

      <!-- What I Built -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          What I Built
        </h2>

        <div class="row g-3">

          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold">QA Evaluation Form</h5>
                <p class="small text-muted mb-0">
                  Structured scorecard for evaluating email and chat interactions.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold">Weighted Scoring Engine</h5>
                <p class="small text-muted mb-0">
                  Automated calculations based on category importance.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold">N/A Logic</h5>
                <p class="small text-muted mb-0">
                  Dynamically excludes non-applicable criteria from calculations.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold">Coaching Log</h5>
                <p class="small text-muted mb-0">
                  Documents strengths, improvement areas, and action plans.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Approach -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          The Approach
        </h2>

        <h3 class="h5 mt-4 mb-3 text-primary">
          1. Evaluation Framework
        </h3>

        <p>
          Designed a structured QA form with weighted categories that measure
          service quality, communication, compliance, and customer experience.
        </p>

        <h3 class="h5 mt-5 mb-3 text-primary">
          2. Automated Scoring
        </h3>

        <p>
          Built spreadsheet formulas that automatically calculate weighted
          scores while dynamically adjusting for non-applicable criteria.
        </p>

        <h3 class="h5 mt-5 mb-3 text-primary">
          3. Coaching Documentation
        </h3>

        <p>
          Created coaching logs that transformed evaluation results into
          measurable action plans and documented follow-up sessions.
        </p>
      </div>

      <!-- Rating Scale -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Rating Scale
        </h2>

        <div class="table-responsive">
          <table class="table table-bordered align-middle">
            <thead class="table-dark">
              <tr>
                <th>Rating</th>
                <th>Numeric Value</th>
                <th>Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Yes</td>
                <td>1.0</td>
                <td>Requirement fully met.</td>
              </tr>

              <tr>
                <td>Partial</td>
                <td>0.5</td>
                <td>Requirement partially met.</td>
              </tr>

              <tr>
                <td>No</td>
                <td>0</td>
                <td>Requirement not met.</td>
              </tr>

              <tr>
                <td>N/A</td>
                <td>Excluded</td>
                <td>Removed from the final calculation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Scoring Logic -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Scoring Logic
        </h2>

        <div class="card bg-dark text-white mb-4">
          <div class="card-body">
            <h5>Weighted Score</h5>
            <pre class="mb-0 text-white">Weighted Score = Weight × Rating Value</pre>
          </div>
        </div>

        <div class="card bg-dark text-white">
          <div class="card-body">
            <h5>Final Score</h5>
            <pre class="mb-0 text-white">
Final Score =
(Total Weighted Score ÷ Applicable Weight) × 100
            </pre>
          </div>
        </div>
      </div>

      <!-- Before & After -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Before & After
        </h2>

        <div class="table-responsive">
          <table class="table table-bordered align-middle">
            <thead class="table-dark">
              <tr>
                <th>Before</th>
                <th>After</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>No QA framework</td>
                <td>Standardized evaluation process</td>
              </tr>

              <tr>
                <td>Manual calculations</td>
                <td>Automated weighted scoring</td>
              </tr>

              <tr>
                <td>Subjective reviews</td>
                <td>Consistent evaluation criteria</td>
              </tr>

              <tr>
                <td>Informal coaching</td>
                <td>Structured coaching documentation</td>
              </tr>

              <tr>
                <td>No centralized tracking</td>
                <td>Scalable QA monitoring framework</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Impact -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Impact
        </h2>

        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-transparent px-0">
            Established the team's first QA framework.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Improved consistency through standardized evaluations.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Reduced manual effort with automated spreadsheet calculations.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Strengthened coaching through documented feedback and action plans.
          </li>

          <li class="list-group-item bg-transparent px-0">
            Created a scalable foundation for future quality initiatives.
          </li>
        </ul>
      </div>

      <!-- Assets -->
      <div class="p-4 rounded border text-center my-5 bg-dark text-white">
        <h3 class="h5 mb-3">Assets</h3>

        <p class="small text-muted-custom mb-4">
          Explore the sample QA Evaluation Form.
        </p>

        <div class="d-flex justify-content-center">
          <a
            href="https://docs.google.com/spreadsheets/d/1Hwpj8rCrSO9VWAZVUk3E4vliR2od0pzOGQ-GJmdLmII/edit?usp=sharing"
            target="_blank"
            class="btn btn-outline-light px-4"
          >
            <i class="bi bi-file-earmark-spreadsheet me-2"></i>
            Google Sheets
          </a>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">
        <p class="small text-muted mb-0">
          <strong>Privacy Disclaimer:</strong> This project contains fictional
          company branding, sample evaluation categories, and example scoring
          values created exclusively for portfolio purposes. No confidential
          employee information, customer data, or proprietary business processes
          are included.
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
  color: var(--color-secondary, #333);
}

.blockquote-custom {
  font-style: italic;
}

pre {
  white-space: pre-wrap;
  font-size: 0.95rem;
}
</style>