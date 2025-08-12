<template>
    <button
        v-if="visible"
        @click="scrollToTop"
        class="space-x-2 cursor-pointer px-4 py-2 rounded bg-primary-500 dark:bg-primary-900 hover:bg-primary-600 dark:hover:bg-primary-800 text-white"
    >
        ↑
    </button>
</template>

<script setup>
const visible = ref(false);

const scrollListener = () => {
    visible.value = window.scrollY > 150;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', scrollListener);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollListener);
});
</script>

<style scoped></style>
