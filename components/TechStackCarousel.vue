<!-- components/TechStackCarousel.vue -->
<script setup>
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

// Duplicate the array to create a seamless loop
const extendedTechStack = [...techStack, ...techStack];
</script>

<template>
    <div class="relative w-full overflow-hidden bg-gray-900 py-12">
        <div
            class="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"
        ></div>
        <div class="flex animate-scroll">
            <div
                v-for="(tech, index) in extendedTechStack"
                :key="index"
                class="flex-shrink-0 mx-8 flex items-center justify-center"
            >
                <UIcon
                    :name="tech.icon"
                    class="text-5xl text-gray-500 transition-colors duration-300 hover:text-white"
                />
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
    animation: scroll 40s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>
