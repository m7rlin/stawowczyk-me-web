<!-- app.vue -->
<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <UApp>
            <NuxtLayout> <NuxtPage /></NuxtLayout>
        </UApp>
        <div class="absolute top-4 right-4 z-20">
            <ColorModeSwitch />
        </div>
        <div class="fixed bottom-0 right-0 m-2 md:m-4">
            <div class="flex space-x-2">
                <ScrollToTop />
                <ShareMe />
            </div>
        </div>
    </div>
</template>
