<template>
    <div
        class="relative w-full dark:bg-gray-900 bg-white cursor-grab active:cursor-grabbing py-8"
    >
        <!-- Fading Edges -->
        <div
            class="pointer-events-none z-10 absolute inset-y-0 left-0 w-24 xl:w-1/3 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-gray-900 before:to-0 before:z-10"
        ></div>
        <div
            class="pointer-events-none z-10 absolute inset-y-0 right-0 w-24 xl:w-1/3 after:absolute after:inset-0 after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-gray-900 after:to-0 after:z-10"
        ></div>
        <!-- Carousel -->
        <div ref="sliderRef" class="keen-slider">
            <div
                v-for="(tech, index) in techStack"
                :key="index"
                class="keen-slider__slide group relative flex flex-col items-center justify-center pb-8"
            >
                <UIcon
                    :name="tech.icon"
                    class="text-4xl md:text-5xl text-neutral-300 dark:text-gray-500 mb-2 transition-all duration-300 dark:group-hover:text-white group-hover:text-primary-500 group-hover:scale-110"
                />
                <span
                    class="absolute bottom-0 whitespace-nowrap dark:text-white text-primary-600 font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                >
                    {{ tech.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import KeenSlider, { type KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const isDragging = ref(false);

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

const sliderRef = ref<HTMLElement | null>(null);
let sliderInstance: KeenSliderInstance | null = null;

const animation = { duration: 30 * 1000, easing: (t: number) => t };

onMounted(() => {
    sliderInstance = new KeenSlider(sliderRef.value, {
        loop: true,
        drag: true,

        slides: {
            perView: 'auto', // Let the slider determine the number of slides
            spacing: 48,
        },
        breakpoints: {
            '(max-width: 1024px)': { slides: { perView: 8, spacing: 16 } },
            '(max-width: 640px)': { slides: { perView: 4, spacing: 8 } },
        },
        renderMode: 'performance',
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        dragStarted(s) {
            isDragging.value = true;
        },
        dragEnded(s) {
            isDragging.value = false;
        },
    });
});

onBeforeUnmount(() => {
    sliderInstance?.destroy();
});
</script>

<style scoped></style>
