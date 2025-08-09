<template>
    <button
        class="space-x-2 cursor-pointer px-4 py-2 rounded bg-neutral-500 dark:bg-neutral-800 hover:bg-neutral-600 dark:hover:bg-neutral-700 text-white"
        @click="sharePage"
    >
        <Icon name="i-heroicons-share" /><span>Teilen</span>
    </button>
</template>

<script setup>
function sharePage() {
    if (navigator.share) {
        navigator
            .share({
                title: document.title,
                text: 'Marcin Stawowczyk - Nuxt Expert',
                url: window.location.href,
            })
            .then(() => console.log('Erfolgreich geteilt'))
            .catch((error) => console.error('Fehler beim Teilen:', error));
    } else {
        alert('Teilen nicht unterstützt');
    }
}
</script>
