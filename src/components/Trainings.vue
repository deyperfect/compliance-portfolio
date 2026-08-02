<script setup>
import TrainingsCard from "./TrainingsCard.vue";
import trainings from "../data/trainings.json";
</script>

<template>
    <section id="trainings" class="trainings-section">
        <div class="container mx-auto">
            <h2 class="section-title">Trainings</h2>

            <div class="row g-2 justify-content-center">
                <div
                    v-for="training in trainings"
                    :key="training.id"
                    class="col-6 col-lg-3"
                    >
                    <TrainingsCard :training="training" />
                </div>             
            </div>      

        </div>
    </section>
</template>

<style scoped>
.trainings-section {
  background-color: var(--color-primary);
  padding: 80px 0;
}

@media (min-width: 768px) {
  .trainings-section {
    padding: 60px 0;
  }
}

@media (min-width: 992px) {
  /* #completed-projects {
        display: flex !important;
        justify-content: center !important;
        gap: 1.2rem !important;
    } */
}
</style>