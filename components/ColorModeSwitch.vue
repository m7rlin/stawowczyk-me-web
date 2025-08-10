<!-- components/ColorModeSwitch.vue -->
<script setup>
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === 'dark';
    },
    set() {
        // This will toggle the color mode
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    },
});
</script>

<template>
    <ClientOnly>
        <UButton
            class="cursor-pointer"
            :icon="
                isDark
                    ? 'i-heroicons-moon-20-solid'
                    : 'i-heroicons-sun-20-solid'
            "
            color="neutral"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
        />

        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>
