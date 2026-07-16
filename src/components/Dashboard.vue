<script setup>
// You can import icons or simple components here if needed in the future
</script>

<template>
  <!-- Landing/Hero Section -->
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-9 mx-auto text-center">
          <h1 class="landing-title mb-3">Activity Dashboard for Compliance & Collections</h1>
          <p class="landing-subtitle mx-auto" style="max-width: 800px;">
            A dynamic task management system built using Google Sheets and Google Forms, designed to streamline workload tracking, eliminate manual oversights, and prioritize high-volume compliance tasks.
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
          This project showcases a dynamic task management dashboard built using <strong>Google Sheets and Google Forms</strong>. Designed to streamline daily workload tracking in a compliance and collections environment, the system allows seamless input through structured forms, dynamic filtering, automated prioritization, and sorting—all within a single, centralized view.
        </p>
        <div class="p-4 bg-light rounded border-start border-4 border-primary mt-4">
          <h5 class="fw-bold mb-2">The Objective</h5>
          <p class="mb-0 text-muted">
            To create an organized, automated system that eliminates manual monitoring of high-volume compliance emails and pending collections accounts, establishing clear turnaround standards.
          </p>
        </div>
      </div>

      <!-- The Problem -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">The Problem</h2>
        <p>
          Before implementing this dashboard, tracking daily compliance tasks and collections activities was highly fragmented:
        </p>
        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item bg-transparent px-0">
            <strong>Lack of Structure:</strong> No centralized way to monitor active, pending, or escalating tasks.
          </li>
          <li class="list-group-item bg-transparent px-0">
            <strong>Email Overload:</strong> High daily email volumes made keeping up with follow-ups and deadlines incredibly difficult.
          </li>
          <li class="list-group-item bg-transparent px-0">
            <strong>Context Switching:</strong> Rapidly transitioning between compliance and collections duties caused productivity loss and missed action items.
          </li>
        </ul>
      </div>

      <!-- The Process & Approach -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">The Approach & Technical Process</h2>
        
        <h3 class="h5 mt-4 mb-3 text-primary">1. Structured Data Collection</h3>
        <p>
          To enforce structured tracking, I implemented a <strong>Google Form</strong> divided into logic-based sections to capture specific operational requirements:
        </p>
        <div class="row g-4 my-2">
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
        </div>

        <h3 class="h5 mt-5 mb-3 text-primary">2. Data Transformation Engine</h3>
        <p>
          Form data was refined using Google Sheets formulas (such as <code>QUERY</code>, <code>ARRAYFORMULA</code>, and <code>UNIQUE</code>). I created a dedicated <strong>Helper sheet</strong> that dynamically processes and scales data to drive the dashboard views without altering original records.
        </p>

        <h3 class="h5 mt-5 mb-3 text-primary">3. The Dynamic Dashboard & View</h3>
        <p>
          The core dashboard provides live sorting and deep-dive capabilities. Here's a breakdown of the dynamic system architecture:
        </p>
        
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
        </div>

        <h3 class="h5 mt-5 mb-3 text-primary">4. Data Visualization & Actionable Insights</h3>
        <p>
          The analytics component tracks and groups open files, allowing leadership to instantly prioritize high-risk compliance exceptions or urgent collection deadlines.
        </p>
        <div class="placeholder-screenshot text-center bg-dark text-white rounded p-5 my-3">
         <img src="/images/dashboard-overview.png" class="img-fluid rounded shadow" alt="Dashboard Overview" />
        </div>
      </div>

      <!-- Outcomes & Future Opportunities -->
      <div class="mb-5">
        <h2 class="h3 section-heading border-bottom pb-2 mb-3">Outcomes & Future Roadmap</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="p-4 bg-light rounded h-100">
              <h4 class="h6 fw-bold text-success text-uppercase">Measurable Outcomes</h4>
              <p class="small text-muted mb-0">
                Significantly decreased missed deadlines and simplified task assignment workflows. Transitioned operational tracking from chaotic email queues to structured, measurable data. Enabled immediate, visual progress reviews during regular management check-ins.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-4 bg-light rounded h-100">
              <h4 class="h6 fw-bold text-info text-uppercase">Future Enhancements</h4>
              <p class="small text-muted mb-0">
                Plans include using <strong>Google Apps Script</strong> to automate Calendar updates, pushing instant notifications directly to Slack or email for approaching due dates, and connecting the backend to BI tools like <strong>Looker Studio</strong> for interactive stakeholder reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Links & Attachments -->
      <div class="p-4 rounded border text-center my-5 bg-dark text-white">
        <h3 class="h5 mb-3"> Assets</h3>
        <p class="small text-muted-custom mb-4">Explore the actual forms and reporting setup constructed for this project:</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYhgt_S6l8vTJqy6xuf0UfuKCCst4ROZN1stc6iLOvUtmqbg/viewform" target="_blank" class="btn btn-outline-light px-4">
            <i class="bi bi-file-earmark-text me-2"></i> View Google Form
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1-TTiIHz2iNNCemK36OQz80bg8oW58jdYTn37iqO3yuo/edit?usp=sharing" target="_blank" class="btn btn-warning px-4 text-dark fw-bold">
            <i class="bi bi-file-earmark-spreadsheet me-2"></i> View Activity Dashboard
          </a>
        </div>
      </div>

      <!-- Disclaimer blockquote -->
      <div class="blockquote-custom p-4 bg-light border-start border-3 border-secondary rounded">
        <p class="small text-muted mb-0 italic">
          <strong>Privacy Disclaimer:</strong> All dashboard data, company titles, and metrics visualized in this showcase are strictly fictional, built specifically for portfolio and technical demonstration purposes.
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