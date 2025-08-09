<script setup lang="ts">
import { CONTACT_ME_EMAIL } from '~/constants';
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
            color="neutral"
            variant="soft"
        />

        <!-- Availability Status -->
        <div class="flex items-center space-x-2">
            <span class="relative flex h-2 w-2">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                ></span>
                <span
                    class="relative inline-flex rounded-full h-2 w-2 bg-green-500"
                ></span>
            </span>
            <span class="text-green-400 font-base text-sm md:text-base">
                Available for new projects
            </span>
        </div>
    </div>
</template>
