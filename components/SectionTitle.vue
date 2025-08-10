<!-- components/SectionTitle.vue -->
<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white">
        {{ title }}
    </h2>
</template>
