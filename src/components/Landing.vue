<template>
  <section id="landing" class="landing-section">
    <div class="container mx-auto">
      <div class="row align-items-center">
        <div class="col-lg-8 mx-auto">
          
          <h1 class="landing-title">Driving operational excellence with integrity.</h1>

          <p id="par1" class="landing-subtitle">
            I&apos;m a compliance and operations professional specializing in regulatory compliance, KYC verification, investigations, quality assurance, and process improvement. I enjoy solving operational challenges, improving workflows, and maintaining accurate, compliant processes through analytical thinking and attention to detail. This portfolio highlights projects, process documentation, and work samples that reflect my experience and commitment to continuous improvement.
          </p>
        </div>

        <div class="mx-auto" id="landing-button">
          <a href="#projects" class="btn btn-cta">View My Work</a>
          <a
            href="/resume.pdf"
            target="_blank"
            class="btn btn-cta"
            >View Resume</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Landing Section Start*/
.landing-section {
  background-color: var(--color-primary);
  padding: 100px 0;
}


.landing-title {
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 3rem;
  padding: 0 2.3rem;
  text-align: left;
  animation: fadeInUp 1s ease;
}

.landing-subtitle {
  font-family: "Figtree";
  text-align: justify;
  font-size: 1rem;
  padding: 0 2.3rem;
  color: var(--color-tertiary);
  animation: fadeInUp 1s ease 0.2s backwards;
}

#par1 {
  margin-bottom: 3rem;
}

.btn-cta {
  background-color: var(--color-accent);
  border: none;
  color: var(--color-primary);
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  animation: fadeInUp 1s ease 0.4s backwards;
}

#landing-button a:first-child:hover {
  background-color: var(--color-tertiary);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

#landing-button a:last-child:hover {
  background-color: var(--color-accent);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

#landing-button {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

#landing-button a:last-child {
  background-color: var(--color-tertiary);
}

/* For Small Screens */
@media (min-width: 576px) {
  .landing-title {
    font-size: 2rem;
  }

  .landing-subtitle {
    font-size: 1rem;
  }

  .btn-cta {
    padding: 12px 30px;
    font-size: 1rem;
  }
}

/* For Medium/Tablets */
@media (min-width: 768px) {
  /* Landing Section */
  .landing-title {
    font-size: 2.7rem;
  }

  .landing-subtitle {
    font-size: 1.1rem;
  }
}

/* For desktop */
@media (min-width: 992px) {
  /* Landing Section */
  .landing-section {
    padding: 150px 0;
  }

  .photo-holder {
    width: 10rem;
    height: 10rem;
    padding: 1.1rem;
  }

  .landing-intro {
    font-size: 1.4rem;
  }

  .landing-title {
    font-size: 3.7rem;
    padding: 0;
  }

  .landing-subtitle {
    font-size: 1.2rem;
    padding: 0;
  }
}
</style>
