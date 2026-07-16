<script setup>
// You can import icons or simple components here if needed in the future
</script>

<template>
  <!-- Landing/Hero Section -->
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-9 mx-auto text-center">
          <h1 class="landing-title mb-3">Collections Escalation Workflow</h1>
          <p class="landing-subtitle mx-auto" style="max-width: 800px;">
            A visual decision-making workflow that standardizes the review and escalation of past-due accounts. By transforming a complex operational process into a clear, repeatable guide, it improves consistency, collaboration, and onboarding across support teams.
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
          Reviewing and escalating past-due accounts involves multiple decision points, documentation requirements, and collaboration across teams. Without a clear process, inconsistent interpretations can lead to delays, operational inefficiencies, and uncertainty during case reviews.
        </p>
        <p>

            To address this, I created a visual workflow that maps the complete escalation process from initial assessment to resolution. Using Notion and Mermaid, I documented business rules, decision paths, and required actions into a structured, easy-to-follow diagram. The workflow serves as a centralized operational guide that improves consistency, supports onboarding, simplifies knowledge transfer, and helps teams navigate complex escalation scenarios with greater confidence.
        </p>
        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">The Objective</h5>
          <p class="mb-0 text-muted">
            To develop a flowchart to support clear and consistent decision-making during the review of past-due accounts, improving efficiency and reducing uncertainty in the process.
          </p>
        </div>
      </div>

      <!-- The Problem -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">The Problem</h2>

        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item bg-transparent px-0">
            I joined the team without prior experience in collections, and the learning curve was steep due to limited operational structure.
          </li>
          <li class="list-group-item bg-transparent px-0">
            While documentation existed, information was scattered across emails and folders, leading to inconsistent execution and varied interpretations of the process.
          </li>
          <li class="list-group-item bg-transparent px-0">
            Existing documentation lacked organization, making it difficult to understand the full workflow or identify decision points.
          </li>
          <li class="list-group-item bg-transparent px-0">
            I often struggled to navigate the process, and it was easy to feel lost without a clear systematic guide.
          </li>
        </ul>
      </div>

      <!-- The Process & Approach -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">The Approach</h2>
        
        <h3 class="h5 mt-4 mb-3 text-primary">1. End-to-End Process Mapping</h3>
        <p>
          Mapped the complete end-to-end escalation review process to document every step from initial assessment to resolution.
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

        <h3 class="h5 mt-5 mb-3 text-primary">2. Decision Point & Workflow Analysis</h3>
        <p>
          Identified critical decision points, action triggers, and required documentation throughout the workflow.
        </p>

        <h3 class="h5 mt-5 mb-3 text-primary">3. Workflow Visualization</h3>
        <p>
          Translated the process into a structured visual workflow using Mermaid in Notion to improve clarity and usability.
        </p>
<!--         
        <div class="table-responsive my-3">
          <table class="table table-bordered align-middle">
            <thead class="table-dark">
              <tr>
                <th style="width: 30%;">Feature</th>
                <th>Functional Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">Dynamic Filtering</td>
                <td>Filter seamlessly by Company, State, Month, Category, Status, or specific issue.</td>
              </tr>
              <tr>
                <td class="fw-bold">Detailed Data View</td>
                <td>A clean, structured table displaying records based on active dashboard selections.</td>
              </tr>
              <tr>
                <td class="fw-bold">Visual Analytics</td>
                <td>Custom charts built to deliver quick, executive-level overviews of active workloads.</td>
              </tr>
              <tr>
                <td class="fw-bold">Clean Data Architecture</td>
                <td>Follows a robust, linear pipeline: <code>Form → Data → Helper Sheet → Dashboard View</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-4">
          <div class="placeholder-screenshot text-center bg-dark text-white rounded p-5 mb-3">
            <img src="/images/dashboard-filter.png" class="img-fluid rounded shadow" alt="Dashboard Filter" />
          </div>
          <div class="placeholder-screenshot text-center bg-dark text-white rounded p-5">
            <img src="/images/dashboard-count.png" class="img-fluid rounded shadow" alt="Dashboard Count View" />
          </div>
        </div> -->

        <h3 class="h5 mt-5 mb-3 text-primary">4. Diagram Design & Optimization</h3>
        <p>
          Utilized the Mermaid Live Editor website to customize the layout, spacing, and theme styling, improving readability and presentation quality.
        </p>

        <h3 class="h5 mt-5 mb-3 text-primary">5. Stakeholder Review & Validation</h3>
        <p>
          Collaborated with stakeholders to review and validate logic, ensuring accuracy, feasibility, and alignment across the team.
        </p>
      </div>

      <!-- Outcomes & Future Opportunities -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">Outcomes & Future Roadmap</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="p-4 bg-light rounded h-100">
              <h4 class="h6 fw-bold text-success text-uppercase">Measurable Outcomes</h4>
              <p class="small text-muted mb-0">
                Standardized the escalation review process by transforming complex decision logic into a clear, visual workflow. Reduced ambiguity in escalation handling, improved documentation consistency, and strengthened cross-functional collaboration. Created a repeatable reference that supports onboarding, process training, and operational consistency.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-4 bg-light rounded h-100">
              <h4 class="h6 fw-bold text-info text-uppercase">Future Enhancements</h4>
              <p class="small text-muted mb-0">
                Enhance the workflow by linking decision points to supporting documents, checklists, and templates to reduce manual follow-ups and missing requirements. Introduce role-based views to tailor workflow visibility for different teams, and explore integration with workflow automation tools to streamline approvals, notifications, and process tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Links & Attachments -->
      <div class="p-4 rounded border text-center my-5 bg-dark text-white">
        <h3 class="h5 mb-3"> Assets</h3>
        <p class="small text-muted-custom mb-4">Explore the actual diagram for this project:</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a href="https://www.mermaidchart.com/d/237eb534-fe06-4e38-94dc-bcc3388b2885" target="_blank" class="btn btn-outline-light px-4">
            <i class="bi bi-file-earmark-text me-2"></i> Diagram on mermaidchart.com
          </a>
        </div>
      </div>

      <!-- Disclaimer blockquote -->
      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">
        <p class="small text-muted mb-0 italic">
          <strong>Privacy Disclaimer:</strong> The workflow is a reconstructed example designed solely to illustrate decision-making logic and operational structure. All details have been anonymized and modified to ensure full protection of confidential, sensitive, and proprietary information.
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

.placeholder-screenshot {
  border: 2px dashed #444;
  font-family: monospace;
  opacity: 0.85;
}

.blockquote-custom {
  font-style: italic;
}
</style>