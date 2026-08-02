<script setup>
import { defineProps } from 'vue';
defineProps({
    training: {
        type: Object,
        required: true
    }
})
</script>


<template>
    <div class="training-card">

        <div class="img-holder">
            <div class="image-wrapper">
                <img :src="training.image" :alt="training.alt" class="training-image" loading="lazy" decoding="async" />
                <div class="training-overlay">
                    <a v-if="training.external" class="view-btn" :href="training.link" target="_blank"
                        :aria-label="`View ${training.title}`">View Training</a>
                    <RouterLink v-else class="view-btn" :to="training.link" :aria-label="`View ${training.title}`">
                        View
                    </RouterLink>
                </div>
            </div>
        </div>

        <div class="training-content">
            <h3 class="training-title">
                <a v-if="training.external" class="training-link" :href="training.link" target="_blank"
                    :aria-label="`View ${training.title}`">{{ training.title }}</a>
                <RouterLink v-else class="training-link" :to="training.link" :aria-label="`View ${training.title}`">
                    {{ training.title }}
                </RouterLink>
            </h3>
        </div>

    </div>
</template>

<style scoped>
.training-card {
    background-color: var(--color-primary);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--color-accent2);
    position: relative;
}

.training-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--color-accent);
}

.training-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 12px;
    display: block;
    transition: filter 0.3s ease, transform 0.3s ease;
}

.training-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.image-wrapper {
    position: relative;
    width: calc(100% - 3rem);
    margin: 1.5rem auto;
    border-radius: 12px;
    overflow: hidden;
}

.image-wrapper:hover .training-image {
    filter: brightness(0.4);
    transform: scale(1.02);
}

.image-wrapper:hover .training-overlay {
    opacity: 1;
}

.view-btn {
    pointer-events: auto;
    cursor: pointer;
    padding: 0.6rem 1.4rem;
    border-radius: 50px;
    border: none;
    background: var(--color-accent);
    color: white;
    font-weight: 600;
    text-decoration: none;
}

.view-btn:hover {
    box-shadow: 0 0 15px var(--color-accent);
    transform: scale(1.05);
}

.training-content {
    padding: 0 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.training-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-secondary);
    margin-bottom: 0.75rem;
}

.training-title:hover {
    color: var(--color-accent);
}

.training-description {
    color: var(--color-tertiary);
    opacity: 0.8;
    font-size: 0.8rem;
    flex-grow: 1;
    text-align: justify;
}

.training-link {
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 1;
}

@media (min-width: 992px) {
    .training-description {
        font-size: 0.9rem;
    }
}
</style>