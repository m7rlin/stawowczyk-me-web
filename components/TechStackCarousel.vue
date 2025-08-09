<!-- components/TechStackCarousel.vue -->
<script setup>
import ScrollBooster from 'scrollbooster';

// --- Data ---
const techStack = [
    { name: 'JavaScript', icon: 'i-simple-icons-javascript' },
    { name: 'HTML5', icon: 'i-simple-icons-html5' },
    { name: 'CSS3', icon: 'i-simple-icons-css3' },
    { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
    { name: 'NestJS', icon: 'i-simple-icons-nestjs' },
    { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
    { name: 'Strapi', icon: 'i-simple-icons-strapi' },
    { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
    { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs' },
];

// Duplicate the array for a seamless animation loop
const extendedTechStack = [...techStack, ...techStack];

// --- State ---
const viewportRef = ref(null); // Template ref for the scrollable area
const isDragging = ref(false); // Tracks if the user is dragging

// --- Lifecycle ---
onMounted(() => {
    if (viewportRef.value) {
        new ScrollBooster({
            viewport: viewportRef.value,
            content: viewportRef.value.querySelector('.scrolling-content'), // Target the content specifically
            scrollMode: 'native',
            direction: 'horizontal',
            emulateScroll: true,
            onUpdate: (state) => {
                isDragging.value = state.isDragging;
            },
        });
    }
});
</script>

<template>
    <!-- The main container for the carousel -->
    <div
        ref="viewportRef"
        class="relative w-full overflow-hidden bg-gray-900 cursor-grab active:cursor-grabbing py-8"
    >
        <!-- Fading edges -->
        <div
            class="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"
        ></div>
        <div
            class="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"
        ></div>

        <!-- Scrolling Content Wrapper -->
        <div
            class="scrolling-content flex animate-scroll"
            :class="{ 'is-dragging': isDragging }"
        >
            <!-- Loop through each tech item -->
            <div
                v-for="(tech, index) in extendedTechStack"
                :key="index"
                class="group relative flex-shrink-0 mx-8 flex flex-col items-center justify-center"
            >
                <!-- The Icon -->
                <UIcon
                    :name="tech.icon"
                    class="text-5xl text-gray-500 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                />
                <!-- The Name (appears on hover) -->
                <span
                    class="absolute -bottom-7 whitespace-nowrap text-white font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                >
                    {{ tech.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    /* Default animation speed for desktop */
    animation: scroll 40s linear infinite;
}

/* Faster animation for mobile devices */
@media (max-width: 768px) {
    .animate-scroll {
        animation-duration: 25s;
    }
}

/* Pause animation when the user hovers over the carousel or is dragging */
.scrolling-content:hover,
.scrolling-content.is-dragging {
    animation-play-state: paused;
}
</style>
