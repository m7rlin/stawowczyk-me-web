<script setup>
// Define the props that this component accepts
defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 items-start">
        <!-- Thumbnail -->
        <div class="col-span-1">
            <!-- Using a placeholder for the thumbnail -->
            <NuxtImg
                class="aspect-video bg-gray-700 rounded-md flex items-center justify-center"
            >
                <UIcon
                    name="i-heroicons-photo"
                    class="text-gray-500 text-4xl"
                />
            </NuxtImg>
        </div>

        <!-- Project Details -->
        <div class="col-span-1 sm:col-span-3">
            <div class="flex items-baseline space-x-3">
                <h3 class="text-2xl font-bold text-white">
                    {{ project.name }}
                </h3>
                <!-- Added project dates here -->
                <span class="text-gray-400 text-sm whitespace-nowrap">
                    {{ project.startDate
                    }}{{ project.endDate ? `–${project.endDate}` : '–' }}
                </span>
            </div>
            <!-- Subtitle on a new line for better readability -->
            <p class="text-gray-500 text-sm mt-1">{{ project.subtitle }}</p>

            <ul class="mt-4 space-y-2 list-disc list-inside text-gray-300">
                <li v-for="point in project.description" :key="point">
                    {{ point }}
                </li>
            </ul>

            <UButton
                v-if="project.url"
                :to="project.url"
                target="_blank"
                variant="link"
                icon="i-heroicons-arrow-top-right-on-square"
                class="mt-2 px-0"
            >
                Visit Site
            </UButton>
        </div>
    </div>
</template>
