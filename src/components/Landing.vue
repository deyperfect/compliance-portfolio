<template>
  <section id="landing" class="landing-section">
    <div class="container content-width">

      <div class="row mb-4">
        <div class="col-lg-7">
          <p class="landing-kicker">
            COMPLIANCE & OPERATIONS
          </p>
        </div>
      </div>

      <div class="row align-items-center gy-5">

        <!-- Left Column -->
        <div class="col-lg-7">

          <h1 class="landing-title">
            Improving operations through compliance.
          </h1>

          <p class="landing-subtitle">
            Compliance and operations professional specializing in
            regulatory compliance, KYC verification, investigations,
            quality assurance, and process improvement.
          </p>

          <p class="landing-description">
            I design structured workflows, documentation, and compliance
            frameworks that improve operational efficiency while maintaining
            accuracy, accountability, and regulatory compliance.
          </p>

          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary-custom">
              View Case Studies
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              class="btn btn-secondary-custom"
            >
              View Resume
            </a>
          </div>

        </div>

        <!-- Right Column -->
        <div class="col-lg-5">

          <div class="expertise-box">

            <p class="expertise-title">
              Core Expertise
            </p>

            <div class="expertise-item">
              <span></span>
              Regulatory Compliance
            </div>

            <div class="expertise-item">
              <span></span>
              Process Improvement
            </div>

            <div class="expertise-item">
              <span></span>
              Quality Assurance
            </div>

            <div class="expertise-item">
              <span></span>
              Investigations
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

/* ===========================
   Landing Section
=========================== */

.landing-section {
  background: var(--color-primary);
  padding: 120px 0 80px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.content-width {
  margin: 0 auto;
}

/* ===========================
   Typography
=========================== */

.landing-kicker {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.landing-title {
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.landing-subtitle {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-secondary);
  margin-bottom: 1.25rem;
}

.landing-description {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-tertiary);
  margin-bottom: 2rem;
}

/* ===========================
   Buttons
=========================== */

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero-buttons .btn {
  width: 100%;
  text-align: center;
}

.btn-primary-custom,
.btn-secondary-custom {
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.btn-primary-custom {
  background: var(--color-accent);
  color: var(--color-primary);
}

.btn-primary-custom:hover {
  opacity: .95;
  transform: translateY(-2px);
}

.btn-secondary-custom {
  border: 1px solid rgba(91, 89, 89, 0.15);
  color: var(--color-secondary);
}

.btn-secondary-custom:hover {
  background: rgba(255,255,255,.05);
  transform: translateY(-2px);
}

/* ===========================
   Expertise
=========================== */

.expertise-box {
  margin-top: 3rem;
}

.expertise-title {
  font-size: .8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .15em;
  color: var(--color-tertiary);
  margin-bottom: 1.25rem;
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: .9rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255,255,255,.08);
  color: var(--color-secondary);
  font-weight: 500;
}

.expertise-item span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  flex-shrink: 0;
}

/* ===========================
   Tablet
=========================== */

@media (min-width: 768px) {

  .landing-section {
    padding: 150px 0 110px;
  }

  .landing-title {
    font-size: 3.5rem;
  }

  .landing-subtitle {
    font-size: 1.15rem;
  }

  .landing-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: row;
  }

  .hero-buttons .btn {
    width: auto;
  }

}

/* ===========================
   Desktop
=========================== */

@media (min-width: 992px) {

  .landing-section {
    padding: 180px 0;
  }

  .landing-title {
    font-size: 4rem;
  }

  .landing-subtitle {
    font-size: 1.2rem;
  }

  .landing-description {
    font-size: 1.05rem;
    max-width: 650px;
  }

  .expertise-box {
    max-width: 360px;
    margin-left: auto;
    margin-top: 0;
  }

}

</style>