<script setup lang="ts">
import { CONTACT_ME_EMAIL, AVAILABLE_FOR_NEW_PROJECTS } from '~/constants';
</script>

<!-- components/CallToAction.vue -->
<template>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <!-- Contact Me Button -->
        <UButton
            class="cursor-pointer"
            :to="'mailto:' + CONTACT_ME_EMAIL"
            label="Contact Me"
            size="lg"
            color="primary"
            variant="soft"
        />

        <!-- Conditional Availability Status -->
        <div
            v-if="AVAILABLE_FOR_NEW_PROJECTS"
            class="flex items-center space-x-2"
        >
            <span class="relative flex size-2">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                ></span>
                <span
                    class="relative inline-flex rounded-full size-2 bg-green-500"
                ></span>
            </span>
            <span class="text-green-400 font-base text-sm">
                Available for new projects
            </span>
        </div>

        <div v-else class="flex items-center space-x-2">
            <!-- A simple, non-pulsating dot for the 'not available' status -->
            <span class="relative flex size-2">
                <span
                    class="relative inline-flex rounded-full size-2 bg-gray-500"
                ></span>
            </span>
            <span class="text-gray-400 font-base text-sm">
                Currently booked, but open for inquiries
            </span>
        </div>
    </div>
</template>
