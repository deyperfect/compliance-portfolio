<script setup>
import { computed } from 'vue';
const props = defineProps({
    training: {
        type: Object,
        required: true
    }
})

const formattedDate = computed(() => {
    const [day, month, year] = props.training.date.split('-')

    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    })
})

</script>

<template>
    <div class="training-card">

        <div class="image-wrapper">
            <img
                :src="training.image"
                :alt="training.alt"
                class="training-image"
                loading="lazy"
                decoding="async"
            />

            <div class="training-overlay">
                <a
                    v-if="training.external"
                    :href="training.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="view-btn"
                >
                    View Credential
                </a>

                <RouterLink
                    v-else
                    :to="training.link"
                    class="view-btn"
                >
                    View Credential
                </RouterLink>
            </div>
        </div>

        <div class="training-content">

            <h3 class="training-title">
                {{ training.title }}
            </h3>

            <div class="training-meta">
                <span>{{ training.issuer }}</span>
                <span class="dot">•</span>
                <span>{{ formattedDate }}</span>
            </div>

        </div>

    </div>
</template>


<style scoped>

.training-card {
    display: flex;
    flex-direction: column;

    background: #fff;
    border: 1px solid #E5E7EB;
    border-radius: 18px;

    overflow: hidden;

    transition:
        transform .25s ease,
        box-shadow .25s ease,
        border-color .25s ease;

    height: 100%;
}

.training-card:hover {
    transform: translateY(-6px);

    border-color: #D1D5DB;

    box-shadow:
        0 14px 30px rgba(0, 0, 0, .08);
}

/* IMAGE */

.image-wrapper {
    position: relative;
    overflow: hidden;
}

.training-image {
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;

    transition: transform .35s ease;
}

.training-card:hover .training-image {
    transform: scale(1.04);
}

/* OVERLAY */

.training-overlay {
    position: absolute;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, .45);

    opacity: 0;

    transition: opacity .25s ease;
}

.training-card:hover .training-overlay {
    opacity: 1;
}

.view-btn {
    padding: .75rem 1.3rem;

    background: white;
    color: #111827;

    border-radius: 999px;

    font-size: .95rem;
    font-weight: 600;

    text-decoration: none;

    transition: .2s;
}

.view-btn:hover {
    background: #111827;
    color: white;
}

/* CONTENT */

.training-content {
    display: flex;
    flex-direction: column;

    gap: .75rem;

    padding: 1.4rem;
}

.training-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;

    color: #111827;

    min-height: 78px;
}

.training-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;

    font-size: .9rem;

    color: #6B7280;
}

.dot {
    color: #9CA3AF;
}
/* .training-card {
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
} */
</style>