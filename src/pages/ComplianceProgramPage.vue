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
            Creating an Effective Compliance Program
          </h1>

          <p class="landing-subtitle mx-auto" style="max-width: 850px;">
            Designed a comprehensive compliance program for a fictional specialty
            coffee shop by establishing policies, reporting channels, employee
            training, monitoring activities, and accountability measures that
            promote an ethical and compliant workplace.
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
          As part of the Regulatory Compliance Specialization, I designed a
          complete compliance program for <strong>The Anxious Bean</strong>, the
          fictional company created in the previous module. The objective was to
          build a practical compliance framework that supports ethical behavior,
          regulatory compliance, and operational consistency as the business
          continues to grow.
        </p>

        <p>
          The program incorporates key elements commonly found in modern
          compliance frameworks, including a Code of Conduct, reporting
          mechanisms, employee training, monitoring activities, and performance
          accountability.
        </p>

        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">
            The Objective
          </h5>

          <p class="mb-0 text-muted">
            Design a scalable compliance program that establishes clear
            behavioral expectations, encourages ethical decision-making, and
            promotes continuous compliance through education, monitoring, and
            accountability.
          </p>
        </div>
      </div>

      <!-- Compliance Program -->
      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Compliance Program
        </h2>

        <div class="accordion" id="programAccordion">

          <!-- Code of Conduct -->

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#conduct">
                ❤️ Code of Conduct
              </button>
            </h2>

            <div id="conduct" class="accordion-collapse collapse show">
              <div class="accordion-body">

                <p>
                  Developed a simplified Code of Conduct that establishes clear
                  expectations for ethical behavior and daily decision-making
                  across all branches.
                </p>

                <h6 class="fw-bold">Core Values</h6>

                <ul>
                  <li>Vigilance</li>
                  <li>Diligence</li>
                  <li>Reliability</li>
                  <li>Integrity</li>
                </ul>

                <p class="mb-0">
                  The Code of Conduct provides employees with a shared
                  understanding of the organization's values while reinforcing
                  its commitment to ethical business practices.
                </p>

              </div>
            </div>
          </div>

          <!-- Hotline -->

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#hotline">
                ☎️ Anonymous Reporting Hotline
              </button>
            </h2>

            <div id="hotline" class="accordion-collapse collapse">
              <div class="accordion-body">

                <p>
                  Proposed a confidential reporting channel that allows
                  employees, customers, and business partners to report
                  suspected misconduct without fear of retaliation.
                </p>

                <p class="mb-0">
                  Anonymous reporting supports transparency, encourages early
                  detection of issues, and enables consistent investigation and
                  resolution procedures.
                </p>

              </div>
            </div>
          </div>

          <!-- Training -->

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#training">
                💻 Role-Based Compliance Training
              </button>
            </h2>

            <div id="training" class="accordion-collapse collapse">
              <div class="accordion-body">

                <p>
                  Designed a structured training program tailored to employee
                  responsibilities, covering food safety, incident reporting,
                  regulatory requirements, and operational procedures.
                </p>

                <p class="mb-0">
                  Managers receive additional instruction on leadership,
                  investigations, and disciplinary responsibilities to ensure
                  compliance expectations are consistently enforced.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Employee Adherence -->

      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Ensuring Employee Adherence
        </h2>

        <div class="row g-4">

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">

                <h5 class="fw-bold">
                  Store Audits
                </h5>

                <p class="small text-muted mb-0">
                  Conduct scheduled and surprise audits to verify compliance
                  with food safety, sanitation, and operational standards.
                </p>

              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">

                <h5 class="fw-bold">
                  Recognition Program
                </h5>

                <p class="small text-muted mb-0">
                  Reward ethical behavior by incorporating compliance into
                  employee performance evaluations and recognition programs.
                </p>

              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">

                <h5 class="fw-bold">
                  Refresher Training
                </h5>

                <p class="small text-muted mb-0">
                  Deliver annual refresher training to reinforce key compliance
                  topics and keep employees informed about regulatory updates.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- Compliance Framework -->

      <div class="mb-5">

        <h2 class="h3 section-heading border-bottom pb-2 mb-3">
          Compliance Framework
        </h2>

        <table class="table table-bordered align-middle">

          <thead class="table-dark">
            <tr>
              <th>Component</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Code of Conduct</td>
              <td>Establishes ethical expectations and company values.</td>
            </tr>

            <tr>
              <td>Reporting Hotline</td>
              <td>Encourages confidential reporting of misconduct.</td>
            </tr>

            <tr>
              <td>Compliance Training</td>
              <td>Educates employees on regulatory responsibilities.</td>
            </tr>

            <tr>
              <td>Monitoring & Audits</td>
              <td>Evaluates adherence to company policies.</td>
            </tr>

            <tr>
              <td>Recognition & Discipline</td>
              <td>Reinforces accountability and ethical behavior.</td>
            </tr>

            <tr>
              <td>Continuous Training</td>
              <td>Maintains employee awareness of evolving risks.</td>
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
          This project strengthened my understanding of how an effective
          compliance program extends beyond written policies. I learned how
          codes of conduct, reporting mechanisms, employee training, monitoring,
          investigations, and accountability work together to build an ethical
          culture and reduce organizational risk. It also reinforced the
          importance of leadership commitment and continuous improvement in
          maintaining an effective compliance framework.
        </p>

      </div>

      <!-- Disclaimer -->

      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">

        <p class="small text-muted mb-0">

          <strong>Academic Disclaimer:</strong>

          This project was completed as part of the Regulatory Compliance
          Specialization offered by the University of Pennsylvania through
          Coursera. The company, policies, and compliance program presented are
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